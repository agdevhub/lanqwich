import React from "react";
import { Link, withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import store from "../store";
import "./Landing.css";
import sampleImg1 from "../images/sample/seeding.jpg";
import sampleImg2 from "../images/sample/growth.jpg";
import sampleImg3 from "../images/sample/blossom.jpg";
import Footer from '../Footer/Footer';

class Landing extends React.Component {
  render() {
    return (
      <React.Fragment>
        <header class="masthead text-left text-white">
          <div class="masthead-content">
            <div class="container">
              <h2 class="masthead-heading mb-2">One Page Wonder</h2>
              <h2 class="masthead-subheading mb-4">Will Rock Your Socks Off</h2>
              <p class="masthead-text">Lorem ipsum dolor, consectetur adipisicing elit. Quod aliquid, mollitia odio veniam sit iste esse assumenda amet aperiam exercitationem, ea animi blanditiis recusandae! Ratione voluptatum molestiae adipisci, beatae obcaecati. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod aliquid, mollitia odio veniam sit iste esse assumenda amet aperiam exercitationem.</p>
              <Link to="/arabic" class="btn btn-primary btn-xl rounded-pill mt-4">
                Start Here!
              </Link>
            </div>
          </div>
          <div class="bg-circle-1 bg-circle"></div>
          <div class="bg-circle-2 bg-circle"></div>
          <div class="bg-circle-3 bg-circle"></div>
          <div class="bg-circle-4 bg-circle"></div>
        </header>
        <section>
          <div class="container">
            <div class="row align-items-center">
              <div class="col-lg-5 order-lg-2">
                <div class="p-5">
                  <img
                    class="img-fluid rounded-circle"
                    src={sampleImg1}
                    alt=""
                  />
                </div>
              </div>
              <div class="col-lg-6 order-lg-1">
                <div class="p-5">
                  <h2 class="display-4">For those about to rock...</h2>
                  <p>
                    Lorem ipsum dolor, consectetur adipisicing elit. Quod
                    aliquid, mollitia odio veniam sit iste esse assumenda amet
                    aperiam exercitationem, ea animi blanditiis recusandae!
                    Ratione voluptatum molestiae adipisci, beatae obcaecati
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div class="container">
            <div class="row align-items-center">
              <div class="col-lg-5">
                <div class="p-5">
                  <img
                    class="img-fluid rounded-circle"
                    src={sampleImg2}
                    alt=""
                  />
                </div>
              </div>
              <div class="col-lg-6">
                <div class="p-5">
                  <h2 class="display-4">We salute you!</h2>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Quod aliquid, mollitia odio veniam sit iste esse assumenda
                    amet aperiam exercitationem, ea animi blanditiis recusandae!
                    Ratione voluptatum molestiae adipisci, beatae obcaecati.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div class="container">
            <div class="row align-items-center">
              <div class="col-lg-5 order-lg-2">
                <div class="p-5">
                  <img
                    class="img-fluid rounded-circle"
                    src={sampleImg3}
                    alt=""
                  />
                </div>
              </div>
              <div class="col-lg-6 order-lg-1">
                <div class="p-5">
                  <h2 class="display-4">Let there be rock!</h2>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Quod aliquid, mollitia odio veniam sit iste esse assumenda
                    amet aperiam exercitationem, ea animi blanditiis recusandae!
                    Ratione voluptatum molestiae adipisci, beatae obcaecati.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <Footer />
      </React.Fragment>
    );
  }
}

Landing.propTypes = {
  auth: PropTypes.object.isRequired
};
const mapStateToProps = state => ({
  auth: state.auth
});
export default connect(mapStateToProps, {})(withRouter(Landing));
