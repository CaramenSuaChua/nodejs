/* eslint jsx-a11y/anchor-is-valid: 0 */

import React, {useEffect, useState} from "react";
import {
  Container,
  Row,
  Col,
  Card,
  CardBody,
  CardFooter,
  Badge,
  Button
} from "shards-react";
import { useFormik } from "formik";
import {useDispatch} from 'react-redux'
import { getHotel, postRooms } from '../../redux/products/products'
const NewRoom = () => {
  const [data, setData] = useState({})
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getHotel()).then(res => setData(res&&res.payload && res.payload.data))
  },[])
  const submitForm = (value) => {
    console.log(value);
    dispatch(postRooms(value))
  }
  const {handleChange,handleSubmit} = useFormik({
    initialValues: {
    },
    onSubmit: submitForm
  });

    return (
  <div className="chart" style={{margin:'20px 20px 20px 20px'}}>
    <div class="row mb-4" style={{marginTop:'30px'}}>
    <div class="col">
      <div class="form-outline">
        <label class="form-label" for="form6Example1">Add New Product</label>
      </div>
    </div>
  </div>

  <div class="row mb-4" style={{marginTop:'30px'}}>
    <div class="col">
      <div class="form-outline">
        <label class="form-label" for="form6Example1">Title</label>
        <input type="text" name='title' id='title' onChange={handleChange} class="form-control" />
      </div>
    </div>
    <div class="col">
      <div class="form-outline">
        <label class="form-label" for="form6Example2">Description</label>
        <input type="text" id="desc" name='desc' onChange={handleChange} class="form-control" />
      </div>
    </div>
  </div>

  <div class="row mb-4">
    <div class="col">
      <div class="form-outline">
        <label class="form-label" for="form6Example1">Price</label>
        <input type="text" id="price" name='price'  onChange={handleChange} class="form-control" />
      </div>
    </div>
    <div class="col">
      <div class="form-outline">
        <label class="form-label" for="form6Example2">Max People</label>
        <input type="text" id="maxPeople" name='maxPeople' onChange={handleChange} class="form-control" />
      </div>
    </div>
  </div>

  <div class="row mb-4">
    <div class="col">
      <div class="form-outline">
        <label class="form-label" for="form6Example1">Rooms Number</label>
        <input type="text" id="roomNumbers" name='roomNumbers' onChange={handleChange} class="form-control" />

      </div>
    </div>
    <div class="col">
      <div class="form-outline">
        <label class="form-label" for="form6Example2">Hotel</label>
        <select type="text" id="hotel" onChange={handleChange} class="form-control" >
        <option> </option>
        {data.length> 0 && data.map(r => {
        return(
            <option>{r.title}</option> 
        )
      })}
        </select>
      </div>
    </div>
  </div>
  <button type="submit" class="btn btn-primary btn-block mb-4"  onClick={handleSubmit}>Send</button>
</div>
    );
  }


export default NewRoom;
