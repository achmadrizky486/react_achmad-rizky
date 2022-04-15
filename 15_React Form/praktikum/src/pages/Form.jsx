import React from "react";
import LatarBelakang from "./components/LatarBelakang";
import Email from "./components/Email";
import NamaLengkap from "./components/NamaLengkap";
import NoHandphone from "./components/NoHandphone";
import Kelas from "./components/Kelas";
import Foto from "./components/Foto";
import Harapan from "./components/Harapan";
import Button from "./components/Button";

const Form = () => {
  return (
    <form>
      <NamaLengkap />
      <Email />
      <NoHandphone />
      <LatarBelakang />
      <Kelas />
      <Foto />
      <Harapan />
      <Button />
    </form>
  );
};

export default Form;
