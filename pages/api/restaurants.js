import { NextApiRequest, NextApiResponse } from "next";
import { dbConnection } from "@/lib/mongodb";

export default async function handler(req:NextApiRequest, res:NextApiResponse) {
       const db = await dbConnection("restaurnats");
       if(req.method == "GET"){
         const result = await db.find().toArray();
         res.status(200).json({status: 200, data: result});
       }
       if(req.method == "POST"){
        const result = await db.insertMany(req.body);
        res.status(200).json({stats: 200, message: "restaurant posted successfully"})
       }
}