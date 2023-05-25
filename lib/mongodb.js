import { MongoClient } from 'mongodb'

if (!process.env.MONGODB_URI) {
  throw new Error('Invalid/Missing environment variable: "MONGODB_URI"')
}

const url:any = process.env.MONGODB_URI;
const client = new MongoClient(url);
const database = "opentable";

export async function dbConnection(collectionName: any) {
  let connection = await client.connect();
  let getDB = connection.db(database);
  return getDB.collection(collectionName);
}