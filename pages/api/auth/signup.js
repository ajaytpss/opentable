import { dbConnection } from "@/lib/mongodb";
import bcrypt from "bcrypt";
import validator from "validator";
import jwt from "jsonwebtoken";

export default async function handler(req, res) {
  const data = req.body;
  let errors = [];
  if (req.method === "POST") {
    const validationSchema = [
      {
        valid: validator.isLength(data.User_Name, {
          min: 1,
          max: 20,
        }),
        errorMessage: "Name is invalid!",
      },
      {
        valid: validator.isEmail(data.User_Email),
        errorMessage: "Email is invalid!",
      },
      {
        valid: validator.isStrongPassword(data.User_Password),
        errorMessage: "Password isn't strong!",
      },
    ];

    validationSchema.forEach((check) => {
      if (!check.valid) {
        errors.push(check.errorMessage);
      }
    });

    if (errors.length)
      return res.status(400).json({ status: 400, message: errors[0] });

    const db = await dbConnection("public_users");
    const findUser = await db.findOne({ User_Email: data.User_Email });

    if (findUser) {
      return res
        .status(400)
        .json({ status: 400, message: "Email Already Exist!" });
    }

    const hashPassword = await bcrypt.hash(data.User_Password, 10);

    data.User_Password = hashPassword;

    const result = await db.insertOne(data);

    const userEmail = data.User_Email;
    const token = jwt.sign({ userEmail }, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });

    return res.status(200).json({
      status: 200,
      message: `Hello ${data.User_Name}, Logged in Successfully`,
      accessToken: token,
    });
  }
}
