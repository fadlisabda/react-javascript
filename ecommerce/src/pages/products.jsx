import CardProduct from "../components/Fragments/CardProduct";
import { Fragment, useState } from "react";
import { useEffect } from "react";
import { getProducts } from "../services/product.service";
import { useLogin } from "../hooks/useLogin";
import TableCart from "../components/Fragments/TableCart";
import Navbar from "../components/Layouts/Navbar";
import { useContext } from "react";
import { DarkMode } from "../context/DarkMode";

const ProductsPage = () => {
  const { isDarkMode } = useContext(DarkMode);
  const [products, setProducts] = useState([]); //* Get Data Api
  useLogin(); //* Post Data Api

  //* Get Data Api
  useEffect(() => {
    getProducts((data) => {
      setProducts(data);
    });
  }, []);

  return (
    <Fragment>
      <Navbar />
      <div className={`@container grid grid-cols-1 p-4 @md:p-6 @lg:p-8 lg:grid-cols-4 ${isDarkMode && "bg-slate-900 text-white"}`}>
        <div className="col-span-1 lg:col-span-3">
          {/* nested component */}
          {products.length > 0 &&
            products.map((product) => (
              <CardProduct key={product.id}>
                <CardProduct.Header image={product.image} id={product.id}></CardProduct.Header>
                <CardProduct.Body title={product.title}>{product.description}</CardProduct.Body>
                <CardProduct.Footer price={product.price} id={product.id}></CardProduct.Footer>
              </CardProduct>
            ))}
        </div>
        <div className="lg:col-span-1">
          <h1>Cart</h1>
          <TableCart products={products} />
        </div>
      </div>
    </Fragment>
  );
};

export default ProductsPage;
