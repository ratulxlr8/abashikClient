import React from "react";
import firebaseConfig from "../../firebase.config";
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { ref, getDownloadURL, uploadBytesResumable } from "firebase/storage";
import { useForm } from "react-hook-form";
const Addproperty = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    console.log(data.photo[0]);
    const file = data.photo[0];
    ////////////////////////////as

    //////////////////////////////////////////////as

    fetch("http://localhost:5000/property", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then(alert("Dhukse re"));
  };
  return (
    <div>
      <h1>Add Property</h1>
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
            <label htmlFor="">Price</label>
            <input
              class="form-control"
              placeholder="due"
              type="number"
              {...register("price", { maxLength: 20 })}
            />
          </div>
          <div class="form-group">
            <label htmlFor="">Location</label>
            <input
              class="form-control"
              placeholder="Location"
              type="text"
              {...register("location", { maxLength: 20 })}
            />
          </div>
          <div class="form-group">
            <label htmlFor="">Upload</label>
            <input
              class="form-control"
              placeholder="Location"
              type="file"
              name="avatar"
              {...register("photo")}
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
    </div>
  );
};

export default Addproperty;
