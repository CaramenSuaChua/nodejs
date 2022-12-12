import './editHotel.css'
import React, { useEffect, useState } from 'react';
import Modal from "react-bootstrap/Modal";
import Button from 'react-bootstrap/Button';
import { useFormik } from 'formik';
import { useDispatch } from 'react-redux';
import { getRooms, editHotel, getHotel } from '../../../redux/products/products';
import { FormInput } from 'shards-react';
const EditHotel = ({ dataEdit }) => {
    const dispatch = useDispatch()
    const [inforRooms, setInforRooms] = useState([]);
    const [roomsList, setRoomsList] = useState(dataEdit.rooms);
    const [show, setShow] = useState(false);
    useEffect(() => {
      dispatch(getRooms()).then(res => setInforRooms(res.payload && res.payload.data && res.payload.data.results))
      dispatch(getHotel()).then(res => console.log(res.payload.data))
    }, [])
    const handleClose = () => setShow(false);
    const handleShow = () => {
      const rooms = dataEdit.rooms
      let room = [];
      rooms.forEach(roomId => {
          const infRoom = inforRooms.find(inforRom => inforRom._id === roomId)
          if (infRoom) {
              room.push(infRoom.title)
          }
          setRoomsList(room)
      })
      setShow(true)
  };
    const handleSelect = (e) => {
        const updatedOptions = [...e.target.options]
        .filter(option => option.selected)
        .map(x => x.value);
        setRoomsList(updatedOptions);
    }
  const handleChangeFea = (e) => {
  }
  const submitForm = (value) => {
    dispatch(editHotel(value))
    window.location.reload(false);
  }
    const {values, handleChange, handleSubmit, setFieldValue} = useFormik({
      initialValues : !dataEdit ? {} :{
            id : dataEdit._id,
            name : dataEdit.name === null ? '' : dataEdit.name,
            type : dataEdit.type === null ? '' : dataEdit.type,
            city : dataEdit.city === null ? '' : dataEdit.city,
            address : dataEdit.address === null ? '' : dataEdit.address,
            distance : dataEdit.distance === null ? '' : dataEdit.distance,
            title : dataEdit.title === null ? '' : dataEdit.title,
            desc : dataEdit.desc === null ? '' : dataEdit.desc,
            cheapestPrice : dataEdit.cheapestPrice === null ? '' : dataEdit.cheapestPrice,
            photos : dataEdit.photos === null ? '' : dataEdit.photos,
            featured : dataEdit.featured === null ? '' : (dataEdit.featured === true ? 'Yes' : 'No'),
            room : dataEdit.room === null ? '' : dataEdit.room,
      },
      onSubmit: submitForm
    })
    return (
        <div>
            <button type="button" className="btn btn-outline-warning" onClick={handleShow} >Edit</button>
            <Modal
                size='lg'
                show={show}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton onClick={handleClose}>
                    <Modal.Title>Edit Hotel</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className='chart'>
                        <form className="form" >
                            <div className="row mb-4">
                                <div className="col">
                                    <div className="form-outline">
                                        <label className="form-label" htmlFor="name">Name</label>
                                        <FormInput
                                            id="name"
                                            name="name"
                                            type="text"
                                            value={values.name}
                                            placeholder="Tên Hotel"
                                            onChange={handleChange}
                                            class="form-control"
                                        />
                                    </div>
                                </div>
                                <div className="col">
                                    <div className="form-outline">
                                        <label className="form-label" htmlFor="type">Type</label>
                                        <FormInput onChange={handleChange} type="text" value={values.type} name="type" className="form-control"  />
                                    </div>
                                </div>
                            </div>
                            <div className="row mb-4">
                                <div className="col">
                                    <div className="form-outline">
                                        <label className="form-label" htmlFor="city">City</label>
                                        <FormInput onChange={handleChange} type="text" value={values.city} name="city" className="form-control"  />
                                    </div>
                                </div>
                                <div className="col">
                                    <div className="form-outline">
                                        <label className="form-label" htmlFor="address">Address</label>
                                        <FormInput onChange={handleChange} type="text" value={values.address} name="address" className="form-control"  />
                                    </div>
                                </div>
                            </div>
                            <div className="row mb-4">
                                <div className="col">
                                    <div className="form-outline">
                                        <label className="form-label" htmlFor="distance">Distance from City Center</label>
                                        <FormInput onChange={handleChange} type="number" value={values.distance} name="distance" className="form-control"  />
                                    </div>
                                </div>
                                <div className="col">
                                    <div className="form-outline">
                                        <label className="form-label" htmlFor="title">Title</label>
                                        <FormInput onChange={handleChange} type="text" value={values.title} name="title" className="form-control"  />
                                    </div>
                                </div>
                            </div>
                            <div className="row mb-4">
                                <div className="col">
                                    <div className="form-outline">
                                        <label className="form-label" htmlFor="description">Description</label>
                                        <FormInput onChange={handleChange} type="text" value={values.desc} name="description" className="form-control"  />
                                    </div>
                                </div>
                                <div className="col">
                                    <div className="form-outline">
                                        <label className="form-label" htmlFor="price">Price</label>
                                        <FormInput onChange={handleChange} type="number" value={values.cheapestPrice} name="cheapestPrice" className="form-control"  />
                                    </div>
                                </div>
                            </div>
                            <div className="row mb-4">
                                <div className="col">
                                    <div className="form-outline">
                                        <label className="form-label" htmlFor="photos">Images</label>
                                        <textarea className="form-control" value={values.photos} onChange={handleChange} name="photos" rows="2" ></textarea>
                                    </div>
                                </div>
                                <div className="col">
                                    <div className="form-outline">
                                        <label className="form-label" htmlFor="feature">Feature</label>
                                        <select className="form-control" name="feature" value={values.featured} onChange={handleChangeFea} >
                                            <option>No</option>
                                            <option>Yes</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div className="form-group">
                                <div className="form-outline">
                                    <label className="form-label" htmlFor="rooms">Rooms</label>
                                    <select multiple className="form-control" name="rooms" value={roomsList} onChange={handleSelect}>
                                        {inforRooms && inforRooms.map(room => {
                                            return (
                                                <option key={room._id}>{room.title}</option>
                                            )
                                        })}
                                    </select>
                                </div>
                            </div>
                            <div className="button">
                        {/* <button type="submit" className="btn btn-primary btn-block mb-4">Send</button> */}
                    </div>
                        </form>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleSubmit}>SUBMIT</Button>
                </Modal.Footer>
            </Modal >
        </div >
    )
}

export default EditHotel