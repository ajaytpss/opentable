import RestaurantNav from "./components/RestaurantNav";
import Title from "./components/Title";
import Rating from "./components/Rating";
import Description from "./components/Description";
import Images from "./components/Images";
import ReservationCard from "./components/ReservationCard";
import axios from "axios";
import { baseUrl } from "@/lib/config";

export const metadata = {
  title: "Restaurant",
  description: "Generated by create next app",
};

export async function resData(url) {
  const res = await axios.get(`${baseUrl}/api/restaurant?url=${url}`);
  if (res.data.status === 200) {
    return res.data.data;
  } else {
    throw Error(res.data.message);
  }
}

export default async function RestaurantDetails(params) {
  const data = await resData(params.params.slug);
  return (
    <>
      <div className="bg-white w-[70%] rounded p-3 shadow">
        <RestaurantNav slug={params.params.slug} />
        <Title title={data.name} />
        <Rating />
        <Description description={data.description} />
        <Images images={data.images} />
      </div>
      <div className="w-[27%] relative text-reg">
        <ReservationCard />
      </div>
    </>
  );
}
