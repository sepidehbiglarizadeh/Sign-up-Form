import { useFormik } from "formik";
import { useEffect, useState } from "react";
import addNewUserService from "../../services/addNewUserService";
import getOneUserService from "../../services/getOneUserService";
import CheckBox from "../Common/CheckBox";
import Input from "../Common/Input";
import RadioInput from "../Common/RadioInput";
import Select from "../Common/Select";
import TermsCheckBox from "../Common/TermsCheckBox";
import * as Yup from "yup";

const radioOptions = [
  { label: "Male", value: "0" },
  { label: "Female", value: "1" },
];

const selectOptions = [
  { label: "Select Nationality...", value: "" },
  { label: "Iran", value: "IR" },
  { label: "Germany", value: "GER" },
  { label: "United Kingdom", value: "UK" },
];

const checkBoxOptions = [
  { label: "React.js", value: "React.js" },
  { label: "Vue.js", value: "Vue.js" },
  { label: "Next.js", value: "Next.js" },
];

const initialValues = {
  name: "",
  email: "",
  phoneNumber: "",
  password: "",
  passwordConfirm: "",
  gender: "",
  nationality: "",
  intrests: [],
  terms: false,
};

const validationSchema = Yup.object({
  name: Yup.string()
    .required("Name is Required")
    .min(6, "Name length is not valid"),
  email: Yup.string()
    .email("Invalid email format")
    .required("Email is Required"),
  phoneNumber: Yup.string()
    .required("Phone Number is required")
    .matches(/^[0-9]{11}$/, "Invalid Phone Number")
    .nullable(),
  password: Yup.string()
    .required("Password is required")
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
      "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character"
    ),
  passwordConfirm: Yup.string().oneOf(
    [Yup.ref("password"), null],
    "Passwords must match"
  ),
  gender: Yup.string().required("Select Gender"),
  nationality: Yup.string().required("Select Nationality"),
  intrests: Yup.array().min(1).required("At least select one experties"),
  terms: Yup.boolean()
    .required("Must Accept Terms and Condition")
    .oneOf([true], "Must Accept Terms and Condition"),
});

const SignUpForm = () => {
  const [formValues, setFormValues] = useState(null);

  const onSubmit = async (values) => {
    try {
      await addNewUserService(values);
    } catch (error) {
      console.log(error);
    }
  };

  const formik = useFormik({
    initialValues: formValues || initialValues,
    onSubmit,
    validationSchema,
    validateOnMount: true,
    enableReinitialize: true,
  });

  useEffect(() => {
    const getSavedUserValues = async () => {
      try {
        const { data } = await getOneUserService();
        setFormValues(data);
      } catch (error) {
        console.log(error);
      }
    };
    getSavedUserValues();
  }, []);

  return (
    <form onSubmit={formik.handleSubmit}>
      <Input formik={formik} name="name" label="Name" />
      <Input formik={formik} name="email" label="Email" type="email" />
      <Input formik={formik} name="phoneNumber" label="Phone Number" />
      <Input formik={formik} name="password" label="Password" type="password" />
      <Input
        formik={formik}
        name="passwordConfirm"
        label="Password Confirmation"
        type="password"
      />
      <RadioInput formik={formik} radioOptions={radioOptions} name="gender" />
      <Select
        formik={formik}
        selectOptions={selectOptions}
        name="nationality"
      />
      <CheckBox
        formik={formik}
        checkBoxOptions={checkBoxOptions}
        name="intrests"
      />
      <TermsCheckBox formik={formik} name="terms" />
      <button className={`submitBtn ${formik.isValid ? "" :"disable"}`} disabled={!formik.isValid} >Submit</button>
    </form>
  );
};

export default SignUpForm;
