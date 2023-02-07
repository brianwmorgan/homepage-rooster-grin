import instagramLogo from "../../assets/images/logo-instagram.svg";
import facebookLogo from "../../assets/images/logo-facebook.svg";
import "./Footer.css";

function Footer() {
  return (
    <div className="container" id="footer">
    <div className="row" id="footer">
      <div className="col">
        <p>Follow Us:</p>
        <div>
          <a href="https://www.instagram.com/">
            <img src={instagramLogo} alt="instagram logo" />
          </a>
          <a href="https://www.facebook.com/">
            <img src={facebookLogo} alt="facebook logo" />
          </a>
        </div>
      </div>
    </div>
    </div>
  );
}

export default Footer;
