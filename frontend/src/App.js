import React from "react";
import { Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Login from "./Auth/Login";
import Register from "./Auth/Register";
import LearningModuleList from "./LearningModule/LearningModuleList/LearningModuleList";
import LearningUnitList from "./LearningUnit/LearningUnitList/LearningUnitList";
import TinyEditor from "./TinyEditor/TinyEditor";
import { Switch } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";
import jwt_decode from "jwt-decode";
import setAuthToken from "./utils/setAuthToken";
import { setCurrentUser, logoutUser } from "./actions/authActions";
import PrivateRoute from "./private-route/PrivateRoute";
import Landing from "./Landing/Landing";
import LearningUnit from "./LearningUnit/LearningUnit";
import LearningLanding from "./components/LearningLanding/LearningLanding";

// Check for token to keep user logged in
if (localStorage.jwtToken) {
  // Set auth token header auth
  const token = localStorage.jwtToken;
  setAuthToken(token);
  // Decode token and get user info and exp
  const decoded = jwt_decode(token);
  // Set user and isAuthenticated
  store.dispatch(setCurrentUser(decoded)); // Check for expired token
  const currentTime = Date.now() / 1000; // to get in milliseconds
  if (decoded.exp < currentTime) {
    // Logout user
    store.dispatch(logoutUser()); // Redirect to login
    window.location.href = "/";
  }
}

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <React.Fragment>
          <Header />
          <Switch>
            <Route exact path="/register" component={Register} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/arabic" component={LearningLanding} />

            <Route
              exact
              path="/arabic/modules/:learningModuleId"
              component={LearningUnitList}
            />
            <Route
              exact
              path="/arabic/modules/:learningModuleSlug/units/:learningUnitSlug"
              component={LearningUnit}
            />
            <Route path="/tiny-editor/:learningUnitId" component={TinyEditor} />
            <Route exact path="/" component={Landing} />

            {/* Private Routes That Require Login */}
            {/* <PrivateRoute exact path="/arabic" component={LearningLanding} /> */}
          </Switch>
        </React.Fragment>
      </Provider>
    );
  }
}
