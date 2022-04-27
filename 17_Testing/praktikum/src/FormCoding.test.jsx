import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import FormCoding from "./FormCoding";

describe("FormCoding", () => {
  test("renders Form Page component", () => {
    render(<FormCoding />);
    // screen.debug();
    expect(
      screen.getByText("Pendaftaran Peserta Coding Bootcamp")
    ).toBeInTheDocument();
    expect(screen.getByLabelText(/Nama Lengkap/)).toBeInTheDocument();
  });

  test("input text for nama and email", () => {
    render(<FormCoding />);
    fireEvent.input(
      screen.getByRole("textbox"),
      { name: /nama/ },
      { target: { value: "Ucok" } }
    );
    // screen.debug();
    expect(
      screen.getAllByText("Pendaftaran Peserta Coding Bootcamp")
    ).toBeInTheDocument();
    expect(screen.getByLabelText(/Nama Lengkap/)).toHaveValue("Ucok");
  });
  test("input text for email with number", () => {});
  test("submit button", () => {});
});

export default FormCoding.test;
