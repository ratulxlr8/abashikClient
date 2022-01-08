import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { userContext } from "../../../App";
import Sidebar from "../Sidebar/Sidebar";

const UserInfoDash = () => {
  const [loggedInUser, setLoggedInUser] = useContext(userContext);
  return (
    <div>
      <div className="Back text-light ">
        <div className="container ">
          <h2 class="text-center">Dashboard Page</h2>
          <h2>Welcome {loggedInUser.name}</h2>
          <div className="row">
            <div className="col-md-2 justify-content-center">
              <img
                className="image-cus-design rounded-circle"
                src={loggedInUser.photo}
                alt=""
              />
              <small>
                {" "}
                <p>{loggedInUser.email}</p>
              </small>
              <div className="col-md-5 mt-5">
                <Sidebar></Sidebar>
              </div>
            </div>

            <div className="col-md-10">
              <p className="bg-dark p-3">
                USER <span className="text-success"> USER</span>
              </p>
              <div className="row">
                <div className="col-md-3  ">
                  <div className="bg-secondary text-center p-5">
                    <p>USER USER</p>
                    <p>00-/</p>
                  </div>
                </div>
                <div className="col-md-3  ">
                  <div className="bg-secondary text-center p-5">
                    <p>USER Paid</p>
                    <p>1000/-</p>
                  </div>
                </div>
                <div className="col-md-3  ">
                  <div className="bg-secondary text-center p-5">
                    <p>USER</p>
                  </div>
                </div>
                <div className="col-md-3  ">
                  <div className="bg-secondary text-center p-5">
                    <p>USER Payment</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserInfoDash;
