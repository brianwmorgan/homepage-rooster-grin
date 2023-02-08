import ReviewsCarousel from "../ReviewsCarousel/ReviewsCarousel";
import "./Reviews.css";

function Reviews() {
  return (
    <div className="container reviews" id="reviews">
      <div className="row">
        <div className="col col-5">
          <div className="reviews-text">
            <h2>LOREM IPSUM</h2>
            <h2>DOLOR SIT AMET</h2>
            <span className="fa fa-star"></span>
            <span className="fa fa-star"></span>
            <span className="fa fa-star"></span>
            <span className="fa fa-star"></span>
            <span className="fa fa-star"></span>
          </div>
        </div>
        <div className="col col-7">
            <ReviewsCarousel />
        </div>
      </div>
    </div>
  );
}

export default Reviews;
