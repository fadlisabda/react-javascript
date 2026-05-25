import Button from "../Elements/Button";
import InputForm from "../Elements/Input";

const FormRegister = () => {
  return (
    <form action="">
      <InputForm label="Fullname" type="text" name="fullname"/>
      <InputForm label="Email" type="email" name="email" />
      <InputForm label="Password" type="password" name="password" />
      <InputForm label="Confirm Password" type="password" name="confirmPassword" />
      <Button>Register</Button>
    </form>
  );
};

export default FormRegister;
