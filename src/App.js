import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// CONTEXT //
import { MoviesProvider } from "./Context/Context";
// COMPONENTS //
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
// PAGES //
import HomePage from "./Pages/HomePage/HomePage";
import DetailPage from "./Pages/DetailPage/DetailPage";
import BlogPage from  "./Pages/BlogPage/BlogPage";
import AboutPage from "./Pages/AboutPage/AboutPage";


const App = () => {
  return (
    <MoviesProvider>
      <div className="App">
        <Router>
          <Navbar />
          <Routes>
            <Route exact path="/" element={<HomePage />} />
            <Route path="/movie/:id" element={<DetailPage />} />
            <Route path="/moviesblog" element={<BlogPage />} />
            <Route path="/about" element={<AboutPage />} />
          </Routes>
          <Footer/>
        </Router>
      </div>
    </MoviesProvider>
  );
};

export default App;
