import { dbConnection } from "@/lib/mongodb";
import jwt from "jsonwebtoken";

export default async function handler(req, res) {
  if (req.method !== "POST")
    return res.status(400).json({ errorMessage: "Bad request!" });

  const bearerToken = req.headers.beareraccesstoken;
  const token = bearerToken.split(" ")[1];

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const db = await dbConnection("public_users");
    const data = await db.findOne({ User_Email: decoded.userEmail });
    delete data.User_Password;
    return res.status(200).json(data);
  } catch (error) {
    return res.status(401).json({ errorMessage: "Unauthorized user" });
  }
}
