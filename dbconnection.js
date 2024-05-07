const { MongoClient, ServerApiVersion } = require("mongodb");
const uri =
  "mongodb+srv://pritsavani06:Admin0011@cluster0.jeooiqy.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});
async function runDBConnection() {
  try {
    await client.connect();
    collection = client.db().collection("Cat");
    console.log("database connected");
  } catch (ex) {
    console.error(ex);
  }
}
runDBConnection();
module.exports = client;
