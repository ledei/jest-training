import { db } from "../db.js";

function getBbq(req, res) {
  res.send(db.bbqs);
}
function getBurgers(req, res) {
  res.send(db.burgers);
}
function getDesserts(req, res) {
  res.send(db.desserts);
}
function getSteaks(req, res) {
  res.send(db.steaks);
}
function getDrinks(req, res) {
  res.send(db.drinks);
}

export default { getBbq, getBurgers, getDesserts, getDrinks, getSteaks };
