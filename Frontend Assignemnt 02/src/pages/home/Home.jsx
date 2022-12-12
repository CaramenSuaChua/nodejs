import { useState, useEffect, useRef } from "react";
import Featured from "../../components/featured/Featured";
import FeaturedProperties from "../../components/featuredProperties/FeaturedProperties";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import MailList from "../../components/mailList/MailList";
import Navbar from "../../components/navbar/Navbar";
import PropertyList from "../../components/propertyList/PropertyList";
import axios from "axios";
import "./home.css";

const Home = () => {
  const [hotel, setHotel] = useState([])
  const [featured, setFeatured] = useState([])
  const [bestRate, setBestRate] = useState([])
  const [isHotel, setIsHotel] = useState(0);
  const [isApartments, setIsApartments] = useState(0);
  const [isResorts, setIsResorts] = useState(0);
  const [isVillas, setIsVillas] = useState(0);
  const [isCabins, setIsCabins] = useState(0);
  useEffect(() => {
    axios.get('http://localhost:5000/hotels')
    .then(res => {
      setHotel(res.data.filter(r => r.featured === true).sort((b,a) => a.rating - b.rating));
      setIsHotel(res.data.filter(hotel => hotel.type === 'hotel'));
      setIsApartments(res.data.filter(hotel => hotel.type === 'apartment'));
      setIsResorts(res.data.filter(hotel => hotel.type === 'resort'));
      setIsVillas(res.data.filter(hotel => hotel.type === 'villa'));
      setIsCabins(res.data.filter(hotel => hotel.type === 'cabin'));
    })
    .catch(err => console.log(err));
  }, [])
  return (
    <div>
      <Navbar />
      <Header/>
      <div className="homeContainer">
        <Featured />
        <h1 className="homeTitle">Browse by property type</h1>
        <PropertyList hotel={isHotel} apt={isApartments} resorts={isResorts} villas={isVillas} cabins={isCabins} />
        <h1 className="homeTitle">Homes guests love</h1>
        <FeaturedProperties hotel ={hotel} />
        <MailList/>
        <Footer/>
      </div>
    </div>
  );
};

export default Home;
