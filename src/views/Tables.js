import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Container, Row, Col, Card, CardHeader, CardBody } from "shards-react";
import PageTitle from "../components/common/PageTitle";
import { getOrder } from "../redux/orders/orders";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Tables = () => {
  const [data, setData] = useState('')
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getOrder()).then(res => setData(res.payload.data.results))
  }, [])

    return(
      <Container fluid className="main-content-container px-4">
      {/* Page Header */}
      <Row noGutters className="page-header py-4">
        <PageTitle sm="4" title="Order" subtitle="Your Order" className="text-sm-left" />
      </Row>

      {/* Default Light Table */}
      <Row>
        <Col>
          <Card small className="mb-4">
            <CardHeader className="border-bottom">
              <h6 className="m-0">Your Orders</h6>
            </CardHeader>
            <CardBody className="p-0 pb-3">
              <table className="table mb-0">
                <thead className="bg-light">
                  <tr>
                    <th scope="col" className="border-0">
                      TT
                    </th>
                    <th scope="col" className="border-0">
                      Products
                    </th>
                    <th scope="col" className="border-0">
                      ADDRESS
                    </th>
                    <th scope="col" className="border-0">
                      PIN CODE
                    </th>
                    <th scope="col" className="border-0">
                      STATUS
                    </th>
                    <th scope="col" className="border-0">
                      CITY
                    </th>
                    <th scope="col" className="border-0">
                      PAID
                    </th>
                    <th scope="col" className="border-0">
                      Phone
                    </th>
                    <th scope="col" className="border-0">
                      TOTAL PRICE
                    </th>
                  </tr>
                </thead>
                  <tbody>
                  {data.length > 0 && data.map((data, idx) => {
                    return(
                      <tr key={idx}>
                      <td>{idx +1 }</td>
                      <td>{data.products.name}</td>
                      <td>{data.address}</td>
                      <td>{data.pin_code}</td>
                      <td>{data.status}</td>
                      <td>{data.city}</td>
                      <td>{ data.paid === true ? <i class="fa fa-brands fa-check-square" /> : <i class="fa fa-brands fa-square"/> }</td>
                      <td>{data.phone}</td>
                      <td>{data.total_price}</td>
                    </tr>
                    )
                  })}
                </tbody>
                
              </table>
            </CardBody>
          </Card>
        </Col>
      </Row>

      {/* Default Dark Table */}
      {data.length > 0 && data.map((data, idx) => {
        return (
           <Row>
          <Col>
          <Card small className="mb-4 overflow-hidden">
            <CardHeader className="bg-dark">
              <h6 className="m-0 text-white">Delivered Orders</h6>
            </CardHeader>
            <CardBody className="bg-dark p-0 pb-3">
              <table className="table table-dark mb-0">
                <thead className="thead-dark">
                  <tr>
                  <th scope="col" className="border-0">
                      TT
                    </th>
                    <th scope="col" className="border-0">
                      Products
                    </th>
                    <th scope="col" className="border-0">
                      ADDRESS
                    </th>
                    <th scope="col" className="border-0">
                      PIN CODE
                    </th>
                    <th scope="col" className="border-0">
                      STATUS
                    </th>
                    <th scope="col" className="border-0">
                      CITY
                    </th>
                    <th scope="col" className="border-0">
                      PAID
                    </th>
                    <th scope="col" className="border-0">
                      Phone
                    </th>
                    <th scope="col" className="border-0">
                      TOTAL PRICE
                    </th>
                  </tr>
                </thead>
                <tbody>
                {data.status === 'Delivered' ? 
                    <tr key={idx}>
                      <td>{idx +1 }</td>
                      <td>{data.products.name}</td>
                      <td>{data.address}</td>
                      <td>{data.pin_code}</td>
                      <td>{data.status}</td>
                      <td>{data.city}</td>
                      <td>{ data.paid === true ? <i class="fa fa-brands fa-check-square" /> : <i class="fa fa-brands fa-square"/> }</td>
                      <td>{data.phone}</td>
                      <td>{data.total_price}</td>
                    </tr> : ''}
                
                </tbody>
              </table>
            </CardBody>
          </Card>
        </Col>
      </Row>
        )
      })}
      
    </Container>
    )
}

export default Tables;
