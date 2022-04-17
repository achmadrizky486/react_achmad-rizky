import { useState } from "react";
import ListPekerjaan from "./ListPekerjaan";
import TambahPekerjaan from "./TambahPekerjaan";
import "./Todo.module.css";

const datanya = [
  {
    id: 1,
    title: "Mengerjakan Exercise",
    completed: true,
  },
  {
    id: 2,
    title: "Mengerjakan Assigment",
    completed: false,
  },
];

function Home() {
  const [data, setData] = useState(datanya);

  const hapusPekerjaan = (id) => {
    setData((oldData) =>
      oldData.filter((item) => {
        return item.id !== id;
      })
    );
  };
  const tambahPekerjaan = (newData) => {
    const newPekerjaan = {
      id: 0,
      ...newData,
    };
    setData((oldData) => [...oldData, newPekerjaan]);
  };
  return (
    <>
      <h1>Todos</h1>
      <TambahPekerjaan tambahPekerjaan={tambahPekerjaan} />
      <ListPekerjaan data={data} hapusPekerjaan={hapusPekerjaan} />
    </>
  );
}

export default Home;
