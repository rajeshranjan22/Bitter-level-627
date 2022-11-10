const Advt = ({ src }) => {
  return (
    <div className="min-w-full w-40 hidden lg:block mt-6 ">
      <img className="w-40" src={src} alt="advertisement" />
    </div>
  );
};

export default Advt;
