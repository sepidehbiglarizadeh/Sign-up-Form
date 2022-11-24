import axios from "axios";
import { useFormik } from "formik";
import { useEffect, useState } from "react";
import addNewUserService from "../../services/addNewUserService";
import getOneUserService from "../../services/getOneUserService";
import CheckBox from "../Common/CheckBox";
import Input from "../Common/Input";
import RadioInput from "../Common/RadioInput";
import Select from "../Common/Select";
import TermsCheckBox from "../Common/TermsCheckBox";

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

  console.log(formik.values);

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
      <button className="submitBtn">Submit</button>
    </form>
  );
};

export default SignUpForm;
