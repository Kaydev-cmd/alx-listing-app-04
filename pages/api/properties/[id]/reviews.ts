import { NextApiRequest, NextApiResponse } from "next";
import { REVIEWS } from "@/constants";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { id } = req.query;

  if (typeof id !== "string") {
    return res.status(400).json({ message: "Invalid Property ID" });
  }

  const propertyReviews = REVIEWS.filter((review) => review.propertyId === id);

  return res.status(200).json(propertyReviews);
}
