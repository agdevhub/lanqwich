import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Navbar from "./Navbar/Navbar";
import LearningModuleList from "./LearningModule/LearningModuleList/LearningModuleList";
import LearningUnitList from "./LearningUnit/LearningUnitList/LearningUnitList";

export default class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Navbar />
        <div className="container">
          <Route path="/learning-path" component={LearningModuleList} />
        </div>
        <Route
          path="/learning-module/:learningModuleId"
          component={LearningUnitList}
        />
      </React.Fragment>
    );
  }
}
