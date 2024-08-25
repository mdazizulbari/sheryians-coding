import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { asyncgetproducts } from "../store/actions/productActions";

const Products = () => {
  const dispatch = useDispatch();
  const { products } = useSelector((state) => state.productReducer);
  // console.log(products);

  useEffect(() => {
    dispatch(asyncgetproducts());
    // dispatch is used to call actions
  }, []);

  return (
    <div className="container m-auto p-10 mt-5 bg-red-100">
      <h1 className="text-2xl font-bold text-red-900">Product List</h1>
      <ul>
        {products.map((product, index) => {
          return (
            <li key={product.id}>
              <h1>
                {product.title}
              </h1>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
export default Products;
