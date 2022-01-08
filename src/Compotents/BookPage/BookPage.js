import React, { useContext } from "react";
import { useEffect } from "react";
import { userContext } from "../../App";
import Navabar from "../Shared/Navbar/Navabar";

const BookPage = (props) => {
  const [loggedInUser, setLoggedInUser] = useContext(userContext);
  console.log(props);
  useEffect(() => {
    fetch("http://localhost:5000/rentrequest", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ email: loggedInUser.email }),
    }).then((res) => res.json());
    //   .then((data) => isetIsOwner(data));
  }, []);

  return (
    <div>
      <Navabar></Navabar>
      <div className="container">
        <h1>Book Page </h1>
        <p>{loggedInUser.email}</p>
        <p>{loggedInUser.name}</p>
        <p>{props.ownerEmail}</p>
        <p>Hola! Booked</p>
      </div>
    </div>
  );
};

export default BookPage;
