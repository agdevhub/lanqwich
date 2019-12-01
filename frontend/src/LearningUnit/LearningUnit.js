import React from "react";
import "./LearningUnit.css";
import QuestionList from "../Question/QuestionList/QuestionList";
import { Link } from "react-router-dom";

export default class LearningUnit extends React.Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div className="row learning-unit">
        <div className="col">
          <h3>{this.props.name}</h3>
          <br />
          {/* <p>{this.props.duration}</p> */}
          <p id={"unitContent" + this.props.unitId}>
            <div dangerouslySetInnerHTML={{ __html: this.props.content }} />
          </p>
          <Link
            className="btn btn-outline-info"
            to={{
              pathname: `/tiny-editor/${this.props.unitId}`,
              state: {
                learningUnitContent: this.props.content,
                learningModuleId: this.props.learningModuleId
              }
            }}
          >
            Edit in Tiny
          </Link>
        </div>
      </div>
    );
  }
}
