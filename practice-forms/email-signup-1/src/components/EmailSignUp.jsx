import React from "react";
import classes from "./EmailSignUp.module.css";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { schema } from "./validation";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";

import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";

const EmailSignUp = ({ children }) => {
  const {
    register,
    handleSubmit,
    setValue,
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
                <p className={classes.error}>{errors.firstName?.message}</p>
              </div>
              <div className={classes.nameInput}>
                <input
                  type="text"
                  className={classes.input}
                  {...register("lastName")}
                />
                <label htmlFor="lastName">Last Name</label>
                <p className={classes.error}>{errors.lastName?.message}</p>
              </div>
            </div>
          </div>
          <div className={classes.contactContainer}>
            <div className={classes.emailContainer}>
              <label htmlFor="email">Email</label>
              <input
                type="text"
                className={classes.input}
                {...register("email")}
              />
              <p className={classes.error}>{errors.email?.message}</p>
            </div>

            <div className={classes.phoneContainer}>
              <label htmlFor="phone">Phone</label>
              <input
                type="number"
                className={classes.input}
                {...register("phone")}
              />
              <p className={classes.error}>{errors.phone?.message}</p>
            </div>
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
              <p className={classes.error}>{errors.street?.message}</p>
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
                <p className={classes.error}>{errors.city?.message}</p>
              </div>
              <div className={classes.state}>
                <input
                  type="text"
                  className={classes.input}
                  {...register("state")}
                />
                <label htmlFor="state">State / Province</label>
                <p className={classes.error}>{errors.state?.message}</p>
              </div>
            </div>

            <div className={classes.zipCode}>
              <input
                type="number"
                className={classes.input}
                {...register("zip")}
              />
              <label htmlFor="zip">Postal / Zip Code</label>
              <p className={classes.error}>{errors.zip?.message}</p>
            </div>

            <div className={classes.zipCode}>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DesktopDatePicker
                  {...register("dob")}
                  onChange={(date) => {
                    setValue("dob", date);
                  }}
                />
              </LocalizationProvider>
              {/* <label htmlFor="dob">Date of Birth</label> */}
              <p className={classes.error}>{errors.dob?.message}</p>
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
    </>
  );
};

export default EmailSignUp;
