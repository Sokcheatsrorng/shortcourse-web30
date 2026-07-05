import { useState } from "react";
import { useForm } from "react-hook-form";

export default function TestingFormComponent() {
  // create state for fileUpload
  const [fileUpload, setFileUpload] = useState("");
  // create state with using useForm hook from react hook form
  const {
    register, // catch all input from user's input
    handleSubmit, // manange all submission from form
    // setError,
    // watch,
    // reset
  } = useForm({
    defaultValues: {
      email: "",
      password: "",
      username: "",
      phoneNumber: "",
      address: {
        addressLine1: "PP",
        addressLine2: "PP",
        road: "2",
        linkAddress: "",
      },
      confirmPassword: "",
      profile: "",
    },
  });

  // create handleSubmit logic
  const onHandleSubmitForm = (value) => {
    try {
      // upload file endpoints
      async function handleUploadFile() {
        const formData = new FormData();
        formData.append("file", value.profile[0]);
        console.log(`==> Form data: ${formData}`);

        const res = await fetch(
          "https://api.escuelajs.co/api/v1/files/upload",
          {
            method: "POST",
            // headers: {
            //   "content-type": "multipart/form-data",
            // },
            body: formData,
          },
        );
        console.log("Response profile: ", res);
        const dataUpload = await res.json();
        console.log(`==> file uplaod:`, dataUpload.location);
        setFileUpload(dataUpload.location);

        if (dataUpload.location != null) {
          async function handleRegister() {
            console.log(`===> File upload from state: ${fileUpload}`);
            const res = await fetch(
              "https://ishop.cheat.casa/api/v1/users/user-signup?emailVerified=false",
              {
                method: "POST",
                headers: {
                  "content-type": "application/json",
                },
                body: JSON.stringify({
                  email: value.email,
                  password: value.password,
                  username: value.username,
                  phoneNumber: value.phoneNumber,
                  address: {
                    addressLine1: "PP",
                    addressLine2: "PP",
                    road: "2",
                    linkAddress: "",
                  },
                  confirmPassword: value.confirmPassword,
                  profile: dataUpload?.location,
                }),
              },
            );
            const data = await res.json(); // covert json -> object
            console.log(data);
          }
          handleRegister();
        }

      }

      handleUploadFile();
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      {/* create form(traditional form) */}
      <form action="" onSubmit={handleSubmit(onHandleSubmitForm)}>
        {/* username */}
        <label htmlFor="username">Username</label>
        <input
          type="text"
          name="username"
          className="border"
          {...register("username")}
        />
        <br />
        {/* email */}
        <label htmlFor="email">Email</label>
        <input
          type="email"
          name="email"
          className="border"
          {...register("email")}
        />
        <br />
        {/* password */}
        <label htmlFor="password">Password</label>
        <input
          type="password"
          name="password"
          className="border"
          {...register("password")}
        />
        <br />
        {/*confirmpassword */}
        <label htmlFor="password">Password</label>
        <input
          type="password"
          name="confirmPassword"
          className="border"
          {...register("confirmPassword")}
        />
        <br />
        {/* phonenumber */}
        <label htmlFor="phoneNuprofile: fileUpload,mber">Phone Number</label>
        <input
          type="text"
          name="phoneNumber"
          className="border"
          {...register("phoneNumber")}
        />{" "}
        <br />
        {/* upload file  */}
        <label htmlFor="profile">Profile</label>
        <input
          type="file"
          name="profile"
          id="profile"
          {...register("profile")}
        />
        {/* submit register */}
        <button className="border p-2 bg-blue-300">Register</button>
      </form>
    </div>
  );
}
