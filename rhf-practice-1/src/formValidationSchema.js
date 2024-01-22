import * as yup from "yup";

export const formSchema = yup.object().shape({
  username: yup.string().required("Enter Your Username"),
  email: yup.string().email().required(),
  password: yup.string().min(4).max(10).required("Enter a Strong Password"),
  conformPassword: yup
    .string()
    .oneOf([yup.ref("password"), null], "The Password did not matach "),
});
