import { useEffect, useState } from "react";

export default function UserFieldComponent({
  fieldName,
  fieldValue,
  setUpdateField,
  handleKeyDown,
}) {
  const [inputValue, setInputValue] = useState("");

  const handleChange = ({ name, value }) => {
    setInputValue({ ...inputValue, [name]: value });
  };

  useEffect(() => {
    setUpdateField(inputValue);
  }, [inputValue, setUpdateField]);

  if (fieldValue === undefined || fieldValue === "") {
    return (
      <p>
        {fieldName}:{" "}
        <input
          type="text"
          name={fieldName == "Address" ? "address" : "card"}
          onChange={(e) => handleChange(e.target)}
          onKeyDown={handleKeyDown}
        />
      </p>
    );
  } else {
    return (
      <p>
        {fieldName}: {fieldValue}
      </p>
    );
  }
}
