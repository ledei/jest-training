import { useState } from "react";
import { CredentialComponet } from "./CredentialComponet";
import { LoginSubmitHandler } from "./LoginSubmitHandler";
import { FormBtnsComponet } from "./FormBtnsComponet";
import { useNavigate } from "react-router-dom";

export function LoginComponet() {
  let navigate = useNavigate();
  const [userCredential, setUserCredential] = useState();
  const [infoMessage, setInfoMessage] = useState("");

  return (
    <>
      <form onSubmit={(e) => LoginSubmitHandler(e, userCredential, setInfoMessage, navigate)}>
        <h2>Login</h2>
        <CredentialComponet setUserCredential={setUserCredential} typeIs="password" infoMessage={infoMessage} />
        <FormBtnsComponet submitText="Login" resetText="Sign up" navigateTo="register" navigate={navigate} />
      </form>
    </>
  );
}
