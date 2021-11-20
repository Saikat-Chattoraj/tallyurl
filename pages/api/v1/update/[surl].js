import initDB from "../../../../src/utils/initDB";
import LinkSchema from "../../../../src/models/LinkSchema";

initDB();
export default async function UpdateShortURLs(req, res) {
	// console.log(req)
	const { method } = req;
	console.log(method)
	const { query: { surl, lurl, authHash } } = req
	switch (method) {
		// Update function
		case 'PUT':
			try {
				// we can include upsert as surl is unique and we are adding all values
				const updatedDoc = await LinkSchema.findOneAndUpdate({ shortUrl: surl, userId: authHash }, { userId: authHash, shortUrl: surl, longUrl: lurl }, { new: true, upsert: true }, (err, updatedDoc) => {
					if (err) {
						res.status(500).json({ success: false, message: err })
					}
					res.status(200).json({ success: true, data: updatedDoc })
				})
			}
			catch (err) {
				res.status(404).json(err)
			}
			break;
		// Create funciton
		case 'POST':
			try {
				const createdDoc = await LinkSchema.create({ shortUrl: surl, longUrl: lurl, userId: authHash }, (err, createdDoc) => {
					if (err) {
						res.status(500).json({ success: false, message: err })
					}
					res.status(200).json({ success: true, data: createdDoc })
				})
			} catch (err) {
				res.status(404).json({ err })
			}
			break;
		case 'DELETE':
			try {
				const deletedDoc = await LinkSchema.findOneAndDelete({ shortUrl: surl, userId: authHash }, null, (err, deletedDoc) => {
					if (err) {
						res.status(500).json({ success: false, message: err })
					}
					res.status(200).json({ success: true, data: deletedDoc })
				})
			} catch (err) {
				res.status(404).json({ err })
			}
			break;
		default:
			res.status(400).json({ message: "We only support {POST, PUT and DELETE} requests on this api" });
			break;
	}
}