import { Link } from "react-router-dom";
import errorRoute from "../Assets/Advt/errorRoute.gif";
import Navbar from "./Navbar";

const Error404 = () => {
  return (
    <>
      <Navbar />
      <div className="w-full flex  justify-center bg-background  m-auto">
        <div className="relative">
          <img src={errorRoute} alt="" />
          <div className="absolute bottom-9 right-8">
            <Link to="/">
              <button className="w-full px-10  bg-graylight  py-2 rounded-lg text-white hover:bg-blue hover:cursor-pointer">
                Back To Home Page
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Error404;
