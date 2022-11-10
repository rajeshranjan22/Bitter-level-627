import React, { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";

const Map = ({ width = "240px", height = "220px", city }) => {
  const [searchparam] = useSearchParams();
  const mycity = searchparam.get("city");
  const [_city, setCity] = useState(mycity || "");

  useEffect(() => {
    setCity(mycity);
  }, [mycity]);

  return (
    <div className="w-fit pb-4 m-auto  text-center bg-white border-1 border-solid border-black  rounded-2xl">
      <iframe
        style={{ borderRadius: "10px" }}
        width={width}
        height={height}
        src={`https://maps.google.com/maps?q=${
          city || _city
        }&t=&z=11&ie=UTF8&iwloc=&output=embed`}
        scrolling="no"
      ></iframe>
      <Link to="">
        <h3 className="text-sm font-semibold text-blue mt-4 hover:underline">
          View in map
        </h3>
      </Link>
    </div>
  );
};

export default Map;
