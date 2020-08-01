import React, { Fragment } from "react";
import "./App.css";
import { BrowserRouter as Router, Link } from "react-router-dom";
import Content from "./components/Content";
import Footer from "./components/Footer";

function App() {
  return (
    <Fragment>
      <Router>
        <header>
          <Link to="/" style={{ textDecoration: "none" }}>
            <h1 className="hover-red-transform">
              <span role="img" aria-label="notita">
                🗒️
              </span>
              Notebook of Alex
            </h1>
          </Link>
        </header>
        <div style={{ padding: "2rem", marginTop: "4rem" }}>
          <Content />
        </div>
      </Router>
      <Footer />
    </Fragment>
  );
}

export default App;
