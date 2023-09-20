import { NextApiRequest, NextApiResponse } from "next"

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.json({
    message: "Nextjs API Version 1.0.0",
    status: "success"
  })
}
