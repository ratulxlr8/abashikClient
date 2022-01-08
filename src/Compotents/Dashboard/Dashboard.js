import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { userContext } from "../../App";
import "./Dashboard.css";
import DashboardInfo from "./DashboardInfo/DashboardInfo";
import UserInfoDash from "./UserInfoDash/UserInfoDash";
const Dashboard = () => {
  const [loggedInUser, setLoggedInUser] = useContext(userContext);

  return (
    <div className="Back text-light ">
      <DashboardInfo></DashboardInfo>
    </div>
  );
};

export default Dashboard;
