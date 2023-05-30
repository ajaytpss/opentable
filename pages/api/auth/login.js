import { dbConnection } from "@/lib/mongodb";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const db = await dbConnection("public_users");
    const findUser = await db.findOne({ User_Email: req.body.User_Email });
    if (!findUser)
      return res.status(400).json({ status: 400, message: "User not found!" });

    const extractPassword = await bcrypt.compare(
      req.body.User_Password,
      findUser.User_Password
    );

    if (!extractPassword)
      return res
        .status(400)
        .json({ status: 400, message: "Email or Password isn't correct!" });

    const userEmail = req.body.User_Email;
    const token = jwt.sign({ userEmail }, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });
    return res.status(200).json({
      status: 200,
      message: `Hello ${findUser.User_Name}, Logged in Successfully`,
      accessToken: token,
    });
  } else {
    return res.status(200).json("Something went wrong!");
  }
}
