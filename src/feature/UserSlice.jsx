import { createSlice } from "@reduxjs/toolkit";
const initialState = [
  {
    Name: "Rudoff",
    Age: "23",
    Course: "CCNA",
    Batch: "Febuary",
    id: "1",
  },

  {
    Name: "Manso",
    Age: "27",
    Course: "Front End",
    Batch: "January",
    id: "2",
  },
  {
    Name: "Donal",
    Age: "22",
    Course: "back End",
    Batch: "July",
    id: "3",
  },

  {
    Name: "Vandame",
    Age: "20",
    Course: "Cloud Computing",
    Batch: "June",
    id: "4",
  },
  {
    Name: "Tonso",
    Age: "28",
    Course: "data Analyst",
    Batch: "december",
    id: "5",
  },
];

export const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    AddUser(state, action) {
      state.push(action.payload);
    },
    addStudent(state, action) {
      state.push(action.payload);
    },
    UpdateUser(state, action) {
      // const { id } = action.payload;
      let data = [...state],
        index = data.find((r) => r.id === action.payload.id); //finding which index should get the udpate
      if (index > -1) {
        //
        data[index] = action.payload;
        return { ...state, data };
        // ES5 --> return Object.assign({},state,DataArray: data)
      } else return state;
    },
  },
});
export const { AddUser, UpdateUser, addStudent } = userSlice.actions;
export default userSlice.reducer;
