import React from "react";
import classes from "./EmailSignUp.module.css";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { schema } from "./validation";
import { DevTool } from "@hookform/devtools";

const EmailSignUp = () => {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {},
  });

  const handleFormSubmission = (data) => {
    console.log(data);
  };

  return (
    <>
      <div className={classes.formContainer}>
        <div className={classes.header}>
          <h1>Email Sign Up Form</h1>
          <p>
            We would love to be in touch with you! Please sign up to receive
            emails from us!
          </p>
        </div>
        <p>Please complete all information below:</p>

        <form onSubmit={handleSubmit(handleFormSubmission)} noValidate>
          <div className={classes.nameContainer}>
            <p>Name</p>
            <div className={classes.nameInputContainer}>
              <div className={classes.nameInput}>
                <input
                  type="text"
                  className={classes.input}
                  {...register("firstName")}
                />
                <label htmlFor="firstName">First Name</label>
              </div>
              <div className={classes.nameInput}>
                <input
                  type="text"
                  className={classes.input}
                  {...register("lastName")}
                />
                <label htmlFor="lastName">Last Name</label>
              </div>
            </div>
          </div>
          <div className={classes.emailContainer}>
            <label htmlFor="email">Email</label>
            <input
              type="text"
              className={classes.input}
              {...register("email")}
            />
          </div>

          <div className={classes.phoneContainer}>
            <label htmlFor="phone">Phone</label>
            <input
              type="number"
              className={classes.input}
              {...register("phone")}
            />
          </div>

          <div className={classes.addressContainer}>
            <p>Address</p>
            <div className={classes.addressStreet}>
              <input
                type="text"
                className={classes.input}
                {...register("street")}
              />
              <label htmlFor="street">Street Address</label>
            </div>
            <div className={classes.addressStreet}>
              <input
                type="text"
                className={classes.input}
                {...register("street2")}
              />
              <label htmlFor="street2">Street Address Line 2</label>
            </div>
            <div className={classes.stateAddress}>
              <div className={classes.city}>
                <input
                  type="text"
                  className={classes.input}
                  {...register("city")}
                />
                <label htmlFor="city">City</label>
              </div>
              <div className={classes.state}>
                <input
                  type="text"
                  className={classes.input}
                  {...register("state")}
                />
                <label htmlFor="state">State / Province</label>
              </div>
            </div>

            <div className={classes.zipCode}>
              <input
                type="number"
                className={classes.input}
                {...register("zip")}
              />
              <label htmlFor="zip">Postal / Zip Code</label>
            </div>

            <div className={classes.textArea}>
              <label htmlFor="textarea">
                Comments, Questions, or Suggestions
              </label>
              <textarea rows="10" {...register("comments")}></textarea>
            </div>
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
      <DevTool control={control} />
    </>
  );
};

export default EmailSignUp;
