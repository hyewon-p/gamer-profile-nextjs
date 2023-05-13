// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

type Data = { name: string }[];

const nameData = [
  { name: "John Doe" },
  { name: "Hyewon" },
  { name: "James" },
  { name: "Lily" },
];

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  res.status(200).json(nameData);
}
