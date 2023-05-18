import memoryService from "./memoryService";

const buildPostFetchOptions = (body) => ({
  method: "POST",
  body: JSON.stringify(body),
  headers: {
    "Content-Type": "application/json",
    Authorization: "Bearer " + memoryService.getLocalValue("JWT_TOKEN"),
  },
});

const buildPatchFetchOptions = (body) => ({
  method: "PATCH",
  body: JSON.stringify(body),
  headers: {
    "Content-Type": "application/json",
    Authorization: "Bearer " + memoryService.getLocalValue("JWT_TOKEN"),
  },
});

const buildGetFetchOptions = () => ({
  headers: {
    Authorization: "Bearer " + memoryService.getLocalValue("JWT_TOKEN"),
  },
});

const performRequest = async (url, method, body) => {
  let options = undefined;

  if (method === "GET") {
    options = buildGetFetchOptions();
  } else if (method === "POST") {
    options = buildPostFetchOptions(body);
  } else if (method === "PATCH") {
    options = buildPatchFetchOptions(body);
  }

  return await fetch(url, options);
};

async function patchAddress(data) {
  let resp = await performRequest(
    "http://127.0.0.1:3030/user/address",
    "PATCH",
    data
  );

  return await resp.text();
}

async function patchDebitCard(data) {
  let resp = await performRequest(
    "http://127.0.0.1:3030/user/debitcard",
    "PATCH",
    data
  );

  return await resp.text();
}

async function getDebitCard() {
  let resp = await performRequest(
    "http://127.0.0.1:3030/user/debitcard",
    "GET"
  );

  return await resp.json();
}

async function getBalance() {
  let resp = await performRequest("http://127.0.0.1:3030/user/balance", "GET");

  return await resp.json();
}

async function getAddress() {
  let resp = await performRequest("http://127.0.0.1:3030/user/address", "GET");

  return await resp.json();
}

async function getHistory() {
  let resp = await performRequest("http://127.0.0.1:3030/user/history", "GET");

  return await resp.json();
}

function getLocalJWTData() {
  const localJWTToken = memoryService.getLocalValue("JWT_TOKEN");

  return JSON.parse(atob(localJWTToken.split(".")[1]));
}

function getUsername() {
  return getLocalJWTData().username;
}

const userService = {
  getDebitCard,
  getHistory,
  getUsername,
  getBalance,
  getAddress,
  patchAddress,
  patchDebitCard,
};
export default userService;
