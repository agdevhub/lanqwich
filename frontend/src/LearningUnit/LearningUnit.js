import React from "react";
import "./LearningUnit.css";
import QuestionList from '../Question/QuestionList/QuestionList'

export default class LearningUnit extends React.Component {
  render() {
    return (
        <div className="row learning-unit">
          <div className="col">
            <h2>{this.props.name}</h2>
            {/* <p>{this.props.duration}</p> */}
            <p>
              {this.props.content}
            </p>
          </div>
        </div>
    );
  }
}
