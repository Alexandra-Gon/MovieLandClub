import "./HomePage.css";
import SearchIcon from "@mui/icons-material/Search";
import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import CardMovie from "../../Components/CardMovie/CardMovie";
import { MoviesContext } from "../../Context/Context";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";

const HomePage = () => {
  let {
    moviesData,
    searchMovie,
    setSearchMovie,
    handleChange,
    changeCategory,
    category,
  } = useContext(MoviesContext);

  const [numData, setNumData] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);

  const nextData = () => {
    if (currentPage < moviesData.length / 10) {
      setNumData(numData + 10);
      setCurrentPage(currentPage + 1);
    }
  };

  const previusData = () => {
    if (currentPage > 1) {
      setNumData(numData - 10);
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <section className="homePageBackground">
      <div className="homePageContainer">
        <div className="moviesContainer">
          <div className="homeButtonAndSearch">
            <div className="buttonCategoriesContainer">
              <button
                className={
                  category === "now_playing"
                    ? "buttonCategory categoryActive"
                    : "buttonCategory"
                }
                onClick={() => changeCategory("now_playing")}
              >
                Now Playing
              </button>
              <button
                className={
                  category === "popular"
                    ? "buttonCategory categoryActive"
                    : "buttonCategory"
                }
                onClick={() => changeCategory("popular")}
              >
                Popular
              </button>
              <button
                className={
                  category === "top_rated"
                    ? "buttonCategory categoryActive"
                    : "buttonCategory"
                }
                onClick={() => changeCategory("top_rated")}
              >
                Top Rated
              </button>
              <button
                className={
                  category === "upcoming"
                    ? "buttonCategory categoryActive"
                    : "buttonCategory"
                }
                onClick={() => changeCategory("upcoming")}
              >
                Upcoming
              </button>
            </div>

            <form onSubmit={handleChange} className="searchBarContainer">
              <input
                className="searchBar"
                type="text"
                value={searchMovie}
                onChange={(event) => setSearchMovie(event.target.value)}
                placeholder="Search your movie..."
              />
              <button className="searchBarButton" type="submit">
                <SearchIcon />
              </button>
            </form>
          </div>

          <div className="cardMoviesContainer">
            {moviesData &&
              moviesData.slice(numData, numData + 10).map((movie, i) => {
                return (
                  <CardMovie
                    key={i}
                    img={movie.poster_path}
                    title={movie.title}
                    vote_average={movie.vote_average}
                    id={movie.id}
                  />
                );
              })}
          </div>
          <div className="counterPages">
            <button className="buttonPagination" onClick={previusData}>
              {" "}
              <KeyboardArrowLeftIcon />{" "}
            </button>
            <p>{currentPage}</p> /<p>{moviesData.length / 10}</p>
            <button className="buttonPagination" onClick={nextData}>
              {" "}
              <KeyboardArrowRightIcon />{" "}
            </button>
          </div>
        </div>

        <div className="asideBlogContainer">
          <h2 className="asideBlogTitle">MOVIES BLOG</h2>

          <Link to="/moviesblog#flash" href="#flash">
            <div className="asideBlogCard">
              <img
                className="imageHomeBlog"
                src={require("../../images/flash1.webp")}
                alt="Flash movie image"
              />
              <h3>The Flash: DC's Speedy Multiverse</h3>
              <p>The scarlet runner finally has his movie as the protagonist</p>
            </div>
          </Link>
          <Link to="/moviesblog#insidius">
            <div className="asideBlogCard">
              <img
                className="imageHomeBlog"
                src={require("../../images/insidius1.webp")}
                alt="Insidius movie image"
              />
              <h3>
                Insidious: The Red Door Is the new installment of the horror
                franchise worth it?
              </h3>
              <p>
                Patrick Wilson's debut film and fifth installment of the
                franchise
              </p>
            </div>
          </Link>
          <Link to="/moviesblog#barbie">
            <div className="asideBlogCard">
              <img
                className="imageHomeBlog"
                src={require("../../images/barbie1.webp")}
                alt="Barbie movie image"
              />
              <h3>'Barbie: The Album' sweeps Amazon with its pink vinyl</h3>
            </div>
          </Link>
          <Link to="/moviesblog#barbie">
            <div className="asideBlogCard">
              <img
                className="imageHomeBlog"
                src={require("../../images/harryPotter1.webp")}
                alt="Barbie movie image"
              />
              <h3>SPECIALSWhich Harry Potter character are you? find out</h3>
              <p>
                Personality test that will define which Harry Potter character
                represents you.
              </p>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HomePage;
