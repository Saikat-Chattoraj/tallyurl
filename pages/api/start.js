// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import initDB from "../../src/utils/initDB"
initDB()
export default function startAPI(req, res) {
  res.status(200).json('Started...')
}
