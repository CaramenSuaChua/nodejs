import { useNavigate } from "react-router-dom";
import "./searchItem.css";

const SearchItem = ({ hotel }) => {
  const navigate = useNavigate()

  // const handleClick = () => {
  //   navigate(`/hotels/${props.h._id}`, { state: { hotel, date, user, options } });
  // }
  return (
    <div className="searchItem">
      <img
        src={hotel.photos.length > 0 ? hotel.photos[0] : ''}
        alt=""
        className="siImg"
      />
      <div className="siDesc">
        <h1 className="siTitle">{hotel.name}</h1>
        <span className="siDistance">{hotel.distance} from center</span>
        <span className="siTaxiOp">{hotel.tag}</span>
        <span className="siSubtitle">
        {hotel.description}
        </span>
        <span className="siFeatures">
        {hotel.type}
        </span>
        {/* If can cancel */}
        {/* {free_cancel ? (
          <div>
            <span className="siCancelOp">Free cancellation </span>
            <span className="siCancelOpSubtitle">
              You can cancel later, so lock in this great price today!
            </span>
          </div>
        ) : (<div></div>)} */}
      </div>
      <div className="siDetails">
        <div className="siRating">
        <span>{hotel.rating? hotel.rating : '5 ⭐️'}</span>
          <button>Rate</button>
        </div>
        <div className="siDetailTexts">
          <span className="siPrice">${hotel.cheapestPrice}</span>
          <span className="siTaxOp">Includes taxes and fees</span>
          <button className="siCheckButton">See availability</button>
        </div>
      </div>
    </div>
  );
};

export default SearchItem;
