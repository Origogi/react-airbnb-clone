import "./App.css";
import Header from "./Header";
import Home from "./Home";
import Footer from "./Footer";
import { Router } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Home />

        <SearchPage />
        <Footer />
      </Router>
    </div>
  );
}

export default App;
