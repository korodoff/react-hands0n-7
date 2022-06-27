import React, { createContext, useState } from "react";

export const data = createContext();

const Memory = (props) => {
  const [students, setStudents] = useState([
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
  ]);
  return (
    <div>
      <data.Provider value={[students, setStudents]}>
        {props.children}
      </data.Provider>
    </div>
  );
};

export default Memory;
