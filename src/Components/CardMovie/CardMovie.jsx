import "./CardMovie.css";
import { Link } from "react-router-dom";

const CardMovie = ({ img, title, id, vote_average }) => {
  return (
    <Link to={`/movie/${id}`}>
      <div className="cardMovie">
        <div className="imageContainer">
          <img
            className="cardImage"
            src={`https://image.tmdb.org/t/p/w500/${img}`}
          />
        </div>
        <div className="cardTextContainer">
          <h3>{title}</h3>
          <div className="startCardContainer">
            <img
              className="startCard"
              src={require("../../images/startRanking.png")}
              alt="start image"
            />
            <p> {vote_average} </p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default CardMovie;
