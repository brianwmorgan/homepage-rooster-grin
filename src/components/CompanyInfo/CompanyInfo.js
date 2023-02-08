import notepadIcon from "../../assets/images/icon-notepad.svg";
import maskIcon from "../../assets/images/icon-mask.svg";
import gogglesIcon from "../../assets/images/icon-goggles.svg";
import calendarIcon from "../../assets/images/icon-calendar.svg";
import "./CompanyInfo.scss";

function CompanyInfo() {
  return (
    <div className="container company-info" id="company-info">
      <div className="row">
        <div className="col col1">
          <div className="company-info__text">
            <h2>LOREM IPSUM</h2>
            <h2>DOLOR SIT AMET</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco.
            </p>
            <a href="http://www.roostergrin.com">&gt; Lorem Ipsum</a>
          </div>
        </div>
        <div className="col col2">
          <div className="company-info__links">
            <div className="row">
              <div className="icon-set">
                <div className="icon">
                  <a href="http://www.roostergrin.com">
                    <img src={notepadIcon} alt="notepad icon" />
                  </a>
                </div>
                <div className="icon-text">
                  <p>LOREM</p>
                </div>
              </div>
              <div className="icon-set">
                <div className="icon">
                  <a href="http://www.roostergrin.com">
                    <img src={maskIcon} alt="mask icon" />
                  </a>
                </div>
                <div className="icon-text">
                  <p>LOREM IPSUM</p>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="icon-set">
                <div className="icon">
                  <a href="http://www.roostergrin.com">
                    <img src={gogglesIcon} alt="goggles icon" />
                  </a>
                </div>
                <div className="icon-text">
                  <p>LOREM IPSUM</p>
                </div>
              </div>
              <div className="icon-set">
                <div className="icon">
                  <a href="http://www.roostergrin.com">
                    <img src={calendarIcon} alt="calendar icon" />
                  </a>
                </div>
                <div className="icon-text">
                  <p>LOREM</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CompanyInfo;
