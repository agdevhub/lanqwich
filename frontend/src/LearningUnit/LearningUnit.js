import React from "react";
import "./LearningUnit.css";
import QuestionList from '../Question/QuestionList/QuestionList'

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
          </div>
        </div>
        {/* <div className="row">
          <QuestionList unitId={this.props.unitId} />
        </div> */}
      </div>
    );
  }
}
