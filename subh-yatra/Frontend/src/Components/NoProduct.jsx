import noProduct from "../Assets/Advt/noProduct.png";

const NoProduct = () => {
  return (
    <div className="w-full m-auto">
      <img
        src={noProduct}
        style={{ width: "600px" }}
        alt="No Hotel Available"
      />
    </div>
  );
};

export default NoProduct;
