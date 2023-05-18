import { fetchCollection } from "../mongodb/mongoClient.js";

export function createUser(username, password) {
  const critera = { username };
  const data = { $setOnInsert: { username, password } };
  return fetchCollection("user").updateOne(critera, data, { upsert: true });
}

export async function fetchUser(username, password) {
  const critera = { username };
  const result = await fetchCollection("user").findOne(critera);
  return result != undefined && result.password == password;
}
