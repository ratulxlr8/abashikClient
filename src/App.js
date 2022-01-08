// or less ideally

import { Navbar } from "react-bootstrap";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./Compotents/Home/Home/Home";
import FindHouse from "./Compotents/FindHouse/FindHouse";
import SignUp from "./Compotents/SignUp/SignUp";
import SignIn from "./Compotents/SignIn/SignIn";
import Navabar from "./Compotents/Shared/Navbar/Navabar";
import { initializeApp } from "firebase/app";
import { useState, createContext } from "react";
import PrivateRoute from "./Compotents/PrivateRoute/PrivateRoute";
import Dashboard from "./Compotents/Dashboard/Dashboard";
import DashboardInfo from "./Compotents/Dashboard/DashboardInfo/DashboardInfo";
import UserInfoDash from "./Compotents/Dashboard/UserInfoDash/UserInfoDash";
import AddUser from "./Compotents/AddUser/AddUser";

import Addproperty from "./Compotents/Addproperty/Addproperty";
import Demo from "./Compotents/Demo/Demo";
export const userContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});

  return (
    <userContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/renter">
            <FindHouse />
          </Route>
          <Route path="/sign-up">
            <SignUp />
          </Route>
          <Route path="/sign-in">
            <Demo></Demo>
          </Route>
          <Route path="/dashboard">
            <Dashboard />
          </Route>
          <Route path="/UserInfoDash">
            <UserInfoDash></UserInfoDash>
          </Route>
          <Route path="/Adduser">
            <AddUser></AddUser>
          </Route>
          <Route path="/Addproperty">
            <Addproperty></Addproperty>
          </Route>

          <PrivateRoute path="/dashboard">
            <Dashboard />
          </PrivateRoute>

          <PrivateRoute path="/DashboardInfo">
            <DashboardInfo></DashboardInfo>
          </PrivateRoute>
          <Route path="*">
            <h1>Not Found</h1>
          </Route>
        </Switch>
      </Router>
    </userContext.Provider>
  );
}

export default App;
