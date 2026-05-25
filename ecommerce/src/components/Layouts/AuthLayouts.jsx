import { useContext } from "react";
import { Link } from "react-router-dom";
import { DarkMode } from "../../context/DarkMode";
import Button from "../Elements/Button";

const AuthLayout = (props) => {
  const { children, type } = props;
  // *mengambil data
  const { isDarkMode, setIsDarkMode } = useContext(DarkMode);
  {
    console.log(isDarkMode);
  }
  return (
    <div className={`min-h-screen flex flex-col justify-center items-center text-xl md:text-2xl lg:text-4xl ${isDarkMode && "bg-slate-900 text-white"}`}>
      <Button onClick={() => setIsDarkMode(!isDarkMode)}>{isDarkMode ? "Light" : "Dark"}</Button>
      {children}
      <Navigation type={type} />
    </div>
  );
};

// *conditional rendering
const Navigation = ({ type }) => {
  if (type === "login") {
    return (
      <p>
        Dont Have an account?<Link to="/register">Register</Link>
      </p>
    );
  } else {
    return (
      <p>
        Ada Akun?
        <Link to="/">Login</Link>
      </p>
    );
  }
};

export default AuthLayout;
