import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./screens/Home";
import SignIn from "./screens/SignIn";
import SignUp from "./screens/SignUp";
import "bootstrap/dist/css/bootstrap.min.css";
import { Provider } from "react-redux";
import store from "./store";
import PrivateRoute from "./components/PrivateRoute";

// window.store = store;
const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <div>
          <Header></Header>
        
            <Route path="/signup" component={SignUp } />
            <Route path="/signin" component={SignIn } />
            <PrivateRoute path="/" component={Home } exact />
           
        </div>
      </Router>
    </Provider>
  );
};

export default App;
