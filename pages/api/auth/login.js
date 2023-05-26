import { dbConnection } from "@/lib/mongodb";
import bcrypt from "bcrypt";

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

    return res.status(200).json({
      status: 200,
      message: `Hello ${findUser.User_Name}, Logged in Successfully`,
    });
  } else {
    return res.status(200).json("Something went wrong!");
  }
}
