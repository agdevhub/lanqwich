import React from "react";
import Axios from "axios";
import LearningUnit from "../LearningUnit";

export default class LearningUnitList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      learningUnits: [],
      learningModuleId: props.match.params.learningModuleId
    };
  }

  async componentDidMount() {
    const response = await Axios.get(`/api/learning-modules/${this.state.learningModuleId}`);
    this.setState({ learningUnits: response.data });
  }

  render() {
    return this.state.learningUnits.map((unit, index) => (
      <LearningUnit key={index} unitId={unit._id} name={unit.name} desc={unit.desc} />
    ));
  }
}
