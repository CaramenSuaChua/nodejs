import "./hotel.css";
import Navbar from "../../components/navbar/Navbar";
import Header from "../../components/header/Header";
import MailList from "../../components/mailList/MailList";
import Footer from "../../components/footer/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleArrowLeft,
  faCircleArrowRight,
  faCircleXmark,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import Booking from "../../components/booking/booking";
import { useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
const Hotel = ({}) => {
  const [slideNumber, setSlideNumber] = useState(0);
  const [open, setOpen] = useState(false);
  const [hotel, setHotel] = useState([])
  const hotelParams = useParams()
  const handleOpen = (i) => {
    setSlideNumber(i);
    setOpen(true);
  };
  
  useEffect(() => {
    axios.get(`http://localhost:5000/hotels/${hotelParams.id}`)
    .then(res => {
      setHotel(res.data);
    })
  },[])
  console.log(hotel);
  const handleMove = (direction) => {
    let newSlideNumber;

    if (direction === "l") {
      newSlideNumber = slideNumber === 0 ? 5 : slideNumber - 1;
    } else {
      newSlideNumber = slideNumber === 5 ? 0 : slideNumber + 1;
    }
    setSlideNumber(newSlideNumber)
  };
  console.log(hotel);
  return (
    <div>
      <Navbar />
      <Header type="list" />
      <div className="hotelContainer">
        {open && (
          <div className="slider">
            <FontAwesomeIcon
              icon={faCircleXmark}
              className="close"
              onClick={() => setOpen(false)}
            />
            <FontAwesomeIcon
              icon={faCircleArrowLeft}
              className="arrow"
              onClick={() => handleMove("l")}
            />
            <div className="sliderWrapper">
              {/* <img src={photos[slideNumber].src} alt="" className="sliderImg" /> */}
            </div>
            <FontAwesomeIcon
              icon={faCircleArrowRight}
              className="arrow"
              onClick={() => handleMove("r")}
            />
          </div>
        )}
        <div className="hotelWrapper">
          <button className="bookNow">Reserve or Book Now!</button>
          <h1 className="hotelTitle">{hotel.title}</h1>
          <div className="hotelAddress">
            <FontAwesomeIcon icon={faLocationDot} />
            <span>{hotel?.address}</span>
          </div>
          <span className="hotelDistance">
            Excellent location – {hotel?.distance}m from center
          </span>
          <span className="hotelPriceHighlight">
            Book a stay over ${hotel?.cheapestPrice} at this property and get a free airport taxi
          </span>
          <div className="hotelImages">
            {hotel?.photos?.map((photo, i) => (
              <div className="hotelImgWrapper" key={i}>
                <img
                  onClick={() => handleOpen(i)}
                  src={photo}
                  alt=""
                  className="hotelImg"
                />
              </div>
            ))}
          </div>
          <div className="hotelDetails">
            <div className="hotelDetailsTexts">
              <h1 className="hotelTitle">Stay in the heart of City</h1>
              <p className="hotelDesc">{hotel?.desc}
              </p>
            </div>
            <div className="hotelDetailsPrice">
              <h1>Perfect for a 9-night stay!</h1>
              <span>
                Located in the real heart of Krakow, this property has an
                excellent location score of 9.8!
              </span>
              <h2>
                <b>${hotel?.cheapestPrice}</b> (9 nights)
              </h2>
              <button >Reserve or Book Now!</button>
            </div>
          </div>
          <Booking  hotel={hotel}/>
        </div>
        
        <MailList />
        <Footer />
        
      </div>
    </div>
  );
};

export default Hotel;
