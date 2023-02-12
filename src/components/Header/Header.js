import roosterGrinLogo from "../../assets/images/logo-rooster-grin-white.svg";
import "./Header.scss";

function Header() {
  return (
    <div className="container header" id="header">
      <div className="row">
        <div className="col">
          <img
            className="header__rooster-grin-logo"
            src={roosterGrinLogo}
            alt="logo"
          />
          <div className="header__welcome-text">
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
