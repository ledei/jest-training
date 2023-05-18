import { useState } from "react";
import { CredentialComponet } from "./CredentialComponet";
import { RegisterSubmitHandler } from "./RegisterSubmitHandler";
import { FormBtnsComponet } from "./FormBtnsComponet";
import { useNavigate } from "react-router-dom";

export function RegisterComponet() {
  let navigate = useNavigate();
  const [userCredential, setUserCredential] = useState();
  const [infoMessage, setInfoMessage] = useState("");

  return (
    <>
      <form onSubmit={(e) => RegisterSubmitHandler(e, userCredential, setInfoMessage, navigate)}>
        <h2>Sign up</h2>
        <CredentialComponet setUserCredential={setUserCredential} typeIs="text" infoMessage={infoMessage} />
        <FormBtnsComponet submitText="Register" resetText="Cancel" navigateTo="login" navigate={navigate} />
      </form>
    </>
  );
}
