import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import {
  fetchProduct,
  loadProducts,
  setLoading,
} from "./store/slices/productSlice";
import { useDispatch } from "react-redux";
import { useEffect } from "react";

const App = () => {
  // dispatch api call
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchProduct());

    // dispatch({
    //   type: "api/makeCall",
    //   payload: {
    //     url: "/products",
    //     method: "GET",
    //     onSuccess: loadProducts.type,
    //     onStart: setLoading.type,
    //   },
    // });

    // const res = fetch("https://fakestoreapi.com/products");
    // res
    //   .then((response) => response.json())
    //   .then((data) => {
    //     // console.log(data);
    //     dispatch(loadProducts(data));
    //   })
    //   .catch((error) => {
    //     console.error("Error fetching products:", error);
    //   });

    // dispatch(() => {
    //   console.log("hello");
    // });
  }, []);

  return (
    <div className="text-4xl text-blue-700">
      {/* <Products /> */}
      <Navbar />
      <Outlet />
    </div>
  );
};

export default App;
