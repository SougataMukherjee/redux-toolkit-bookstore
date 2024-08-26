import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchProducts,
  getAllProducts,
} from "../../redux/productSlice/productSlice";

const AllProducts = () => {
  let products = useSelector(getAllProducts);
  console.log(products);
  let dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);
  return <div>AllProducts</div>;
};

export default AllProducts;
