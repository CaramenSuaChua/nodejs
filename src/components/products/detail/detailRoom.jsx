import './editHotel.css'
import React, { useEffect, useState } from 'react';
import Modal from "react-bootstrap/Modal";
import Button from 'react-bootstrap/Button';
import { useFormik } from 'formik';
import { useDispatch } from 'react-redux';
import { getRooms, editRooms, getHotel } from '../../../redux/products/products';
import { FormInput } from 'shards-react';
import Select from 'react-select';
const EditRoom = ({ dataEdit }) => {
    const [inforRooms, setInforRooms] = useState([]);
    const [roomsList, setRoomsList] = useState([]);
    const [hotelList, setHotelList] = useState([]);
    const dispatch = useDispatch()
    const [show, setShow] = useState(false);
    useEffect(() => {
      dispatch(getRooms()).then(res => setInforRooms(res.payload && res.payload.data && res.payload.data.results))
      dispatch(getHotel()).then(res => setHotelList(res.payload.data))
    }, [])
    const handleClose = () => setShow(false);
    const handleShow = () => {
      setShow(true)
  };
  
  const hotelOp = hotelList && hotelList.map(h => ({
    value: h._id,
    label : h.name,
  }))
  const handleChangeHotel = (newValue) => {
    if(newValue !== null) {
        setFieldValue('hotel', newValue.value)
        setRoomsList(newValue.value);
    }
  }
  const submitForm = (value) => {
    dispatch(editRooms(value))
    window.location.reload(false)
  }
    const {values, handleChange, handleSubmit, setFieldValue} = useFormik({
      initialValues : !dataEdit ? {} :{
            id : dataEdit._id,
            title : dataEdit.title === null ? '' : dataEdit.title,
            desc : dataEdit.desc === null ? '' : dataEdit.desc,
            price : dataEdit.price === null ? '' : dataEdit.price,
            maxPeople : dataEdit.maxPeople === null ? '' : dataEdit.maxPeople,
            roomNumbers : dataEdit.roomNumbers === null ? '' : dataEdit.roomNumbers,
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
                                            id="title"
                                            name="title"
                                            type="text"
                                            value={values.title}
                                            placeholder="Tên Hotel"
                                            onChange={handleChange}
                                            class="form-control"
                                        />
                                    </div>
                                </div>
                                <div className="col ">
                                    <div className="form-outline">
                                        <label className="form-label" htmlFor="type">Description</label>
                                        <FormInput onChange={handleChange} type="text" value={values.desc} name="desc" className="form-control"  />
                                    </div>
                                </div>
                            </div>
                            <div className="row mb-4">
                                <div className="col">
                                    <div className="form-outline">
                                        <label className="form-label" htmlFor="city">Price</label>
                                        <FormInput onChange={handleChange} type="number" value={values.price} name="price" className="form-control"  />
                                    </div>
                                </div>
                                <div className="col">
                                    <div className="form-outline">
                                        <label className="form-label" htmlFor="address">Max People</label>
                                        <FormInput onChange={handleChange} type="number" value={values.maxPeople} name="maxPeople" className="form-control"  />
                                    </div>
                                </div>
                            </div>
                            <div className="row mb-4">
                                <div className="col">
                                    <div className="form-outline">
                                        <label className="form-label" htmlFor="description">Room Number</label>
                                        <FormInput onChange={handleChange} type="text" value={values.roomNumbers} name="roomNumbers" className="form-control"  />
                                    </div>
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

export default EditRoom