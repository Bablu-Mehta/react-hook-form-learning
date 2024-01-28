import * as yup from "yup";
import YupPassword from "yup-password";
YupPassword(yup);

export const formSchema = yup.object().shape({
  username: yup.string().required("Enter Your Username"),
  email: yup.string().email().required(),
  gender: yup.string().required("Gender is Required to submit this form"),
  password: yup
    .string()
    .min(8, "Password must contain minimum of 8 characters")
    .minLowercase(1, "Password must contain atleast 1 lowercase Alphabet")
    .minUppercase(1, "Password must contain atleast 1 Uppercase Alphabet")
    .minNumbers(1, "Password must contain atleast 1 Number")
    .minSymbols(1, "Password must contain atleast 1 specail character")
    // .matches(
    //   /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]/,
    //   'Password must contain at least 1 uppercase letter, 1 digit, and 1 special character'
    // )
    .required("Enter a Strong Password"),
  conformPassword: yup
    .string()
    .oneOf([yup.ref("password"), null], "The Password did not matach "),
  country: yup.string().required("Country is Required"),
});
