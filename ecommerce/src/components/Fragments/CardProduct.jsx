import Button from "../Elements/Button";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/slices/cartSlice";

// *nested component sampai akhir
const CardProduct = (props) => {
  const { children } = props;
  return <div>{children}</div>;
};

// * dynamic routing
const Header = (props) => {
  const { image, id } = props;
  return (
    <Link to={`/product/${id}`}>
      <img src={image} alt="product" className="w-48 h-48" />
    </Link>
  );
};

const Body = (props) => {
  const { children, title } = props;
  return (
    <div>
      <h5>{title}</h5>
      <p>{children}</p>
    </div>
  );
};

const Footer = (props) => {
  const { price, id } = props;
  // *menambah data baru
  const dispatch = useDispatch(); // * react redux
  return (
    <div>
      <span>Rp {price.toLocaleString("id-ID", { styles: "currency", currency: "IDR" })}</span>
      {/* react redux */}
      <Button onClick={() => dispatch(addToCart({ id, qty: 1 }))}>Add To Cart</Button>
    </div>
  );
};

CardProduct.Header = Header;
CardProduct.Body = Body;
CardProduct.Footer = Footer;

export default CardProduct;
