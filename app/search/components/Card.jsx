import Link from "next/link";

const Card = (props) => {
  return (
    <div className="border-b flex pb-5">
      <img
        src="https://images.otstatic.com/prod1/49153814/2/medium.jpg"
        alt=""
        className="w-44 rounded"
      />
      <div className="pl-5">
        <h2 className="text-3xl">
          <Link href={`/restaurant/${props.data.slug}`}>{props.data.name}</Link>
        </h2>
        <div className="flex items-start">
          <div className="flex mb-2">*****</div>
          <p className="ml-2 text-sm">Awesome</p>
        </div>
        <div className="mb-9">
          <div className="font-light flex text-reg">
            <p className="mr-4">$$$</p>
            <p className="mr-4">Mexican</p>
            <p className="mr-4">Ottawa</p>
          </div>
        </div>
        <div className="text-red-600">
          <Link href={`/restaurant/${props.data.slug}`}>
            View more information
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Card;
