import { useEffect, useState } from "react";
import userService from "../../service/userService";
import UserFieldComponent from "./UserFieldComponet";

export function BillingProfileComponet() {
  const [updateField, setUpdateField] = useState("");
  const [debitCard, setDebitCard] = useState("");
  const [address, setAddress] = useState("");
  const [balance, setBalance] = useState(0);

  useEffect(() => {
    const fetchBillingDetails = async () => {
      let [balance, debitCard, address] = await Promise.all([
        userService.getBalance(),
        userService.getDebitCard(),
        userService.getAddress(),
      ]);

      setBalance(balance.balance);
      setDebitCard(debitCard.debitCard);
      setAddress(address.address);
    };
    fetchBillingDetails();
  }, [debitCard, address, balance]);

  async function inputFieldHandler(e) {
    if (e.key === "Enter") {
      if (updateField.address) {
        await userService.patchAddress(updateField);
        setAddress(updateField.address);
      } else if (updateField.card) {
        await userService.patchDebitCard(updateField);
        setDebitCard(updateField.card);
      } else return false;
    }
  }

  return (
    <>
      <h2>Billing profile</h2>
      <UserFieldComponent
        fieldName={"Debit_card"}
        fieldValue={debitCard}
        setUpdateField={setUpdateField}
        handleKeyDown={inputFieldHandler}
      />
      <UserFieldComponent
        fieldName={"Address"}
        fieldValue={address}
        setUpdateField={setUpdateField}
        handleKeyDown={inputFieldHandler}
      />
      <p>Balance: {balance}</p>

      <button>Add balance</button>
    </>
  );
}
