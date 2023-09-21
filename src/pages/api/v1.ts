import { NextApiRequest, NextApiResponse } from "next"
import { InitializeDB } from "../../model/book"

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  InitializeDB()

  res.json({
    message: "Nextjs API Version 1.0.0",
    status: "success"
  })
}
