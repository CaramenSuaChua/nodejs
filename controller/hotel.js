const Hotel = require('../model/Hotel')
const Room = require('../model/room')
const Trans = require('../model/transaction')
////////////get hotel
exports.getHotel = (req, res, next) => {
    Hotel.find().then(hotels => {
        res.status(200).send(hotels);
    })
    .catch(err => console.log(err))
}

exports.getRvHotel = (req, res, next) => {

    Hotel.find().then(hotels => {
        const result = {
            city: [{
                name: 'Ha Noi',
                imageUrl: "https://cf.bstatic.com/xdata/images/city/max500/957801.webp?k=a969e39bcd40cdcc21786ba92826063e3cb09bf307bcfeac2aa392b838e9b7a5&o=",
                total: hotels.filter(hotel => hotel.city === 'Ha Noi').length || 0
            },
            {
                name: 'Ho Chi Minh',
                imageUrl: "https://cf.bstatic.com/xdata/images/city/max500/690334.webp?k=b99df435f06a15a1568ddd5f55d239507c0156985577681ab91274f917af6dbb&o=",
                total: hotels.filter(hotel => hotel.city === 'Ho Chi Minh').length || 0
            },
            {
                name: 'Da Nang',
                imageUrl: "https://cf.bstatic.com/xdata/images/city/max500/689422.webp?k=2595c93e7e067b9ba95f90713f80ba6e5fa88a66e6e55600bd27a5128808fdf2&o=",
                total: hotels.filter(hotel => hotel.city === 'Da Nang').length || 0
            },
            ],
            top_rate: hotels.sort((a, b) => b.rating - a.rating).slice(0, 3)
        }
        res.status(200).send(result)
    })

}

//////////////search Hotel
exports.searchHotel = (req, res, next) => {
    const dataSearch = req.body
    const date = new Date(dataSearch.date[0].startDate)
    console.log(date.getTime())
    Hotel.find({ city: dataSearch.destination }).populate('rooms').then(hotels => {
        const hotel_Search = hotels
            .filter(hotel => hotel.rooms && hotel.rooms.find(room => room.createdAt.getTime() <= new Date(dataSearch.date[0].startDate).getTime()
             && room.roomNumbers && room.roomNumbers.length >= dataSearch.options.room
            ))
        res.status(200).send(hotel_Search)
    })
}

exports.detailHotels = (req, res, next ) => {
    const hotelId = req.params.hotelId
    if (hotelId) {
        Hotel.findById(hotelId).populate('rooms').then(hotel => {
            if (hotel) {
                res.status(200).send(hotel)
            }
            else {
                res.status(300).send({ message: 'No Hotel!' })
            }
        })
    }
}

/////////fetch room 
exports.getRooms = (req, res, next) => {
    Room.find()
    .then(room => {
        res.status(200).send({
            'results': room
        })
    })
}

exports.adminAddHotel = (req, res, next) => {
    const {name, city, distance, desc, photos, type, address, title, cheapestPrice, rooms} = req.body
    const featured = req.body.featured === 'true' ? 'true' : 'false'
    Room.find({title : rooms}).then(data => {
        const roomIds = []
        data.forEach(i => {
            return roomIds.push(i._id.toString())
        })
        const newHotel = new Hotel({
            name : name, 
            city : city, 
            distance: distance, 
            desc : desc,
            photos : photos,
            type : type,
            address : address,
            title : title,
            cheapestPrice : cheapestPrice,
            rooms : roomIds,
            featured : featured
        })
        newHotel.save()
        res.send(newHotel)
    })
}

exports.adminEditHotel = (req, res, next) => {
    const id = req.params.id
    const {name, city, distance, desc, photos, type, address, title, cheapestPrice, rooms} = req.body
    Hotel.findByIdAndUpdate(id, {
        name: name, 
        city:city, 
        distance: distance, 
        desc:desc, 
        photos: photos, 
        type:type, 
        address: address, 
        title:title, 
        cheapestPrice: cheapestPrice, 
        rooms:rooms, 
    }, function(err, model) {
        if(err){
           console.log(err);
        }
        res.send({'item:success': model});
    })
}

exports.deleteHotel = (req, res, next) => {
    const hotelIds = req.body.id
    Trans.find({hotel : hotelIds}).then(t => {
        const a = t.filter(tr => tr.status !== 'Checkout')
        if(a.length === 0){
            return Hotel.findByIdAndRemove(hotelIds)
            .then(h => {
                return res.status(200).send({
                    'message': 'Delete SuccesFully'
                }) 
            })
        } else {
            res.status(400).send({
                'message': 'Delete Failed'
            })
        }
    })
}
exports.adminDelRoom = (req, res, next) => {
    const {id} = req.body
    Room.find({_id : id})
    .then(r => {
        r.forEach(ro => {
            Trans.find({room : {$in : ro.roomNumbers}})
            .then(t => {
                const a = t.filter(tr => tr.status !== 'Booked')
                if (a.length > 0) {
                    res.status(400).send({message : 'Cannot delete room! There is unpaid transaction with this room!'})
                } else {
                    Room.findByIdAndRemove(id).then(room => {
                        return res.status(200).send({'message' : 'Delete SuccesFully'})
                    })
                }
            })
        })
        
    })
}
exports.adminAddRooms = (req, res, next) => {
    const {title, desc, price, maxPeople, roomNumbers, } = req.body
    const newRooms = new Room({
        title : title, 
        desc : desc, 
        price: price, 
        maxPeople : maxPeople,
        roomNumbers : roomNumbers,
    })
    newRooms.save()
    .then(result => {
        Hotel
            .findOne({name: req.body.hotel})
            .then(hotel => {
                hotel.rooms.push(result.id);
                hotel.save()
                res.status(200).send('Created Room SuccesFully')
            })
    })
    .catch(err => console.log(err));
}

exports.adminEditRoom = (req, res, next) => {
    const {id} = req.params
    const {title, desc, price, maxPeople, roomNumbers} = req.body
    Room.findByIdAndUpdate(id, {
        title : title,
        desc : desc,
        price: price,
        maxPeople : maxPeople,
        roomNumbers : roomNumbers
    }, function(err, model) {
        if(err) {
            console.log(err);
        } else {
            res.status(200).send({'message' : 'Update SuccessFully'})
        }
    })
}