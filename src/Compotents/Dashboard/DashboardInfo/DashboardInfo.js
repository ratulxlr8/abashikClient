import React, { useContext } from "react";
import { useEffect } from "react";
import { useState } from "react";

import { userContext } from "../../../App";
import Sidebar from "../Sidebar/Sidebar";
import "./DashboardInfo.css";
const DashboardInfo = () => {
  const [loggedInUser, setLoggedInUser] = useContext(userContext);
  const [users, setUsers] = useState([]);
  const [total, setTotal] = useState(0);
  useEffect(() => {
    fetch("http://localhost:5000/DashboardInfo?email=" + loggedInUser.email)
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);
  //renter list
  const [renterView, setrenterView] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/renterList")
      .then((res) => res.json())
      .then((data) => setrenterView(data));
  }, []);
  //renter list
  //Owner verification
  const [isOwner, isetIsOwner] = useState(false);
  useEffect(() => {
    fetch("http://localhost:5000/isOwner", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ email: loggedInUser.email }),
    })
      .then((res) => res.json())
      .then((data) => isetIsOwner(data));
  }, []);
  //Owner verification
  // const userView = users[0];
  // console.log(userView);
  const handleLogout = () => {
    console.log("handleLogout clicked");
  };
  console.log(renterView);
  let totalDue = 0;
  let totalPaid = 0;
  for (let i = 0; i < renterView.length; i++) {
    let due = +renterView[i].due;
    totalDue = due + totalDue;
    let paid = +renterView[i].paid;
    totalPaid = paid + totalPaid;
  }
  if (totalDue === 0) {
    console.log("aa");
  }
  if (totalDue != 0) {
    console.log("bb");
  }
  //

  console.log(totalPaid);
  console.log(totalDue);
  var colCount = 0;
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
            {!isOwner && (
              <div className="col-md-10">
                <h1>Hello! Renter</h1>
                <p className="bg-dark p-3">
                  Payment Status <span className="text-success"> OK!</span>
                </p>
                <div className="row">
                  <div className="col-md-3  ">
                    <div className="bg-secondary text-center p-5">
                      <p>Total Due</p>
                      <p>
                        {" "}
                        {users.map((viewData) => (
                          <span>{viewData.due}</span>
                        ))}
                        /-
                      </p>
                    </div>
                  </div>
                  <div className="col-md-3  ">
                    <div className="bg-secondary text-center p-5">
                      <p>Total Paid</p>
                      <p>
                        {" "}
                        {users.map((viewData) => (
                          <span>{viewData.paid}</span>
                        ))}
                        /-
                      </p>
                    </div>
                  </div>
                  <div className="col-md-3  ">
                    <div className="bg-secondary text-center p-5">
                      <p>Print Payment Slip </p>
                    </div>
                  </div>
                  <div className="col-md-3  ">
                    <div className="bg-secondary text-center p-5">
                      <p>Make Payment</p>
                    </div>
                  </div>
                </div>
              </div>
            )}
            {isOwner && (
              <div className="col-md-10">
                <div className="row container">
                  <h1 className="mx-auto" id="demo">
                    Hello! Owner
                  </h1>
                </div>
                <div>
                  <h3 className="text-center border bg-success col-md-4">
                    Total Paid:- {totalPaid}
                  </h3>{" "}
                  <h3 className="text-center border bg-danger col-md-4">
                    Total Due:- {totalDue}
                  </h3>
                  <div className="bg-dark mb-2">
                    <div className="px-5 py-3 text-left">
                      <table class="table text-light">
                        <thead>
                          <tr>
                            <th scope="col">#</th>
                            <th scope="col">Email</th>
                            <th scope="col">Due</th>
                            <th scope="col">Paid</th>
                          </tr>
                        </thead>
                        <tbody>
                          {renterView.map((viewData) => (
                            <tr>
                              <th scope="row">{colCount + 1}</th>
                              <td>{viewData.email}</td>
                              <td>{viewData.due}/-</td>
                              <td>{viewData.paid}/-</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardInfo;
