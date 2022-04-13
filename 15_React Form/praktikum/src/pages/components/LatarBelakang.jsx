import React from "react";

const LatarBelakang = () => {
  return (
    <div>
      <p>LatarBelakang : </p>
      <input type="radio" id="it" name="it" value="it" />
      <label style={{ marginRight: "10px" }} for="it">
        IT
      </label>
      <input type="radio" id="nonit" name="nonit" value="nonit" />
      <label for="nonit">Non IT</label>
    </div>
  );
};

export default LatarBelakang;
