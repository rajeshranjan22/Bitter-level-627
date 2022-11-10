import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useLocation, useSearchParams } from "react-router-dom";
import Advt from "../Components/Advt";
import Filter from "../Components/Filter";
import SearchBar from "../Components/SearchBar";
import { GetData } from "../Redux/App-reducer/action";
import ProductSection from "./ProductSection";
import advt from "../Assets/Advt/advt.jpg";
import advt1 from "../Assets/Advt/advt1.jpg";
import Advt1 from "../Components/Advt1";
import Navbar from "../Components/Navbar";
const city = JSON.parse(localStorage.getItem("city"));
const Product = () => {
  const dispatch = useDispatch();
  const [searchParams, setSearchparam] = useSearchParams();
  const location = useLocation();

  useEffect(() => {
    const city = searchParams.get("city");
    const sortBy = searchParams.get("SortBy");
    const amenities = searchParams.getAll("amenities");
    const queryParams = {
      params: {
        city: city,
        sortBy: sortBy && "price",
        sortOrder: sortBy,
      },
    };
    dispatch(GetData(queryParams));
  }, [location.search, city]);

  return (
    <div className="min-w-full bg-background min-h-screen overflow-hidden">
      <Navbar />
      <div className="w-10/12 flex m-auto pt-4 justify-evenly pb-20">
        <div>
          <SearchBar />
          <div className="flex  m-auto mt-6 gap-x-6 ">
            <div className="hidden md:block">
              <Filter />
            </div>
            <div>
              <ProductSection />
            </div>
          </div>
        </div>
        <div className="gap-y-10 ml-5 hidden lg:block">
          <Advt src={advt} />
          <Advt1 src={advt1} />
        </div>
      </div>
    </div>
  );
};

export default Product;
