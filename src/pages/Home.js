import React, { Fragment } from "react";
import { data } from "../data";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <Fragment>
      <div className="container mb">
        <div className="flex-item">
          <h3>Bienvenidos.</h3>

          <p>
            En este sitio comparto mis apuntes para poder aportar algo a sus
            estudios.
          </p>
          <p>Espero sea de su agrado.</p>
          <Link className="hover-red-transform" to="/about">
            About me..
          </Link>
        </div>
        <div className="flex-item">
          <h3>Mis apuntes</h3>
          <nav>
            <ul>
              {data.map((item) => {
                return (
                  <li key={item.key}>
                    <Link
                      className="hover-red-transform"
                      to={item.href}
                      style={{ textDecoration: "none" }}
                    >
                      <span role="img" aria-label="emoji-libretita`">
                        📝
                      </span>
                      {"   "}
                      {item.title}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>
        </div>
      </div>
    </Fragment>
  );
};

export default Home;
