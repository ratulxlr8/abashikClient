import React, { useContext } from "react";
import { useState } from "react";
import { useEffect } from "react";
import { userContext } from "../../../App";
import Sidebar from "../Sidebar/Sidebar";

const Notification = () => {
  const [user, seUsers] = useState([]);
  const [loggedInUser, setLoggedInUser] = useContext(userContext);

  const handleAdd = (data) => {
    fetch(`http://localhost:5000/rentrequest/${data}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((result) => {
        console.log("Deleted successfullly ");
      });
    document.getElementById("deleteThis").style.display = "none";
  };
  useEffect(() => {
    fetch("http://localhost:5000/rentrequestView")
      .then((res) => res.json())
      .then((data) => seUsers(data));
  }, []);
  //   console.log(user);
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
                asdsad <span className="text-success"> USER</span>
              </p>
              <div className="row">
                <div className="col-md-12 mx-auto  my-auto">
                  <h1>Notification Page</h1>

                  {user.map((viewData) => (
                    <div>
                      <p id="deleteThis">{viewData.email}</p>
                      <button
                        onClick={() => handleAdd(viewData.email)}
                        className="btn btn-success"
                      >
                        Delete
                      </button>
                      <button className=" mx-3 btn btn-danger">Add</button>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Notification;
