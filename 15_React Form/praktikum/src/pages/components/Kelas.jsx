import React from "react";

const Kelas = () => {
  return (
    <div>
      <p>Kelas yang dipilih:</p>
      <select name="kelas" id="kelas">
        <option value="#">Pilih salah satu program</option>
        <option value="golang">Coding Backend with Golang</option>
        <option value="react">Coding Frontend with ReactJS</option>
        <option value="fullstack">Fullstack Developer</option>
      </select>
    </div>
  );
};

export default Kelas;
