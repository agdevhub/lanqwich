import React from "react";
import Axios from "axios";
import Module from "../LearningModule";
import "./LearningModuleList.css";
import Footer from "../../Footer/Footer";

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
    console.log(this.state.learningModules);
  }

  render() {
    return (
      <React.Fragment>
        <div className="container">
          <div className="row">
            <div className="col">
              {this.state.learningModules.map((module, index) => (
                <Module
                  key={index}
                  learningModuleId={module._id}
                  name={module.name}
                  desc={module.desc}
                  rank={module.rank}
                  imgName={module.imgName}
                />
              ))}
            </div>
          </div>
        </div>
        <Footer />
      </React.Fragment>
    );
  }
}
