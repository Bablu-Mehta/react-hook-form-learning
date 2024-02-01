import React from "react";
import dayjs from "dayjs";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";

import { DatePicker } from "@mui/x-date-pickers";
import AdapterDateFns from '@mui/'
const DOB = () => {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DatePicker  />
    </LocalizationProvider>
  );
};

export default DOB;
