import * as yup from "yup";

export const schema = yup.object().shape({
  firstName: yup.string().required("Please Enter Your First Name"),
  lastName: yup.string().required("Please Enter Your Last Name"),
  email: yup
    .string()
    .email("Please Enter Correct Gmail")
    .required("Please Enter Your Gmail"),
  phone: yup
    .string()
    .matches(/^\d+$/, "Mobile number must only contain digits")
    .min(10, "Mobile number must be at least 10 digits")
    .required("Please Enter your Phone Number"),
  street: yup.string().required("Please Enter your Street"),
  city: yup.string().required("PLease Enter your City"),
  state: yup.string().required("PLease Enter your State"),
  zip: yup
    .string()
    .matches(/^\d+$/, "ZipCode must only contain digits")
    .min(5, "ZipCode must be at least 5 digits")
    .max(6, "ZipCode must be at most 6 digits")
    .required("Please Enter your ZipCode"),
  dob: yup.date().typeError("Date is required").nullable(),
});
