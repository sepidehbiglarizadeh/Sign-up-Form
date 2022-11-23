import Input from "../Common/Input";

const SignUpForm = () => {
    return ( 
        <form>
            <Input name="name" label="Name"/>
            <Input name="email" label="Email" type="email"/>
            <Input name="phoneNumber" label="Phone Number"/>
            <Input name="password" label="Password" type="password"/>
            <Input name="passwordConfirmation" label="Password Confirmation" type="password"/>
        </form>
     );
}
 
export default SignUpForm;