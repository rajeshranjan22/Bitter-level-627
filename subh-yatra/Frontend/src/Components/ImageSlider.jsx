import React, { useState } from "react";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";
const ImageSlider = ({ w, h, borderRadius, data }) => {
  const [image, setImage] = useState(0);
  const [count, setCount] = useState(0);

  const handleFunc = (value) => {
    let temp = count % data.length;
    setCount((prev) => Math.abs(prev + value));
    setImage(temp);
    console.log(count, temp);
  };

  return (
    <div className="max-w-xs max-h-xs overflow-hidden flex justify-center relative">
      <div className="flex items-center rounded-full hover:opacity-50 justify-center w-8 h-8 z-10 bg-black opacity-40 absolute top-1/2 hover:cursor-pointer left-1 ">
        <button disabled={count === 0} onClick={() => handleFunc(-1)}>
          <BiChevronLeft size="36px" color="#FFFFFF" />
        </button>
      </div>
      <div className="min-w-max h-full">
        <img
          className="w-80 h-52  object-cover  rounded-tl-lg rounded-bl-lg"
          style={{ borderRadius: "10px" }}
          src={data[image].src}
          alt="img"
        />
      </div>
      <div className="flex items-center rounded-full hover:opacity-50  justify-center w-8 h-8 z-10 bg-black cursor-pointer opacity-40 absolute top-1/2 right-1">
        <button onClick={() => handleFunc(1)}>
          <BiChevronRight size="36px" color="#FFFFFF" />
        </button>
      </div>
    </div>
  );
};

export default ImageSlider;
