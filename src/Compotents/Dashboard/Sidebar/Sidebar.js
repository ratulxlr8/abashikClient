import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { getAuth, signOut } from "firebase/auth";
import { userContext } from "../../../App";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import "./Sidebar.css";
import { useState } from "react";
import { useEffect } from "react";
const Sidebar = () => {
  const [loggedInUser, setLoggedInUser] = useContext(userContext);
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
  const history = useHistory();
  const handleLogout = () => {
    const auth = getAuth();
    signOut(auth)
      .then(() => {
        const signedInUser = {
          name: "",
          email: "",
          photo: "",
        };
        setLoggedInUser(signedInUser);
        // Sign-out successful.
        history.push("/");
      })
      .catch((error) => {
        // An error happened.
      });
  };
  return (
    <div>
      <Link to="/DashboardInfo">
        <button className="btn btn-success mt-3  btn-custom-wid">
          Dashboard
        </button>
      </Link>

      {isOwner && (
        <div>
          <Link to="/UserInfoDash">
            <button className="btn btn-success mt-3 btn-custom-wid">
              Add Renter
            </button>
          </Link>
          {/* <Link to="/Adduser">
            <button className="btn btn-success mt-3 btn-custom-wid">
              Add renter
            </button>
          </Link> */}
          <Link to="/Addproperty">
            <button className="btn btn-success mt-3 btn-custom-wid">
              Add Property
            </button>
          </Link>
          <Link to="/Notification">
            <button className="btn btn-success mt-3 btn-custom-wid">
              Notification
            </button>
          </Link>
        </div>
      )}

      <button
        className="btn btn-success mt-3 btn-custom-wid"
        onClick={handleLogout}
      >
        Logout
      </button>
    </div>
  );
};

export default Sidebar;
