import "./CardMovie.css";
import { Link } from "react-router-dom";

const CardMovie = ({ img, title, id, vote_average }) => {
  return (
    <div className="cardMovie">
      <Link className="cardText" to={`/movie/${id}`}>
        <div className="imageContainer">
          <img
            className="cardImage"
            src={`https://image.tmdb.org/t/p/w500/${img}`}
          />
        </div>
        <div className="cardText">
          <h3>{title}</h3>
          <p> {vote_average} </p>
        </div>
      </Link>
    </div>
  );
};

export default CardMovie;
