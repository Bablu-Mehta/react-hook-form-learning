import React from "react";
import { useForm } from "react-hook-form";

function YoutubeForm() {
  const form = useForm();
  const { register } = form;
  return (
    <div className="youtubeForm-container">
      <form>
        <label htmlFor="username">Username</label>
        <input type="text" id="username" {...register("username")} />

        <label htmlFor="email">Email</label>
        <input type="text" id="email" {...register("email")} />

        <label htmlFor="channel">Channel Name</label>
        <input type="text" id="channel" {...register("channel")} />

        <button>Submit</button>
      </form>
    </div>
  );
}

export default YoutubeForm;
