import { render } from "@testing-library/react";
import MenuNavComponent from "./menuNavComponent";
import React from "react";

test("Som en användare vill jag kunna se alla menykategorier som går att beställa så jag får en överblick vad jag kan beställa och välja mellan.", () => {
  render(<MenuNavComponent />);

  const bbqs = screen.getByText("Username");
  const burgers = screen.getByText("Username");
  const steaks = screen.getByText("Username");
  const drinks = screen.getByText("Username");

  expect(bbqs).toBeInTheDocument();
  expect(burgers).toBeInTheDocument();
  expect(steaks).toBeInTheDocument();
  expect(drinks).toBeInTheDocument();
});
