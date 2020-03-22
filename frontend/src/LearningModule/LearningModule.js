import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Link,
  withRouter
} from "react-router-dom";
import "./LearningModule.css";
import { getLearningUnitsOfModule } from "../actions/learningActions";
import { setCurrentLearningModule } from "../actions/learningActions";
import { connect } from "react-redux";
import store from "../store";
import PropTypes from "prop-types";

class Module extends React.Component {
  // getLearningUnitsOfModule = moduleId => {
  //   this.props.getLearningUnitsOfModule(moduleId, this.props.history);
  // }

  setCurrentLearningModule = moduleId => {
    this.props.setCurrentLearningModule(moduleId, this.props.history);
  };

  render() {
    return (
      <div class="card mb-3 learning-module">
        <div class="row no-gutters">
          <div class="col-md-2">
            <img
              src={require(`../assets/images/${this.props.imgName}`)}
              className="card-img"
              style={{ "border-radius": "0" }}
              alt="..."
            />
          </div>
          <div class="col-md-10">
            <div class="card-body">
              <h5 class="card-title">{this.props.name}</h5>
              <p class="card-text">{this.props.desc}</p>
              {/* <p class="card-text"><small class="text-muted">Sample text here</small></p> */}
              <a
                className="btn btn-outline-info"
                // to={`/arabic/module/${this.props.learningModuleId}`}
                onClick={() => {
                  //this.getLearningUnitsOfModule(this.props.learningModuleId);
                  this.setCurrentLearningModule(this.props.learningModuleId);
                }}
              >
                Get Started
              </a>
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

Module.propTypes = {
  //getLearningUnitsOfModule: PropTypes.func.isRequired
  setCurrentLearningModule: PropTypes.func.isRequired
};
const mapStateToProps = state => ({});
export default connect(mapStateToProps, {
  //getLearningUnitsOfModule
  setCurrentLearningModule
})(withRouter(Module));
