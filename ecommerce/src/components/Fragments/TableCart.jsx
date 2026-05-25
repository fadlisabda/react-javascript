// * react redux
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { useRef } from "react";
import { useTotalPrice, useTotalPriceDispatch } from "../../context/TotalPriceContext";

const TableCart = (props) => {
  const { products } = props;
  // * ambil data dari store
  const cart = useSelector((state) => state.cart.data);
  // * usereducer
  const dispatch = useTotalPriceDispatch();
  // * usereducer
  const { total } = useTotalPrice();
  useEffect(() => {
    if (products.length > 0 && cart.length > 0) {
      const sum = cart.reduce((acc, item) => {
        const product = products.find((product) => product.id === item.id);
        return acc + product.price * item.qty;
      }, 0);
      // * usereducer kirim aksi/perintah->reducer mengubah state
      dispatch({
        type: "UPDATE",
        payload: {
          total: sum,
        },
      });
      localStorage.setItem("cart", JSON.stringify(cart));
    }
  }, [cart, products]); //* Get Data Api

  // *materi use ref
  const totalPriceRef = useRef(null);
  useEffect(() => {
    if (cart.length > 0) {
      totalPriceRef.current.style.display = "table-row";
    } else {
      totalPriceRef.current.style.display = "none";
    }
  }, [cart]);
  return (
    <table>
      <thead>
        <tr>
          <th>Product</th>
          <th>Price</th>
          <th>Quantity</th>
          <th>Total</th>
        </tr>
      </thead>
      <tbody>
        {products.length > 0 &&
          // materi use state
          cart.map((item) => {
            const product = products.find((product) => product.id === item.id);
            return (
              <tr key={item.id}>
                <td>{product.title}</td>
                <td>{product.price}</td>
                <td>{item.qty}</td>
                <td>{item.qty * product.price}</td>
              </tr>
            );
          })}
        <tr ref={totalPriceRef}>
          {/* materi use ref */}
          <td>Total Price</td>
          {/* usereducer */}
          <td>Rp {total.toLocaleString("id-ID", { styles: "currency", currency: "IDR" })}</td>
        </tr>
      </tbody>
    </table>
  );
};

export default TableCart;
