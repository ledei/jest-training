import { fetchCollection } from "../mongodb/mongoClient.js";

export function createProfile(username, details) {
  const critera = { user: username };
  const data = {
    $set: {
      debitCard: details.debitCard,
      address: details.address,
      balance: details.balance,
    },
  };
  return fetchCollection("profileDetails").updateOne(critera, data, {
    upsert: true,
  });
}

export async function fetchProfileDetails(username) {
  const critera = { user: username };
  const result = await fetchCollection("profileDetails").findOne(critera);
  return result;
}

export function updateProfileDebitCard(username, card) {
  const critera = { user: username };
  const data = { $set: { debitCard: card } };
  return fetchCollection("profileDetails").updateOne(critera, data);
}

export function updateProfileAddress(username, address) {
  const critera = { user: username };
  const data = { $set: { address: address } };
  return fetchCollection("profileDetails").updateOne(critera, data);
}

export function updateProfileBalance(username, amount) {
  const critera = { user: username };
  const data = { $inc: { balance: amount } };
  return fetchCollection("profileDetails").updateOne(critera, data);
}
