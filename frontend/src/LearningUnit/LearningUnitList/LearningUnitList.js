import React from "react";
import Axios from "axios";
import LearningUnit from "../LearningUnit";
import Footer from '../../Footer/Footer';

export default class LearningUnitList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      learningUnits: [],
      learningModuleId: props.match.params.learningModuleId
    };
  }

  async componentDidMount() {
    const response = await Axios.get(
      `/api/learning-modules/${this.state.learningModuleId}`
    );
    this.setState({ learningUnits: response.data });
  }

  render() {
    return (
      <React.Fragment>
        <div className="container">
          <div className="row">
            <ul className="nav nav-tabs" id="learningUnitTabs" role="tablist">
              {this.state.learningUnits.map((unit, index) => (
                <li className="nav-item">
                  <a
                    style={{
                      "border-top-left-radius": "0",
                      "border-top-right-radius": "0"
                    }}
                    className={index === 0 ? "nav-link active" : "nav-link"}
                    id={"unitTabId-" + unit._id}
                    data-toggle="tab"
                    href={"#unit-" + unit._id}
                    role="tab"
                    aria-controls={"unit-" + unit._id}
                    aria-selected="true"
                  >
                    Part {index + 1}. {unit.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="tab-content" id="learningUnitTabContents">
            {this.state.learningUnits.map((unit, index) => (
              <div
                className={
                  index === 0 ? "tab-pane fade show active" : "tab-pane fade"
                }
                id={"unit-" + unit._id}
                role="tabpanel"
                aria-labelledby={"unitTabId-" + unit._id}
              >
                <LearningUnit
                  key={index}
                  unitId={unit._id}
                  name={unit.name}
                  content={unit.content}
                  duration={unit.duration}
                  learningModuleId={this.state.learningModuleId}
                />
              </div>
            ))}
          </div>
        </div>
        <Footer />
      </React.Fragment>
      // this.state.learningUnits.map((unit, index) => (
      //   <LearningUnit key={index} unitId={unit._id} name={unit.name} content={unit.content} duration={unit.duration} />
      // ));
    );
  }
}
