import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Navabar from "../Shared/Navbar/Navabar";

const FindHouse = () => {
  const [property, setProperty] = useState([]);
  const handleBookNow = () => {
    console.log("Booked");
  };
  useEffect(() => {
    fetch("http://localhost:5000/propertyList")
      .then((res) => res.json())
      .then((data) => setProperty(data));
  }, []);

  console.log(property);
  return (
    <div>
      <Navabar></Navabar>
      <h1>FindHouse Page rendered </h1>

      {property.map((viewData) => (
        <div className="col-md-4 d-flex flex-row text-light ">
          <div className="bg-dark rounded mb-2 pb-3">
            <div className="px-5 py-3 text-left">
              <p>Email:{viewData.email}</p>
              <p> Price:{viewData.price}</p>
              <p>
                Location:
                {viewData.location}
              </p>
            </div>
            <div class="col text-center">
              <Link to="/BookPage">
                <button
                  price={viewData.email}
                  class="btn btn-primary"
                  onClick={handleBookNow}
                >
                  Book Now
                </button>
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FindHouse;
