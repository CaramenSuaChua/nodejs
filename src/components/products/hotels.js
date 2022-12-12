/* eslint jsx-a11y/anchor-is-valid: 0 */

import React, {useEffect, useState} from "react";
import {useDispatch} from 'react-redux'
import {getHotel, delHotel, getDetailHotel} from '../../redux/products/products'
import EditHotel from "./detail/detailHotel";
import { useHistory } from "react-router-dom";
const Hotel = () => {
  const [data, setData] = useState([])
  const [hide, setHide] = useState(false)
  const history = useHistory()
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getHotel()).then(res => {
      setData(res.payload && res.payload.data)
    })
  },[])

  const handleDel = (e) => {
    dispatch(delHotel(e.target.value))
    window.location.reload(false)
  }
  return (
  <>
        <div className="d-flex box-top justify-content-between" style={{marginTop:'30px',}}>
          <h4 className="heading">
            Hotels List
          </h4>
          <button type="button" class="btn btn-outline-success"
          onClick={() => history.push('/new_hotel')}
           style={{marginRight:'65px'}}>Add New</button>
        </div>
    <table class="table">
      <thead>
        <tr>
          <th scope="col">ID</th>
          <th scope="col">Name</th>
          <th scope="col">Type</th>
          <th scope="col">Title</th>
          <th scope="col">City</th>
          <th scope="col">Action</th>
        </tr>
      </thead>
     <tbody>
          {data&& data.map((h, idx) => {
            return(
              <tr>
              <th scope="row" key={idx}>{h._id}</th>
              <td>{h.name}</td>
              <td>{h.type}</td>
              <td>{h.title}</td>
              <td>{h.city}</td>
              <td>
                <EditHotel dataEdit={h}/>
              </td>
              <td>
                <button type="button" class="btn btn-outline-danger" value={h._id} onClick={handleDel}>Delete</button>
              </td>
              </tr>
            )
          })}
      </tbody>
    </table>
  </>
  );
  }


export default Hotel;
