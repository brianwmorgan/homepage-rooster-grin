import helpingHand from "../../assets/images/half-banner-helping-hand.jpg";
import "./Section1.css";

function Section1() {
  return (
    <div className="container" id="section1">
      <div className="row">
        <div className="col col1">
          <div className="section1-info">
            <h2>LOREM IPSUM</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in cillum dolore eu fugiat nulla pariatur dolore eu
              fugiat nulla pariatur.
            </p>
            <a href="http://www.roostergrin.com">&gt; Lorem Ipsum</a>
          </div>
        </div>
        <div className="col col2">
          <img className="helping-hand" src={helpingHand} alt="helping hand" />
        </div>
      </div>
    </div>
  );
}

export default Section1;
