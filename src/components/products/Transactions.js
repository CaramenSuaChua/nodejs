/* eslint jsx-a11y/anchor-is-valid: 0 */
// import '../blog/'
import React, {useEffect, useState} from "react";
import {useDispatch} from 'react-redux'
import {getTran} from '../../redux/products/products'
import moment from 'moment';
const Hotel = () => {
  const [data, setData] = useState({})
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getTran()).then(res => setData(res.payload.data))
  },[])
  return (
  <>
        <div className="d-flex box-top justify-content-between" style={{marginTop:'30px',}}>
          <h4 className="heading">
            Transactions List
          </h4>
          <button type="button" class="btn btn-outline-success" style={{marginRight:'65px'}}>Add New</button>
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
        {/* <tr> */}
          {data.length > 0 && data.map((h, idx) => {
            return(
              <tr>
              <th scope="row" key={idx}>{h._id}</th>
              <td>{h.user}</td>
              <td>{h.hotel.name}</td>
              <td>{h.room.toString()}</td>
              <td>{moment(h.dateStart).format('DD/MM/YYYY')} - {moment(h.dateStart).format('DD/MM/YYYY')}</td>
              <td>{h.price}</td>
              <td>{h.payment}</td>
              <td style={{}}>
              {h.status }
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


export default Hotel;
