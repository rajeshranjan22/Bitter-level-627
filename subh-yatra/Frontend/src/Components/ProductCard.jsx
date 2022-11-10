import ImageSlider from "./ImageSlider";
import { MdPool, MdHotTub } from "react-icons/md";
import { Link } from "react-router-dom";

const ProductCard = ({
  _id,
  title,
  city,
  amenities,
  images,
  price,
  rating,
  reviews,
  rooms,
}) => {
  return (
    <div className="w-full flex justify-evenly gap-x-3 bg-white  rounded-lg shadow-md">
      <div>
        <ImageSlider data={images} w="240px" h="180px" borderRadius="10px" />
      </div>
      {/* Link route to single pages */}
      <Link to={`/product/${_id}`}>
        <div className="w-full flex justify-start  py-2 lg:w-fit  ">
          <div className="lg:w-80 md:w-70">
            <h3 className="text-xl font-semibold  lg:w-72 md:w-56">{title}</h3>
            <h1 className="text-sm mb-1">{city}</h1>
            {/* logo */}
            <div className="flex gap-x-3">
              {amenities.Pool && (
                <div className="flex gap-x-1">
                  <MdPool />
                  <h1 className="text-sm text-graylight">Pool</h1>
                </div>
              )}
              {amenities.Spa && (
                <div className="flex gap-x-1">
                  <MdHotTub />
                  <h1 className="text-sm text-graylight">HotTub</h1>
                </div>
              )}
            </div>
            <div className="hidden md:block">
              <div className="mt-6 ">
                <h3 className="text-sm text-green font-light">
                  Fully refundable
                </h3>
                <h3 className="text-sm text-green font-light">
                  Reserve now,pay later
                </h3>
              </div>
              <div className="flex gap-1 mt-1">
                <h1 className="text-md font-bold">{rating}/5</h1>
                <h1 className="text-md">Wonderful ({reviews} reviews)</h1>
              </div>
            </div>
          </div>
          {/* Price */}

          <div className="w-40 relative text-right  ">
            <div className="w-fit  absolute bottom-0 right-3">
              <p className="w-32  text-center text-white bg-darkgreen rounded-2xl text-xs px-1 py-1 font-semibold">
                We have 5 left at
              </p>
              <p className="text-2xl font-bold">${rooms[0].price}</p>
              <p className="text-sm">${+price + (28 % +price)} total</p>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ProductCard;
