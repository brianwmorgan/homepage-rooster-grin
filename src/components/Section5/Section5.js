import ReviewsCarousel from "../ReviewsCarousel/ReviewsCarousel";
import "./Section5.css";

function Section5() {
  return (
    <div className="container" id="section5">
      <div className="row">
        <div className="col col1">
          <div className="section5-info">
            <h2>LOREM IPSUM</h2>
            <h2>DOLOR SIT AMET</h2>
            <span className="fa fa-star"></span>
            <span className="fa fa-star"></span>
            <span className="fa fa-star"></span>
            <span className="fa fa-star"></span>
            <span className="fa fa-star"></span>
          </div>
        </div>
        <div className="col col2">
            <ReviewsCarousel />
        </div>
      </div>
    </div>
  );
}

export default Section5;
