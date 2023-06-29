import { dbConnection } from "@/lib/mongodb";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const db = await dbConnection("restaurnats");
    const result = await db.find().toArray();
    const keywords = req.query.keywords;
    const filter = result.filter((val) => {
      const name = val.name.toLowerCase();
      return name.includes(keywords.toLowerCase());
    });
    if (filter.length >= 1) {
      return res
        .status(200)
        .json({ status: 200, data: filter, keywords: keywords, results: true });
    }
    return res
      .status(200)
      .json({ status: 200, results: false, message: "No results found!" });
  } else {
    res.status(401).json("Something went wrong!");
  }
}
