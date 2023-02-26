import * as Yup from "yup";

export const formSchema = Yup.object().shape({
  name: Yup.string().required("Name is required"),
  email: Yup.string()
    .required("Email is required")
    .email("Enter a valid Email"),
  password: Yup.string()
    .required("password is Required")
    .min(6, "Password must be at least 6 characters")
    .max(20, "Password must not exceed 20 characters"),
  mobileNumber: Yup.string()
    .required("Mobile Number is required")
    .max(10, "mobile number must not exceed 10 characters"),
});
