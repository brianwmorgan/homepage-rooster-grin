import ReviewsCarousel from "../ReviewsCarousel/ReviewsCarousel";
import "./Reviews.scss";

function Reviews() {
  return (
    <div className="container reviews" id="reviews">
      <div className="row">
        <div className="col col-5">
          <div className="reviews__info">
            <h2>LOREM IPSUM</h2>
            <h2>DOLOR SIT AMET</h2>
            <span className="fa fa-star"></span>
            <span className="fa fa-star"></span>
            <span className="fa fa-star"></span>
            <span className="fa fa-star"></span>
            <span className="fa fa-star"></span>
          </div>
        </div>
        <div className="col col-7 reviews__carousel ">
            <ReviewsCarousel />
        </div>
      </div>
    </div>
  );
}

export default Reviews;
