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

export const documentFormSchema = Yup.object().shape({
  splitInfo: Yup.array().of(
    Yup.object().shape({
      sampleCode: Yup.string().required("sjkfhjkhsf"),
      // isRemoveValidation: Yup.boolean().optional(),
      // sampleCode: Yup.string().when("isRemoveValidation", {
      //   is: (isRemoveValidation) => isRemoveValidation,
      //   then: Yup.string().required("Sample is required"),
      // }),
      // scacCode: Yup.string().when("isRemoveValidation", {
      //   is: (isRemoveValidation) => isRemoveValidation,
      //   then: Yup.string().required("Scac Code is required"),
      // }),
      // invoiceType: Yup.string().optional(),
    })
  ),
});
