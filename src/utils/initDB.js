import mongoose from 'mongoose';

const connection = {};
async function initDB() {
	const MONGODB_CONNECTION_URI = `mongodb+srv://${process.env.MONGODB_USER}:${process.env.MONGODB_PASS}@${process.env.MONGODB_URI}/${process.env.MONGODB_DEFAULT_DB}?retryWrites=true&w=majority`
	if (connection.isConnected) {
		return;
	}
	const db = await mongoose.connect(MONGODB_CONNECTION_URI, {useNewUrlParser: true,useUnifiedTopology: true});
	connection.isConnected = db.connections[0].readyState;
	console.log("connect to MongoDB Database")
}

export default initDB;