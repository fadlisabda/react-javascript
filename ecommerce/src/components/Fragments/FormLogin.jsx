import Button from "../Elements/Button";
import InputForm from "../Elements/Input";
import { login } from "../../services/auth.service";
import { useRef } from "react";
import { useEffect } from "react";
import { useState } from "react";

const FormLogin = () => {
  const [loginFailed, setLoginFailed] = useState("");

  const handleLogin = (event) => {
    event.preventDefault();
    //* Post Data Api
    const data = {
      username: event.target.username.value,
      password: event.target.password.value,
    };
    login(data, (status, res) => {
      if (status) {
        localStorage.setItem("token", res);
        window.location.href = "/products";
      } else {
        setLoginFailed(res.response.data);
      }
    });
  };
  // *materi use ref
  const usernameRef = useRef(null);
  useEffect(() => {
    usernameRef.current.focus();
  }, []);
  return (
    <form action="/products" onSubmit={handleLogin}>
      <InputForm label="username" type="text" name="username" ref={usernameRef} />
      {/* materi use ref */}
      <InputForm label="password" type="password" name="password" />
      <Button type="submit">Login</Button>
      {/* Post Data Api */}
      {loginFailed && <p className="text-red-500 mt-5">{loginFailed}</p>}
    </form>
  );
};

export default FormLogin;
