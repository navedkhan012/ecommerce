import React, { useEffect } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./screens/Home";
import SignIn from "./screens/SignIn";
import SignUp from "./screens/SignUp";
import "bootstrap/dist/css/bootstrap.min.css";
import {   useDispatch, useSelector } from "react-redux";
import PrivateRoute from "./components/PrivateRoute";
import { isUserLoggedIn } from "./actions/auth";

// window.store = store;
const App = () => {
  const dispatch = useDispatch()
  const auth = useSelector(state => state.login)
  useEffect(() => {
    if(!auth.authenticate){
      dispatch(isUserLoggedIn())
    }
  }, []);
  return (
    <>
      <Router>
        <div>
          <Header></Header>
            <Route path="/signup" component={SignUp } />
            <Route path="/signin" component={SignIn } />
            <PrivateRoute path="/" component={Home } exact />
        </div>
      </Router>
    </>
  );
};

export default App;
