import { Component } from "react";
import ListPekerjaan from "./ListPekerjaan";
import TambahPekerjaan from "./TambahPekerjaan";
import "./Todo.module.css";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
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
      ],
    };
  }
  hapusPekerjaan = (id) => {
    const newlistPekerjaan = this.state.data.filter((item) => item.id !== id);
    this.setState({ data: newlistPekerjaan });
  };
  tambahPekerjaan = (newData) => {
    const newPekerjaan = { id: 0, ...newData };
    this.setState({ data: [...this.state.data, newPekerjaan] });
  };
  render() {
    return (
      <>
        <h1>Todos</h1>
        <TambahPekerjaan tambahPekerjaan={this.tambahPekerjaan} />
        <ListPekerjaan
          data={this.state.data}
          hapusPekerjaan={this.hapusPekerjaan}
        />
      </>
    );
  }
}

export default Home;
