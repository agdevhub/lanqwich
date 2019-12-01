import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./Navbar/Navbar";
import LearningModuleList from "./LearningModule/LearningModuleList/LearningModuleList";
import LearningUnitList from "./LearningUnit/LearningUnitList/LearningUnitList";
import TinyEditor from "./TinyEditor/TinyEditor";
import { Redirect, Switch } from "react-router-dom";

export default class App extends React.Component {

  render() {
    return (
      <React.Fragment>
        <Navbar />
        <Switch>
        
          <Route path="/learning-path" component={LearningModuleList} />
          <Route
            path="/learning-module/:learningModuleId"
            component={LearningUnitList}
          />
          <Route path="/tiny-editor/:learningUnitId" component={TinyEditor} />
          <Redirect exact from='/' to="/learning-path" />
        </Switch>
      </React.Fragment>
    );
  }
}
