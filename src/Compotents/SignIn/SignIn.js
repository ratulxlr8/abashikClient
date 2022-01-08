import React, { useEffect, useState } from "react";

const SignIn = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/aa")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);
  console.log(users);
  return (
    <div>
      <h1>
        This is Sign in page{" "}
        {users.map((book) => (
          <span>{book.email}</span>
        ))}
      </h1>
    </div>
  );
};

export default SignIn;
