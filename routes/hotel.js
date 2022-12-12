const express = require('express')
const router = express.Router()
const hotelController = require ('../controller/hotel')

router.get('/hotels', hotelController.getHotel)

router.get('/rvhotels', hotelController.getRvHotel)

router.post('/search', hotelController.searchHotel)

router.get('/hotels/:hotelId', hotelController.detailHotels)

router.get('/rooms/', hotelController.getRooms)

///////////admin 
router.post('/add_hotel/', hotelController.adminAddHotel)

router.post('/edit_hotel/:id', hotelController.adminEditHotel)

router.post('/del_hotel', hotelController.deleteHotel)

router.post('/add_room/', hotelController.adminAddRooms)

router.post('/edit_room/:id', hotelController.adminEditRoom)

router.post('/del_room/', hotelController.adminDelRoom)

module.exports = router