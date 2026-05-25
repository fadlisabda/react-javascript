// * dynamic routing
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { getDetailProduct } from "../services/product.service";
import { useState } from "react";

const DetailProductPage = () => {
  const { id } = useParams();
  const [product, setProduct] = useState({});
  useEffect(() => {
    getDetailProduct(id, (data) => {
      setProduct(data);
    });
  }, [id]);
  return (
    <div>
      {Object.keys(product).length > 0 && (
        <div>
          <img src={product.image} className="w-48 h-48" />
          <p>detail : {id}</p>
          <p>price : ${product.price}</p>
          <p>
            review : ${product.rating.rate}/5 ${product.rating.count}
          </p>
        </div>
      )}
    </div>
  );
};

export default DetailProductPage;
