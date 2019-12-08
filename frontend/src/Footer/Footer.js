import React from "react";
import { Link, withRouter } from "react-router-dom";
import "./Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitterSquare,
  faInstagram,
  faTwitter
} from "@fortawesome/free-brands-svg-icons";

export default class Footer extends React.Component {
  render() {
    return (
      <footer class="footer">
        <div class="container">
          <div class="row">
            <div class="col-lg-6 h-100 text-center text-lg-left my-auto">
              <ul class="list-inline mb-2">
                <li class="list-inline-item">
                  <Link to="/">Home</Link>
                </li>
                <li class="list-inline-item" style={{"color": "#fff"}}>&sdot;</li>
                <li class="list-inline-item">
                  <Link to="/arabic">My Arabic Journey</Link>
                </li>
                <li class="list-inline-item" style={{"color": "#fff"}}>&sdot;</li>
                <li class="list-inline-item">
                  <a href="#">Terms of Use</a>
                </li>
                <li class="list-inline-item" style={{"color": "#fff"}}>&sdot;</li>
                <li class="list-inline-item">
                  <a href="#">Privacy Policy</a>
                </li>
              </ul>
              <p class="small mb-4 mb-lg-0">
                &copy; Lanqwich 2019. All Rights Reserved.
              </p>
            </div>
            <div class="col-lg-6 h-100 text-center text-lg-right my-auto">
              <ul class="list-inline mb-0">
                <li class="list-inline-item mr-3">
                  <a href="https://www.facebook.com/lanqwich" target="_blank">
                    {/* <i class="fab fa-facebook fa-2x fa-fw"></i> */}
                    <FontAwesomeIcon
                      icon={faFacebook}
                      className="fa-2x fa-fw"
                    />
                  </a>
                </li>
                <li class="list-inline-item mr-3">
                  <a href="#">
                    {/* <i class="fab fa-twitter-square fa-2x fa-fw"></i> */}
                    <FontAwesomeIcon
                      icon={faTwitterSquare}
                      className="fa-2x fa-fw"
                    />
                  </a>
                </li>
                <li class="list-inline-item">
                  <a href="#">
                    {/* <i class="fab fa-instagram fa-2x fa-fw"></i> */}
                    <FontAwesomeIcon
                      icon={faInstagram}
                      className="fa-2x fa-fw"
                    />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}
