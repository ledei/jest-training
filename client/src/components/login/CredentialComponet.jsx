import { useEffect, useState } from "react";

export function CredentialComponet({ setUserCredential, typeIs, infoMessage }) {
  const [credential, setCredential] = useState({ username: "", password: "" });

  const handleChange = ({ name, value }) => {
    setCredential({ ...credential, [name]: value });
  };

  useEffect(() => {
    setUserCredential(credential);
  }, [credential, setUserCredential]);

  return (
    <>
      <p>
        <label>Username</label>
        <input
          type="text"
          name="username"
          onChange={(e) => handleChange(e.target)}
        />
      </p>
      <p>
        <label>Password</label>
        <input
          type={typeIs}
          name="password"
          onChange={(e) => handleChange(e.target)}
        />
      </p>
      <p>{infoMessage}</p>
    </>
  );
}
