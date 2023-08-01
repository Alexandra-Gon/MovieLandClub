import "./AboutPage.css";
import HikingIcon from "@mui/icons-material/Hiking";
import PetsIcon from "@mui/icons-material/Pets";
import CodeIcon from "@mui/icons-material/Code";

const AboutPage = () => {
  return (
    <div className="aboutBackground">
      <div className="aboutContainer">
        <h1 className="aboutTitle">
          About <br />
          Movies Land Club
        </h1>
        <div className="aboutMe">
          <div className="aboutMeImageContainer">
            <img
              className="aboutMeImage"
              src={require("../../images/me.webp")}
              alt="web developer photo"
            />
          </div>

          <div className="textAndhobbies">
            <p className="aboutMeText">
              Hi! My name is Alexandra González, and I had a lot of fun creating
              this website because I really enjoy coding and painting with CSS.
              I am a cheerful and very perseverant person, and I love achieving
              my goals. I am kind and empathetic, and I adore animals. <br />
              <br />
              If you decide to get in touch with me, you will get to know my
              level of responsibility and dedication.
            </p>
            <div className="hobbiesContainer">
              <div className="hobbies">
                <HikingIcon />
              </div>
              <div className="hobbies">
                <PetsIcon />
              </div>
              <div className="hobbies">
                <CodeIcon />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
