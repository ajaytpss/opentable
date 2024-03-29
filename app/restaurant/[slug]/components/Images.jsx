const Images = (props) => {
  return (
    <div>
      <h1 className="font-bold text-3xl mt-10 mb-7 border-b pb-5">5 photos</h1>
      <div className="flex flex-wrap">
        {props.images.map((val, index) => (
          <img
            key={index}
            className="w-56 h-44 mr-1 mb-1"
            src={val}
            alt="images"
          />
        ))}
      </div>
    </div>
  );
};

export default Images;
