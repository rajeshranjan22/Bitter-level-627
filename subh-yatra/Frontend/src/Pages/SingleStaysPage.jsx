import { Box } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import SecondNavbar from "../Components/SingleStaysComponents/SecondNavbar";
import "./SingleStay.css";
import advt from "../Assets/Advt/advt.jpg";
import advt1 from "../Assets/Advt/advt1.jpg";
import Advt1 from "../Components/Advt1";
import Advt from "../Components/Advt";
import { GetSingleProduct } from "../Redux/App-reducer/action";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import useTimeout from "use-timeout";

const SingleStaysPage = () => {
  const { _id } = useParams();
  const [message, setMessage] = useState(false);

  useTimeout(() => setMessage(!message), 2000);

  const { data, singleProduct } = useSelector((store) => {
    return {
      data: store.AppReducer.data,
      isLoading: store.AppReducer.isLoading,
      isError: store.AppReducer.isError,
      singleProduct: store.AppReducer.singleProduct,
    };
  });
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(GetSingleProduct(_id));
  }, [_id, data]);

  return (
    <div>
      <Navbar />
      {message ? (
        <div style={{ display: "flex" }}>
          <div style={{ width: "75%", margin: "0 2% 0 5%" }}>
            <Box>
              <SecondNavbar singleProduct={singleProduct} />
            </Box>
          </div>
          <Box mt="4">
            <Advt src={advt} />
            <Advt1 src={advt1} />
          </Box>
        </div>
      ) : (
        ""
      )}
      <Footer />
    </div>
  );
};

export default SingleStaysPage;
