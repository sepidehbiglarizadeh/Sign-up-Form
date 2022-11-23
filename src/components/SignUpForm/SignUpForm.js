import Input from "../Common/Input";
import RadioInput from "../Common/RadioInput";
import Select from "../Common/Select";

const radioOptions = [
  { label: "Male", value: 0 },
  { label: "Female", value: 1 },
];

const selectOptions = [
  { label: "Select Nationality...", value: "" },
  { label: "Iran", value: "IR" },
  { label: "Germany", value: "GER" },
  { label: "United Kingdom", value: "UK" },
];

const SignUpForm = () => {
  return (
    <form>
      <Input name="name" label="Name" />
      <Input name="email" label="Email" type="email" />
      <Input name="phoneNumber" label="Phone Number" />
      <Input name="password" label="Password" type="password" />
      <Input
        name="passwordConfirmation"
        label="Password Confirmation"
        type="password"
      />
      <RadioInput radioOptions={radioOptions} name="gender" />
     <Select selectOptions={selectOptions} name="nationality" />
    </form>
  );
};

export default SignUpForm;
