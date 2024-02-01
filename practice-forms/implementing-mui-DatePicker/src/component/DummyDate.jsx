import React from "react";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

const schema = yup.object().shape({
  dob: yup.date(),
  name: yup.string().required(),
});

export default function DummyDate() {
  const { register, handleSubmit, setValue } = useForm({
    resolver: yupResolver(schema),
  });

  const handleFormSubmission = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(handleFormSubmission)}>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DesktopDatePicker
          disableFuture
          {...register("dob")}
          onChange={(e) => {
            setValue("dob", e);
          }}
        />
      </LocalizationProvider>
      <input type="text" {...register("name")} />
      <button type="submit">Submit</button>
    </form>
  );
}
