import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./DetailPage.css";

const DetailPage = () => {
  let { id } = useParams();
  const [data, setData] = useState({});

  useEffect(() => {
    axios(`
    https://api.themoviedb.org/3/movie/${id}?api_key=3b95bc371ca8adf25f2b95be1f067696`).then(
      (res) => setData(res.data)
    ).catch(e => console.log(e));
  }, [id]);


  if (data === null) {
    return null;
  } else {
    return (
      <div className="detailBackground">
        <div className="detailContainer">
          <img
            className="detailImage"
            src={`https://image.tmdb.org/t/p/w500/${data.poster_path}`}
            alt="Movie image"
          />
          <div className="detailDates">
            <h3 className="detailTitleMovie">{data.title}</h3>
            <p>{data.overview}</p>
            <img
              className="detailStart"
              src={require("../../images/startRanking.png")}
              alt="start image"
            />
            <p>Ranking {data.vote_average}</p>
            <p>Votes: {data.vote_count}</p>
          </div>
        </div>
      </div>
    );
  }
};

export default DetailPage;
