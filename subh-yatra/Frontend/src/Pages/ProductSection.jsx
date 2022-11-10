import { useSelector } from "react-redux";
import Error from "../Components/Error";
import Loading from "../Components/Loading";
import NoProduct from "../Components/NoProduct";
import ProductCard from "../Components/ProductCard";

const ProductSection = () => {
  const { data, isLoading, isError } = useSelector((store) => {
    return {
      data: store.AppReducer.data,
      isLoading: store.AppReducer.isLoading,
      isError: store.AppReducer.isError,
    };
  });
  return (
    <div className="flex shrink flex-col gap-y-7">
      {isLoading && <Loading />}
      {data?.map((item, i) => (
        <ProductCard key={i} {...item} />
      ))}
      {data.length === 0 && <NoProduct />}
      {isError && <Error />}
    </div>
  );
};

export default ProductSection;
