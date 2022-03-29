import { Component } from "react";
import { v4 as uuidv4 } from "uuid";
import ListPekerjaan from "./ListPekerjaan";
import TambahPekerjaan from "./TambahPekerjaan";

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
          title: "mengerjakan Assigment",
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
        <h1 style={{ textAlign: "center" }}>Todos</h1>
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
