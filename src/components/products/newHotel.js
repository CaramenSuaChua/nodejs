import React, {useEffect, useState} from "react";
import { useFormik } from 'formik';
import {useDispatch} from 'react-redux'
import { getRooms, postHotel } from '../../redux/products/products'
import { FormInput } from "shards-react";


const NewHotel = () => {
  const [data, setData] = useState({})
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getRooms()).then(res => setData(res.payload.data&& res.payload.data.results))
  },[])

  const submitForm = (value) => {
    const newValue = {...value}
    console.log(newValue);
    
    dispatch(postHotel(newValue))
  }
  
  const {handleChange,handleSubmit} = useFormik({
    initialValues: {
    },
    onSubmit: submitForm
  });

    return (
  <form className="chart" style={{margin:'20px 20px 20px 20px'}}>
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
        <label class="form-label" for="form6Example1">Name</label>
        <FormInput
              id="name"
              name="name"
              type="text"
              placeholder="Tên Hotel"
              onChange={handleChange}
              class="form-control"
        />
      </div>
    </div>
    <div class="col">
      <div class="form-outline">
        <label class="form-label" for="form6Example2">Type</label>
        <FormInput
              id="type"
              name="type"
              type="text"
              placeholder="Type"
              onChange={handleChange}
              class="form-control"
        />
      </div>
    </div>
  </div>

  <div class="row mb-4">
    <div class="col">
      <div class="form-outline">
        <label class="form-label" for="form6Example1">City</label>
        <FormInput
              id="city"
              name="city"
              type="text"
              placeholder="City"
              onChange={handleChange}
              class="form-control"
        />
      </div>
    </div>
    <div class="col">
      <div class="form-outline">
        <label class="form-label" for="form6Example2">Address</label>
        <FormInput
              id="address"
              name="address"
              type="text"
              placeholder="Address"
              onChange={handleChange}
              class="form-control"
        />
      </div>
    </div>
  </div>

  <div class="row mb-4">
    <div class="col">
      <div class="form-outline">
        <label class="form-label" for="form6Example1">Distance from City Center</label>
        <FormInput
              id="distance"
              name="distance"
              type="text"
              placeholder="Distance"
              onChange={handleChange}
              class="form-control"
        />
      </div>
    </div>
    <div class="col">
      <div class="form-outline">
        <label class="form-label" for="form6Example2">Title</label>
        <FormInput
              id="title"
              name="title"
              type="text"
              placeholder="Title"
              onChange={handleChange}
              class="form-control"
        />
      </div>
    </div>
  </div>

  <div class="row mb-4">
    <div class="col">
      <div class="form-outline">
        <label class="form-label" for="form6Example1">Description</label>
        <FormInput
              id="desc"
              name="desc"
              type="text"
              placeholder="Description"
              onChange={handleChange}
              class="form-control"
        />
      </div>
    </div>
    <div class="col">
      <div class="form-outline">
        <label class="form-label" for="form6Example2">Price</label>
        <FormInput
              id="cheapestPrice"
              name="cheapestPrice"
              type="text"
              placeholder="CheapestPrice"
              onChange={handleChange}
              class="form-control"
        />
      </div>
    </div>
  </div>

  <div class="row mb-4">
    <div class="col">
      <div class="form-outline">
        <label class="form-label" for="form6Example1">Images</label>
        <FormInput
              id="photos"
              name="photos"
              type="text"
              placeholder="Link Photos"
              onChange={handleChange}
              class="form-control"
        />
      </div>
    </div>
    <div class="col">
      <div class="form-outline">
        <label class="form-label" for="form6Example2">Featured</label>
        <select type="text" id="featured" name='featured' onChange={handleChange} class="form-control" >
          <option>Lựa chọn</option>
          <option>YES</option>
          <option>NO</option>
        </select>
      </div>
    </div>
  </div>

  <div class="form-outline mb-4">
    <label class="form-label" for="form6Example7">Rooms</label>
    <select multiple class="form-control" id="rooms" name='rooms' onChange={handleChange} rows="4">
      {data.length> 0 && data.map(r => {
        return(
          <option>{r.title}</option>
        )
      })}
    </select>
  </div>
    <button type="submit" class="btn btn-primary btn-block mb-4"  onClick={handleSubmit}>Send</button>
  </form>
    );
}


export default NewHotel;
