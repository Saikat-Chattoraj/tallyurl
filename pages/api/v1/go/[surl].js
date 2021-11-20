import initDB from "../../../../src/utils/initDB";
import LinkSchema from "../../../../src/models/LinkSchema";

initDB();

export default async function GetLongURL(req, res) {
	const { method, query: { surl } } = req;

	switch (method) {
		case 'GET':
			const data = await LinkSchema.findOne({ "shortUrl": surl }, (err, data) => {
				if (err) {
					res.status(500).json({ success: false, message: err })
				}
				res.status(200).json({ success: true, data: data })
			})
			break;
		default:
			res.status(400).json({ message: "We only support GET requests on this api" });
			break;
	}
}