import React from "react";
import { useForm } from "react-hook-form";

function YoutubeForm() {
  const { register, handleSubmit, formState } = useForm();
  const { errors } = formState;


  function onSubmit(data) {
    console.log("form submitted", data);
  }

  
  return (
    <div className="Form-container">
      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        <label htmlFor="username">Username</label>
        <input
          type="text"
          id="username"
          {...register("username", {
            required: {
              value: true,
              message: "username is required",
            },
          })}
        />
        <p className="error">{errors.username?.message}</p>

        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          {...register("email", {
            required: "email is required",
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,}$/i,
              message: "invalid email adress",
            },
            validate: {
              NotAdmin: (fieldValue) => {
                return (
                  fieldValue !== "admin@example.com" ||
                  "Enter Different Email Address"
                );
              },
              NotBlackListed: (fieldValue) => {
                return (
                  !fieldValue.endsWith("baddomain.com") ||
                  "This domain is not supported"
                );
              },
            },
          })}
        />
        <p className="error">{errors.email?.message}</p>
        <button>Submit</button>
      </form>
    </div>
    // <div className="Form-container">
    //   <form onSubmit={handleSubmit(onSubmit)} noValidate>
    //     <label htmlFor="username">Username</label>
    //     <input
    //       type="text"
    //       id="username"
    //       {...register("username", {
    //         required: {
    //           value: true,
    //           message: "username is required",
    //         },
    //       })}
    //     />
    //     <p className="error">{errors.username?.message}</p>

    //     <label htmlFor="email">Email</label>
    //     <input
    //       type="email"
    //       id="email"
    //       {...register("email", {
    //         required: "email is required",
    //         pattern: {
    //           value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,}$/i,
    //           message: "invalid email adress",
    //         },
    //         validate: {
    //           NotAdmin: (fieldValue) => {
    //             return (
    //               fieldValue !== "admin@example.com" ||
    //               "Enter Different Email Address"
    //             );
    //           },
    //           NotBlackListed: (fieldValue) => {
    //             return (
    //               !fieldValue.endsWith("baddomain.com") ||
    //               "This domain is not supported"
    //             );
    //           },
    //         },
    //       })}
    //     />
    //     <p className="error">{errors.email?.message}</p>
    //     <button>Submit</button>
    //   </form>
    // </div>
  );
}

export default YoutubeForm;
