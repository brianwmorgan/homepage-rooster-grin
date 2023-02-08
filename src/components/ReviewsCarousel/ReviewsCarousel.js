import "./ReviewsCarousel.css";

function ReviewsCarousel() {
  return (
    <div id="carousel" className="carousel slide" data-ride="carousel">
      <ol className="carousel-indicators">
        <li
          data-target="#carousel"
          data-slide-to="0"
          className="active"
        ></li>
        <li data-target="#carousel" data-slide-to="1"></li>
        <li data-target="#carousel" data-slide-to="2"></li>
      </ol>
      <div className="carousel-inner">
        <div className="carousel-item active">
          <p className="review-title">Review Title #1</p>
          <p className="review-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in cillum dolore eu fugiat nulla pariatur dolore eu
            fugiat nulla pariatur.
          </p>
        </div>
        <div className="carousel-item">
          <p className="review-title">Review Title #2</p>
          <p className="review-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in cillum dolore eu fugiat nulla pariatur dolore eu
            fugiat nulla pariatur.
          </p>
        </div>
        <div className="carousel-item">
          <p className="review-title">Review Title #3</p>
          <p className="review-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in cillum dolore eu fugiat nulla pariatur dolore eu
            fugiat nulla pariatur.
          </p>
        </div>
      </div>
      <a
        className="carousel-control-prev"
        href="#carousel"
        role="button"
        data-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"><span className="fa fa-angle-left"></span></span>
        <span className="sr-only">Previous</span>
      </a>
      <a
        className="carousel-control-next"
        href="#carousel"
        role="button"
        data-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"><span className="fa fa-angle-right"></span></span>
        <span className="sr-only">Next</span>
      </a>
    </div>
  );
}

export default ReviewsCarousel;
