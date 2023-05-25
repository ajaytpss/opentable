import Header from "./components/Header";
import Card from "./components/Card";
import axios from "axios";

export async function Restaurnats() {
  const siteUrl = "https://opentable-flax.vercel.app";
  // const siteUrl = "http://localhost:3000/";
  const res = await axios.get(`${siteUrl}/api/restaurants`);
  if (res.status === 200) {
    return res.data;
  } else {
    return "Something went wrong!!";
  }
}

export default async function Home() {
  const data = await Restaurnats();

  return (
    <>
      <main>
        <Header />
        <div className="py-3 px-36 mt-10 flex flex-wrap justify-center">
          {data.data.map((val, index) => (
            <Card key={index} resData={val} />
          ))}
        </div>
      </main>
    </>
  );
}
