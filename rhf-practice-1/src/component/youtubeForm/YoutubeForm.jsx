import React from "react";
import { useForm } from "react-hook-form";
import { DevTool } from "@hookform/devtools";

function YoutubeForm() {
  const form = useForm();
  const { register, control, handleSubmit } = form;
  function onSubmit(data) {
    console.log("form submitted", data);
  }
  return (
    <div className="youtubeForm-container">
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
          })}
        />

        <label htmlFor="channel">Channel Name</label>
        <input
          type="text"
          id="channel"
          {...register("channel", {
            required: "channel is required",
          })}
        />

        <button>Submit</button>
      </form>
      <DevTool control={control} />
    </div>
  );
}

export default YoutubeForm;
