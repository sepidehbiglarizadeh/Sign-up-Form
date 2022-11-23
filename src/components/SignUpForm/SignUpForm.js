import Input from "../Common/Input";
import RadioInput from "../Common/RadioInput";

const radioOptions=[
    {label:"Male",value:0},
    {label:"Female",value:1},
]

const SignUpForm = () => {
    return ( 
        <form>
            <Input name="name" label="Name"/>
            <Input name="email" label="Email" type="email"/>
            <Input name="phoneNumber" label="Phone Number"/>
            <Input name="password" label="Password" type="password"/>
            <Input name="passwordConfirmation" label="Password Confirmation" type="password"/>
            <RadioInput radioOptions={radioOptions} name="gender" />
        </form>
     );
}
 
export default SignUpForm;