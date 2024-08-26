import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import productSlice, {
  fetchProducts,
  getAllProducts,
} from "../../redux/productSlice/productSlice";
import { FetchAllPosts } from "../../redux/posts/postSlice";

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
