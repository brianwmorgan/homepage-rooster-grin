import roosterGrinLogo from "../../assets/images/logo-rooster-grin-white.svg";
import "./Header.css";

function Header() {
  return (
    <div className="container header" id="header">
      <div className="row">
        <div className="col">
          <img className="rooster-grin-logo" src={roosterGrinLogo} alt="logo" />
          <div className="welcome-text">
            <h1 className="welcome-to">WELCOME TO</h1>
            <h1 className="rooster-grin">Rooster Grin</h1>
            <a href="#helping-hand" className="btn">
              BUTTON BUTTON
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
