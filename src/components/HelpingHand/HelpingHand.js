import rockClimbers from "../../assets/images/half-banner-helping-hand.jpg";
import "./HelpingHand.css";

function HelpingHand() {
  return (
    <div className="container helping-hand" id="helping-hand">
      <div className="row">
        <div className="col col-6 col1">
          <div className="helping-hand-info">
            <h2>LOREM IPSUM</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in cillum dolore eu fugiat. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
            <a href="http://www.roostergrin.com">&gt; Lorem Ipsum</a>
          </div>
        </div>
        <div className="col col-6 col2">
          <img src={rockClimbers} alt="rock climbers" />
        </div>
      </div>
    </div>
  );
}

export default HelpingHand;
