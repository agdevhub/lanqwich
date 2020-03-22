import React from "react";
import "./LearningUnit.css";
import QuestionList from "../Question/QuestionList/QuestionList";
import { Link, withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import store from "../store";
import Footer from "../Footer/Footer";

class LearningUnit extends React.Component {
  constructor() {
    super();
    this.state = {
      unitCount: 0,
      currentUnitSeq: 0
    };
    // getLearningUnitsOfModule(moduleId) {
    //   console.log("called getLearningUnitsOfModule method " + moduleId);
    //   store.dispatch(getLearningUnitsOfModule(moduleId));
    //   this.props.history.push(`/arabic/module/${this.props.learningModuleId}`);
    // }
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ unitCount: nextProps.units.length });
    console.log(this.state.unitCount);
    //this.setState({ moduleId: })
  }

  // goToNextUnit() {
  //   this.setState({ currentUnitSeq: currentUnitSeq + 1 });
  //   this.props.history(`/arabic/modules/${moduleId}/units/${currentUnitSeq}`);
  // }

  render() {
    console.log(this.props.units);
    return (
      <React.Fragment>
        <h3>{this.props.units[this.state.currentUnitSeq].name}</h3>
        <br />
        {/* <p>{this.props.duration}</p> */}
        <p id={"unitContent" + this.props.units[this.state.currentUnitSeq]._id}>
          <div
            dangerouslySetInnerHTML={{
              __html: this.props.units[this.state.currentUnitSeq].content
            }}
          />
        </p>
        <Link
          className="btn btn-outline-info"
          to={{
            pathname: `/tiny-editor/${
              this.props.units[this.state.currentUnitSeq]._id
            }`,
            state: {
              learningUnitContent: this.props.units[this.state.currentUnitSeq]
                .content,
              learningModuleId: this.props.units[this.state.currentUnitSeq]
                .module_id
            }
          }}
        >
          Edit in Tiny
        </Link>
      </React.Fragment>
    );
  }
}

LearningUnit.propTypes = {
  units: PropTypes.array
};

const mapStateToProps = state => ({
  units: state.learning.units
});
export default connect(mapStateToProps, null, null, {
  // pure: false // learn more about this
})(withRouter(LearningUnit));
