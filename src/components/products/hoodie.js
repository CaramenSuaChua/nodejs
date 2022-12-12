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
import axios from 'axios'
import PageTitle from "../common/PageTitle";
import {useDispatch} from 'react-redux'
// import {getProducts} from '../../redux/products/products'
const Hoodie = () => {
  const [data, setData] = useState({})
  const dispatch = useDispatch()
  // useEffect(() => {
  //   dispatch(getProducts()).then(res => setData(res.payload.data.results))
  // },[])
  console.log(data);
    return (
      <Container fluid className="main-content-container px-4">
        {/* Page Header */}
        <Row noGutters className="page-header py-4">
          <PageTitle sm="4" title="Hoodie" subtitle="Components" className="text-sm-left" />
        </Row>
        <Row>
          {data && data.length > 0 && data.map((post, idx) => (
           post.category && post.category.name === 'hoodie' ?  
           <Col lg="3" md="6" sm="12" className="mb-4" key={idx}>
                <Card small className="card-post card-post--1">
                    <div
                    className="card-post__image"
                    style={{ backgroundImage: `url(${post.image})` }}
                    >
                    <Badge
                        pill
                        // className={`card-post__category bg-${post.categoryTheme}`}
                    >
                        {post.name}
                    </Badge>
                    </div>
                    <CardBody>
                    <h5 className="card-title">
                        <a href="#" className="text-fiord-blue">
                        {post.description}
                        </a>
                    </h5>
                    <p className="card-text d-inline-block mb-3">{post.price}</p>
                    {/* <span className="text-muted">{post.date}</span> */}
                    </CardBody>
                </Card>
            </Col> : ''
          ))}
        </Row>
      </Container>
    );
  }


export default Hoodie;
