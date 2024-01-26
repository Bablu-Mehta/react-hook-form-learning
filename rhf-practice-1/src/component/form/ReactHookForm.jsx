import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { formSchema } from "../../formValidationSchema";
import { DevTool } from "@hookform/devtools";

function ReactHookForm() {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
    defaultValues: {
      username: "Batman",
    },
  });

  function onSubmit(data, e) {
    console.log("form submitted", data);
    e.target.reset();
  }

  return (
    <>
      <div className="Form-container">
        <form
          onSubmit={handleSubmit((data, e) => onSubmit(data, e))}
          noValidate
        >
          <label htmlFor="username">Username</label>
          <input type="text" id="username" {...register("username")} />
          <p className="error">{errors.username?.message}</p>

          <label htmlFor="email">Email</label>
          <input type="email" id="email" {...register("email")} />
          <p className="error">{errors.email?.message}</p>

          <label htmlFor="email">Password</label>
          <input type="password" id="password" {...register("password")} />
          <p className="error">{errors.password?.message}</p>

          <label htmlFor="email">Confirm Password</label>
          <input
            type="password"
            id="consform-password"
            {...register("conformPassword")}
          />
          <p className="error">{errors.conformPassword?.message}</p>

          <div className="gender">
            <span>Gender:</span>
            <div className="gender-input">
              <input
                type="radio"
                value="male"
                {...register("gender")}
              />
              <label htmlFor="gender">Male</label>
            </div>

            <div className="gender-input">
              <input
                type="radio"
                value="female"
                {...register("gender")}
              />
              <label htmlFor="gender">Female</label>
            </div>
            <p className="error">{errors.gender?.message}</p>
          </div>

          <button type="submit">Submit</button>
        </form>
      </div>
      <DevTool control={control} />
    </>

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

export default ReactHookForm;
