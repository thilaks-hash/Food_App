const Shimmer = () => {
  return (
    <div className="res-container">
      {Array(10)
        .fill("")
        .map((e, index) => (
          <div key={index} className="shimmer-cards"></div>
        ))}
    </div>
  );
};
export default Shimmer;
