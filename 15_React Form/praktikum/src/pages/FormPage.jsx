import React, { useRef, useState } from "react";
import "./FormPage.css";

const FormPage = () => {
  const dataInit = {
    nama: "",
    email: "",
    noHandphone: "",
    pendidikan: "",
    kelas: "",
    harapan: "",
  };
  // const errMsgInit = {
  //   nama: "",
  //   email: "",
  //   noHandphone: "",
  // };
  const [data, setData] = useState(dataInit);
  const [errMsg, setErrMsg] = useState("");

  const regexNama = /^[A-Za-z]*$/;
  const regexEmail = /^[a-zA-Z0-9]+@(?:[a-zA-Z0-9]+\.)+[A-Za-z]+$/;
  const regexNoHp = /^([0-9]{11}|[0-9]{12}|[0-9]{13})$/;
  const foto = useRef(null);

  const handleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    if (name === "nama") {
      if (regexNama.test(value)) {
        setErrMsg("");
      } else {
        setErrMsg("Nama harus berupa huruf");
      }
    }

    if (name === "email") {
      if (regexEmail.test(value)) {
        setErrMsg("");
      } else {
        setErrMsg("Email tidak sesuai");
      }
    }

    if (name === "noHandphone") {
      if (regexNoHp.test(value)) {
        setErrMsg("");
      } else {
        setErrMsg("No Hp tidak sesuai");
      }
    }

    setData({
      ...data,
      [name]: value,
    });
    console.log("data", data);
    console.log("file", document.getElementById("foto").value);
  };
  // useEffect(() => {
  //   setFotoVal(1);
  //   console.log("log1", fotoVal.current);
  // });
  const handleSubmit = (e) => {
    if (errMsg !== "") {
      e.preventDefault();
      alert("Data Salah");
    } else if (data.nama === "") {
      alert("Nama Lengkap harus diisi");
    } else if (data.email === "") {
      alert("Email harus diisi");
    } else if (data.noHandphone === "") {
      alert("No Hp harus diisi");
    } else if (data.pendidikan === "") {
      alert("Harap Pilih Latar Belakang Pendidikan");
    } else if (data.kelas === "") {
      alert("Harap Pilih Kelas");
    } else if (document.getElementById("foto").value === "") {
      alert("Harap Upload Foto Surat Kesungguhan");
    } else {
      alert(`Data Pendaftar "${data.nama}" Berhasil Disimpan`);
    }
  };
  const resetData = (e) => {
    e.preventDefault();
    setData(dataInit);
    setErrMsg("");
  };
  return (
    <div>
      <h2>Pendaftaran Peserta Coding Bootcamp</h2>
      <form>
        <label>
          Nama Lengkap :
          <input
            type="text"
            name="nama"
            className="apik"
            onChange={handleInput}
            value={data.nama}
            required
          />
        </label>
        <label>
          Email :
          <input
            type="text"
            name="email"
            className="apik"
            onChange={handleInput}
            value={data.email}
            required
          />
        </label>
        <label>
          No. Handphone :
          <input
            type="text"
            name="noHandphone"
            className="apik"
            onChange={handleInput}
            value={data.noHandphone}
            placeholder="08xxxx maks 13 digit"
            required
          />
        </label>
        <label>
          Latar Belakang Pendidikan :
          <input
            type="radio"
            name="pendidikan"
            value="it"
            onChange={handleInput}
            required
          />
          IT
          <input
            type="radio"
            name="pendidikan"
            value="nonit"
            onChange={handleInput}
          />
          Non IT
        </label>
        <br />
        <label>
          Kelas yang Dipilih:
          <select
            name="kelas"
            id="kelas"
            value={data.kelas}
            onChange={handleInput}
            required
          >
            <option value="">Pilih salah satu program</option>
            <option value="golang">Coding Backend with Golang</option>
            <option value="react">Coding Frontend with ReactJS</option>
            <option value="fullstack">Fullstack Developer</option>
          </select>
        </label>
        <label>
          Foto Surat Kesungguhan :
          <input
            id="foto"
            type="file"
            name="foto"
            className="apik"
            refs={foto}
            required
          />
        </label>
        <label>
          Harapan :
          <textarea
            name="harapan"
            value={data.harapan}
            onChange={handleInput}
          />
        </label>
        <span>{errMsg}</span>
        <div className="button-wrapper">
          <input
            type="submit"
            value="Submit"
            className="submit"
            onClick={handleSubmit}
          />
          <button onClick={resetData}>Reset</button>
        </div>
      </form>
    </div>
  );
};

export default FormPage;
