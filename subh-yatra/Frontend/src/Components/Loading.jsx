import loadingDiv from "../Assets/Advt/loadingDiv.JPG";
let data = new Array(10).fill(0);
const Loading = () => {
  return (
    <div className="w-full flex flex-col gap-y-6">
      {data.map((_, i) => (
        <div className="w-full rounded-lg" key={i}>
          <img
            src={loadingDiv}
            style={{ width: "720px", height: "180px", borderRadius: "10px" }}
            alt="Loading"
          />
        </div>
      ))}
    </div>
  );
};

export default Loading;
