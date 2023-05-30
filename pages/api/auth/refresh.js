import jwt from "jsonwebtoken";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method Not Allowed" });
  }

  const { token } = req.body;

  // Verify and decode the token
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    // Generate a new token with a refreshed expiration time
    const newToken = jwt.sign(
      { email: decoded.email },
      process.env.JWT_SECRET,
      {
        expiresIn: "1h", // Token expiration time
      }
    );

    res.status(200).json({ token: newToken });
  } catch (error) {
    res.status(401).json({ message: "Invalid token" });
  }
}
