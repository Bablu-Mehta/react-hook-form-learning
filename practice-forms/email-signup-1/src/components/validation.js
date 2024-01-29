import * as yup from "yup";

export const schema = yup.object().shape({
  firstName: yup.string().required(),
  lastName: yup.string().required(),
  email: yup.string().email().required(),
  phone: yup.number().required(),
  street: yup.string().required(),
  city: yup.string().required(),
  state: yup.string().required(),
  zip: yup.number().required(),
});
