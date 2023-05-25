import { NextApiRequest, NextApiResponse } from "next";
import { dbConnection } from "@/lib/mongodb";

export default async function handler(req:NextApiRequest, res:NextApiResponse) {
  const db = await dbConnection("restaurnats");
  if(req.method == "GET"){
    const result = await db.findOne({slug: req.query.url});
    res.status(200).json({status: 200, data: result});
  }
  
}