import { NextApiRequest, NextApiResponse } from "next";
import { dbConnection } from "@/lib/mongodb";

export default async function handler(req, res) {
  const db = await dbConnection("restaurnats");
  if (req.method == "GET") {
    const result = await db.findOne({ slug: req.query.url });
    console.log(result);
    if (result) {
      res.status(200).json({ status: 200, data: result });
    } else {
      res.status(200).json({ status: 404, message: "Something went wrong" });
    }
  }
}
