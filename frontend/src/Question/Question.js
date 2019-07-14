import React from "react";
import "./Question.css";

export default class Question extends React.Component {
  render() {
    return (
      <div className="learning-question">
        <div class="form-check">
          <input
            class="form-check-input"
            type="radio"
            name="exampleRadios"
            id="exampleRadios1"
            value="option1"
            checked
          />
          <label class="form-check-label" for="exampleRadios1">
            Default radio
          </label>
        </div>
        <div class="form-check">
          <input
            class="form-check-input"
            type="radio"
            name="exampleRadios"
            id="exampleRadios2"
            value="option2"
          />
          <label class="form-check-label" for="exampleRadios2">
            Second default radio
          </label>
        </div>
        <div class="form-check disabled">
          <input
            class="form-check-input"
            type="radio"
            name="exampleRadios"
            id="exampleRadios3"
            value="option3"
            disabled
          />
          <label class="form-check-label" for="exampleRadios3">
            Disabled radio
          </label>
        </div>
      </div>
    );
  }
}
