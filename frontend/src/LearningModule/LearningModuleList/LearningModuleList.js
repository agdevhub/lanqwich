import React from "react";
import Axios from "axios";
import Module from "../LearningModule";
import "./LearningModuleList.css";

export default class LearningModuleList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      learningModules: []
    };
  }

  async componentDidMount() {
    const response = await Axios.get("api/learning-modules");
    this.setState({ learningModules: response.data });
  }

  render() {
    return this.state.learningModules.map((module, index) => (
      <Module
        key={index}
        learningModuleId={module._id}
        name={module.name}
        desc={module.desc}
      />
    ));
  }
}
