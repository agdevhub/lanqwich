import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import SampleImg from "../images/sample/arabic-letters.jpg";
import "./LearningModule.css"

export default class Module extends React.Component {
  render() {
    return (
      <div class="card mb-3 learning-module">
        <div class="row no-gutters">
          <div class="col-md-2">
            <img src={SampleImg} className="card-img" alt="..." />
          </div>
          <div class="col-md-10">
            <div class="card-body">
              <h5 class="card-title">{this.props.name}</h5>
              <p class="card-text">{this.props.desc}</p>
              {/* <p class="card-text"><small class="text-muted">Sample text here</small></p> */}
              <Link className="btn btn-outline-info" to={`/learning-module/${this.props.learningModuleId}`}>Get Started</Link>
            </div>
          </div>
        </div>
      </div>
    //           <div class="progress">
    //             <div
    //               className="progress-bar progress-bar-striped bg-info"
    //               role="progressbar"
    //               style={{ width: "20%" }}
    //               aria-valuenow="10"
    //               aria-valuemin="0"
    //               aria-valuemax="100"
    //             />
    );
  }
}
