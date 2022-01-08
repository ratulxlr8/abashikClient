import React, { useEffect, useState } from "react";
import Navabar from "../Shared/Navbar/Navabar";

const FindHouse = () => {
  const [property, setProperty] = useState([]);

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
        <div className="col-md-4 d-flex flex-row text-light">
          <div className="bg-dark mb-2">
            <div className="px-5 py-3 text-left">
              <p>Email:{viewData.email}</p>
              <p> Price:{viewData.due}</p>
              <p>
                Location:
                {viewData.paid}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FindHouse;
