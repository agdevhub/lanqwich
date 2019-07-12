import React from "react";
import "./LearningUnit.css";

export default class LearningUnit extends React.Component {
  render() {
    return (
      <div className="container learning-unit">
        <div className="row">
          <div className="col">
            <h2>{this.props.name}</h2>
            <p>{this.props.duration}</p>
            <p>
              {this.props.content}
            </p>
            <button type="button" class="btn btn-info">
              Check Your Anwers
            </button>
          </div>
        </div>
      </div>
    );
  }
}
