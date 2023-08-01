import "./Footer.css";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";


const Footer = () => {
  return (
    <div className="footer">
      <div className="footerContainer">
        <img
          className="logoFooter"
          src={require("../../images/logoMovie.png")}
          alt="Logo"
        />
        
        <div className="footerIcons">
          <div className="iconContactContainer">
            <a
              className="footerIcons"
              href="https://github.com/Alexandra-Gon"
              target="_blank"
              rel="noreferrer noopener"
            >
              <GitHubIcon />
            </a>
            <a
              className="footerIcons"
              href="https://www.linkedin.com/in/alexandragon/"
              target="_blank"
              rel="noreferrer noopener"
            >
              <LinkedInIcon />
            </a>
          </div>
        </div>
        
      </div>
      <p className="footerName">ALEXANDRA GONZALEZ ©2023</p>
    </div>
  );
};


export default Footer;