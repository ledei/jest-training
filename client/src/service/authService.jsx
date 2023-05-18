const fetchOptions = async (url, method, data) => {
  const options = {
    method: method,
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
    },
  };

  return await fetch(url, options);
};

async function login(userDetails) {
  return await fetchOptions(
    `http://127.0.0.1:3030/auth/login`,
    "POST",
    userDetails
  );
}

async function register(userDetails) {
  return await fetchOptions(
    `http://127.0.0.1:3030/auth/register`,
    "POST",
    userDetails
  );
}

const authService = { login, register };
export default authService;
