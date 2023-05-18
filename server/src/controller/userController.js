import {
  createProfile,
  fetchProfileDetails,
  updateProfileAddress,
  updateProfileBalance,
  updateProfileDebitCard,
} from "../service/userService.js";

async function updateDebitCard(req, res) {
  const { card } = req.body;

  await updateProfileDebitCard(req.user.username, card);

  res.sendStatus(201);
}

async function updateAddress(req, res) {
  const { address } = req.body;

  await updateProfileAddress(req.user.username, address);

  res.sendStatus(201);
}

async function updateBalance(req, res) {
  const { amount } = req.body;

  await updateProfileBalance(req.user.username, amount);

  res.sendStatus(201);
}

async function getDebitCard(req, res) {
  const result = await fetchProfileDetails(req.user.username);

  res.send({ debitCard: result.debitCard });
}

async function getAdress(req, res) {
  const result = await fetchProfileDetails(req.user.username);

  res.send({ address: result.address });
}

async function getBalance(req, res) {
  const result = await fetchProfileDetails(req.user.username);

  res.send({ balance: result.balance });
}

export default {
  updateDebitCard,
  updateAddress,
  updateBalance,
  getBalance,
  getDebitCard,
  getAdress,
};
