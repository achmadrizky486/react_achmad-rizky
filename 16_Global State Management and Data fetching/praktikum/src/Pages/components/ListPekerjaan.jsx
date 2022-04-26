import { useSelector, useDispatch } from "react-redux";
import { hapusPekerjaan } from "../../store/listDataSlice";

const ListPekerjaan = (props) => {
  const todo = useSelector((state) => state.pekerjaan.pekerjaan);
  const dispatch = useDispatch();
  return (
    <div className=".App">
      <ul style={{ listStyle: "none" }}>
        {todo.map((item) => (
          <li>
            {item.title}{" "}
            <button
              key={item.id}
              data={item}
              className="BtnDelete"
              onClick={() => {
                dispatch(hapusPekerjaan(item.id));
              }}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListPekerjaan;
