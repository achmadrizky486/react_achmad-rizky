import React from "react";
import Styles from "./Todos.module.css";

const Box = ({ user }) => {
  console.log(user.completed);
  return (
    <>
      <div className={Styles.border}>
        {user.completed ? (
          <p style={{ textDecoration: "line-through" }}>{user.title}</p>
        ) : (
          <p>{user.title}</p>
        )}
      </div>
    </>
  );
};

export default Box;
