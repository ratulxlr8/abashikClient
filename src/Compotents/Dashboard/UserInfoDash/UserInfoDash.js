import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { userContext } from "../../../App";
import Sidebar from "../Sidebar/Sidebar";

const UserInfoDash = () => {
  const [loggedInUser, setLoggedInUser] = useContext(userContext);
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    fetch("http://localhost:5000/renter", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(data),
    }).then((res) => res.json());
  };

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
                <form onSubmit={handleSubmit(onSubmit)}>
                  <div className="col-md-12 mx-auto  my-auto">
                    <div class="form-group">
                      <label htmlFor="">Email</label>
                      <input
                        class="form-control"
                        type="email"
                        placeholder="email"
                        {...register("email", {
                          required: true,
                          maxLength: 40,
                        })}
                      />
                    </div>
                    <div class="form-group">
                      <label htmlFor="">Due</label>
                      <input
                        class="form-control"
                        placeholder="due"
                        type="number"
                        {...register("due", { maxLength: 20 })}
                      />
                    </div>
                    <div class="form-group">
                      <label htmlFor="">Paid</label>
                      <input
                        class="form-control"
                        placeholder="paid"
                        type="number"
                        {...register("paid", { maxLength: 20 })}
                      />
                    </div>
                    <div class="form-group">
                      <label htmlFor="">month</label>
                      <select class="form-select" {...register("month")}>
                        <option value="January">January</option>
                        <option value="February">February</option>
                        <option value="March">March</option>
                      </select>
                    </div>

                    {/* <input
type="password"
{...register("password", {
  pattern: /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/,
})}
/> */}

                    <input class="btn btn-primary" type="submit" />
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserInfoDash;
