import React, {useEffect, useState} from "react";
import PropTypes from "prop-types";
import {
  Card,
  CardHeader,
  CardBody,
  Form,
  FormGroup,
  FormInput,
  FormTextarea,
  Button
} from "shards-react";
import {getTran} from '../redux/products/products'
import { useDispatch } from "react-redux";
const ListTran = () => {
    const dispatch = useDispatch()
    const [data, setData] = useState([])
    useEffect(() => {
        dispatch(getTran()).then(res => setData(res.payload.data))
    }, [])
  return(
    <>
      <div className="d-flex box-top justify-content-between" style={{marginTop:'30px',}}>
            <h4 className="heading">
              Rooms List
            </h4>
            <button type="button" class="btn btn-outline-success" style={{marginRight:'25px'}}>Add New</button>
          </div>
      
      <table class="table">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">User</th>
            <th scope="col">Hotel</th>
            <th scope="col">Room</th>
            <th scope="col">Date</th>
            <th scope="col">Price</th>
            <th scope="col">Payment Method</th>
            <th scope="col">Status</th>
          </tr>
        </thead>
        <tbody>
            {data.length > 0 && data.map((h, idx) => {
              return(
                <tr>
                    <th scope="row" key={idx}>{h._id}</th>
                    <td>{h.user}</td>
                    <td>{h.hotel && h.hotel.name}</td>
                    <td>{h.room.toString('')}</td>
                    <td>{h.dateStart} - {h.dateEnd}</td>
                    <td>{h.price}</td>
                    <td>{h.payment}</td>
                    <td>{h.status}</td>
                </tr>
              )
            }).splice(0,8)}
        </tbody>
      </table>
    </>
  )
}

export default ListTran;
