import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import SampleImg from "../images/sample/contemplative-reptile.jpg";
import "./LearningModule.css"

export default class Module extends React.Component {
  render() {
    return (
      <div className="row learning-module">
        <div className="col-md-3 col-xs-12 learning-module-thumbnail">
          <img
            src={SampleImg}
            alt=""
            className="img-fluid"
            style={{ maxWidth: "100%", height: "100%" }}
          />
        </div>
        <div className="col-9 learning-module-card-content">
          <div className="row">
            <div className="col">
              <h4>{this.props.name}</h4>
              <span>54 min • Module • 9 Units</span>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <p>{this.props.desc}</p>
            </div>
          </div>
          <div className="row module-card-footer">
            <div className="col-8">
              <Link className="btn btn-outline-info" to={`/learning-module/${this.props.learningModuleId}`}>
                Start Module
              </Link>
            </div>
            <div className="col-4 my-auto">
              <div class="progress">
                <div
                  className="progress-bar progress-bar-striped bg-info"
                  role="progressbar"
                  style={{ width: "20%" }}
                  aria-valuenow="10"
                  aria-valuemin="0"
                  aria-valuemax="100"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
