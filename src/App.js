import "./App.css";
import Header from "./Header";
import Home from "./Home";
import Footer from "./Footer";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import SearchPage from "./SearchPage";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Home />
          <SearchPage />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
