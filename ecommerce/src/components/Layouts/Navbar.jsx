// * react redux
import { useEffect, useState } from "react";
import { useLogin } from "../../hooks/useLogin";
import Button from "../Elements/Button";
import { useSelector } from "react-redux";
import { useTotalPrice } from "../../context/TotalPriceContext";
import { useContext } from "react";
import { DarkMode } from "../../context/DarkMode";
const Navbar = () => {
  const username = useLogin(); //* Post Data Api
  const [totalCart, setTotalCart] = useState(0);
  const cart = useSelector((state) => state.cart.data);
  // * usereducer
  const { total } = useTotalPrice();
  const { isDarkMode, setIsDarkMode } = useContext(DarkMode);
  useEffect(() => {
    const sum = cart.reduce((acc, item) => {
      return acc + item.qty;
    }, 0);
    setTotalCart(sum);
  }, [cart]);
  //* Post Data Api
  const handleLogout = () => {
    localStorage.removeItem("token");
  };
  return (
    <div className="relative">
      <div className={`fixed top-0 right-0 left-0 flex items-center justify-center bg-white/30 backdrop-invert backdrop-opacity-10 gap-4 ${isDarkMode && "bg-black/30 backdrop-invert backdrop-opacity-10 text-white"}`}>
        {username}
        <Button onClick={() => setIsDarkMode(!isDarkMode)}>{isDarkMode ? "Light" : "Dark"}</Button>
        <form action="/" onSubmit={handleLogout}>
          <Button type="submit">Logout</Button>
        </form>
        {/* usereducer */}
        Item : {totalCart} | Price : ${total}
      </div>
    </div>
  );
};

export default Navbar;
