import { createSlice } from "@reduxjs/toolkit";

const initialValue = [
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

export const listDataSLice = createSlice({
  name: "pekerjaan",
  initialState: {
    pekerjaan: initialValue,
  },
  reducers: {
    hapusPekerjaan: (state, action) => {
      state.pekerjaan = state.pekerjaan.filter((item) => {
        return item.id !== action.payload;
      });
    },
    tambahPekerjaan: (state, action) => {
      const newPekerjaan = {
        id: Math.floor(Math.random() * 100) + 1,
        ...action.payload,
      };
      state.pekerjaan = [...state.pekerjaan, newPekerjaan];
    },
  },
});

export const { hapusPekerjaan, tambahPekerjaan } = listDataSLice.actions;
export default listDataSLice.reducer;
