import { useState } from "react";
import "./Todo.module.css";

function TambahPekerjaan(props) {
  const [data, setData] = useState({
    id: Math.floor(Math.random() * 100) + 1,
    title: "",
    completed: true,
  });
  const onChange = (e) => {
    setData({
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formIsNotEmpty = data.title;
    if (formIsNotEmpty) {
      const newData = {
        id: Math.floor(Math.random() * 100) + 1,
        title: data.title,
        completed: true,
      };
      props.tambahPekerjaan(newData);

      this.setState({
        id: Math.floor(Math.random() * 100) + 1,
        title: "",
        completed: true,
      });
    } else {
      alert("mohon isi pekerjaan");
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Masukkan Pekerjaan..."
          value={data.title}
          name="title"
          onChange={onChange}
        />
        <button onClick={handleSubmit}>Submit</button>
      </form>
    </div>
  );
}

export default TambahPekerjaan;
