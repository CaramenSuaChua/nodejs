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
import PageTitle from "../common/PageTitle";
import {useDispatch} from 'react-redux'
import {getRooms, delRoom} from '../../redux/products/products'
import EditRoom from "./detail/detailRoom";
import { useHistory } from "react-router-dom";
const Princess = () => {
  const [data, setData] = useState({})
  const dispatch = useDispatch()
  const history = useHistory()
  useEffect(() => {
    dispatch(getRooms()).then(res => setData(res.payload.data.results))
  },[])

  const handleDel = (e) => {
    dispatch(delRoom(e.target.value))
  }
  return (
    <>
      <div className="d-flex box-top justify-content-between" style={{marginTop:'30px',}}>
            <h4 className="heading">
              Rooms List
            </h4>
            <button type="button" class="btn btn-outline-success" style={{marginRight:'25px'}}
            onClick={() => history.push('/new_room')}
            >Add New</button>
          </div>
      
      <table class="table">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Title</th>
            <th scope="col">Description</th>
            <th scope="col">Price</th>
            <th scope="col">Max People</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {/* <tr> */}
            {data.length > 0 && data.map((h, idx) => {
              return(
                <tr>
                <th scope="row" key={idx}>{h._id}</th>
                <td>{h.title}</td>
                <td>{h.desc}</td>
                <td>{h.price}</td>
                <td>{h.maxPeople}</td>
                <td>
                  <EditRoom dataEdit={h}/> 
                <button type="button" class="btn btn-outline-danger" value={h._id} onClick={handleDel}>Delete</button>
                </td>
                </tr>
              )
            })}
          {/* </tr> */}
        </tbody>
      </table>
    </>
    );
  }


export default Princess;
