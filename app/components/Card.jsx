import Link from "next/link";

const Card = (props) => {
  const data = props.resData;
  return (
    <div className="w-64 h-72 m-3 rounded overflow-hidden border cursor-pointer">
      <Link href={`/restaurant/${data.slug}`}>
        <img
          src={data.main_image}
          alt=""
          className="w-full h-36 object-cover"
        />
        <div className="p-3">
          <h3 className="font-bold text-xl mb-2">{data.name}</h3>
          <div className="flex items-start">
            <div className="flex mb-2">*****</div>
            <p className="ml-2">77 reviews</p>
          </div>
          <div className="flex text-reg font-light capitalize">
            <p className=" mr-3">Mexican</p>
            <p className="mr-3">$$$$</p>
            <p>Toronto</p>
          </div>
          <p className="text-sm mt-1 font-bold">Booked 3 times today</p>
        </div>
      </Link>
    </div>
  );
};

export default Card;
