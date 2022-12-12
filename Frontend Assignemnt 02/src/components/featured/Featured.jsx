import "./featured.css";
import { useState, useEffect } from "react";
import axios from "axios";

const Featured = () => {
  const [data, setData] = useState([])
  useEffect(() => {
    axios.get('http://localhost:5000/rvhotels').then(res => setData(res.data.city))
  }, [])
  return (
    <div className="featured">
      {data?.map(data => 
      <div className="featuredItem" key={data._id}>
        <img
          src={data.imageUrl}
          alt={data.name}
          className="featuredImg"
        />
        <div className="featuredTitles">
          <h1>{data.name} </h1>
          <h2>{data.total} properties</h2>
        </div>
      </div>)}
    </div>
  );
};

export default Featured;
