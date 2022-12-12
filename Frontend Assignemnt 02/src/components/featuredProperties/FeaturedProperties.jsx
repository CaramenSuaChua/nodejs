import "./featuredProperties.css";

const FeaturedProperties = ({hotel}) => {
  return (
    <div className="fp">
     {hotel?.map(h => {
      return(
        <div className="fpItem">
      <img
         src={h.photos[0]}
         alt=''
         className="fpImg"
       />
       <span className="fpName"><a href={"/hotels/" + h._id} target="_blank">{h.name}</a></span>
       <span className="fpCity">{h.title}</span>
       <span className="fpPrice">Starting from ${h.cheapestPrice}</span>
       {/* <div className="fpRating">
         <button>8.9</button>
         <span>Excellent</span>
       </div> */}
      </div>
      )
     })}
    </div>
  );
};

export default FeaturedProperties;
