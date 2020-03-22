import React from "react";
import Axios from "axios";
import LearningUnit from "../LearningUnit";
import Footer from "../../Footer/Footer";
import "./LearningUnitList.css";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import store from "../../store";
import { getLearningUnitsOfModule } from "../../actions/learningActions";

class LearningUnitList extends React.Component {
  constructor(props) {
    super(props);

    

    this.state = {
      learningUnits: [],
      learningModuleId: props.match.params.learningModuleId
    };

    store.dispatch(
      getLearningUnitsOfModule(props.match.params.learningModuleId)
    );
  }

  componentDidUpdate() {
    if(this.props.unit) {
      this.props.history.push(`/arabic/modules/${this.props.units[0].module_id}/units/${this.props.units[0]._id}`);
    }
  }

  render() {
    return (
      <React.Fragment>
        <div className="container">
          <button type="button" class="btn btn-outline-secondary">
            Previous
          </button>
          <button type="button" class="btn btn-outline-secondary">
            Next
          </button>
          <div className="row">
            <div className="col">
              <LearningUnit />
            </div>
          </div>
        </div>
        <Footer />
      </React.Fragment>
    );
  }
}

LearningUnitList.propTypes = {
  unit: PropTypes.array
};

const mapStateToProps = state => ({
  units: state.learning.units
});
export default connect(mapStateToProps, null, null, {
  // pure: false // learn more about this
})(LearningUnitList);
