import { useEffect } from "react";

const useDebouce = (callback, delay) => {
  useEffect(() => {
    let debouceid = setTimeout(() => {
      callback();
    }, delay);
    return () => {
      clearTimeout(debouceid);
    };
  }, [callback, delay]);
};

export default useDebouce;
