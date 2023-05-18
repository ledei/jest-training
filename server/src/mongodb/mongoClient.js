import { MongoClient } from "mongodb";

let db = undefined;
const dbName = "TheKrakenInn";
export function fetchCollection(name) {
  // try {
  //   const result = connectDB().collection(name);
  //   console.log(result);
  //   return result;
  // } catch (err) {
  //   console.log(err);
  //   return err;
  // }

  return connectDB().collection(name);
}

function connectDB() {
  if (db != undefined) {
    return db;
  }

  const url = `mongodb+srv://${process.env.ACCESS_MONGODB_USERNAME}:${process.env.ACCESS_MONGODB_PASSWORD}@thekrakeninn.youdrd2.mongodb.net/?retryWrites=true&w=majority`;
  const client = new MongoClient(url);

  db = client.db(dbName);

  return db;
}
