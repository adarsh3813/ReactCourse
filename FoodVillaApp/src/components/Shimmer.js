const Shimmer = () => {
  return (
    <div className="w-full h-full flex flex-wrap">
      {Array(20)
        .fill("")
        .map((e, index) => (
          <div key={index} className="w-72 h-72 m-8 bg-gray-200"></div>
        ))}
    </div>
  );
};

export default Shimmer;
