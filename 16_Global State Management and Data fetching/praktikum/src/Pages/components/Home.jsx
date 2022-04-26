// import { useState } from "react";
import ListPekerjaan from "./ListPekerjaan";
import TambahPekerjaan from "./TambahPekerjaan";
import "./Todo.module.css";

function Home() {
  return (
    <>
      <h1>Todos</h1>
      <TambahPekerjaan />
      <ListPekerjaan />
    </>
  );
}

export default Home;
