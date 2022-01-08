import React from "react";

import { useForm } from "react-hook-form";
const AddUser = () => {
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
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="col-md-4 mx-auto  my-auto">
        <div class="form-group">
          <label htmlFor="">Email</label>
          <input
            class="form-control"
            type="email"
            placeholder="email"
            {...register("email", { required: true, maxLength: 40 })}
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
          <label htmlFor=""></label>
          <input
            class="form-control"
            placeholder="paid"
            type="number"
            {...register("paid", { maxLength: 20 })}
          />
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
  );
};

export default AddUser;
