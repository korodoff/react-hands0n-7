import React, { useContext } from "react";
import { data } from "./memory";
import { Link } from "react-router-dom";
import { useState } from "react";
import "./style.css";
const AddStudent = () => {
  const [Name, setName] = useState("");

  const [Age, setAge] = useState("");

  const [Course, setCourse] = useState("");

  const [Batch, setBatch] = useState("");

  const [students, setStudents] = useContext(data);

  const ChangeHandlerName = (e) => {
    setName(e.target.value);
  };
  const ChangeHandlerAge = (e) => {
    setAge(e.target.value);
  };
  const ChangeHandlerCourse = (e) => {
    setCourse(e.target.value);
  };
  const ChangeHandlerStudent = (e) => {
    setBatch(e.target.value);
  };

  const SubmitHandler = () => {
    setStudents([
      ...students,
      {
        Name: Name,
        Age: Age,
        Course: Course,
        Batch: Batch,
        id: new Date().getTime().toString(),
      },
    ]);
  };
  return (
    <div>
      <div className="addBox">
        <label className="input">Name:</label>
        <input
          className="input"
          id="name"
          type="text"
          name="name"
          placeholder="Name"
          value={Name}
          onChange={ChangeHandlerName}
        />
        <label className="input">Age:</label>
        <input
          className="input"
          id="age"
          type="text"
          name="age"
          placeholder="Age"
          value={Age}
          onChange={ChangeHandlerAge}
        />{" "}
        <br />
        <br />
        <label className="input">Course:</label>
        <input
          className="input"
          id="course"
          type="text"
          name="course"
          placeholder="Course"
          value={Course}
          onChange={ChangeHandlerCourse}
        />
        <label className="input">Batch:</label>
        <input
          className="input"
          id="batch"
          type="text"
          name="batch"
          placeholder="Batch"
          value={Batch}
          onChange={ChangeHandlerStudent}
        />
      </div>

      <div className="button">
        <Link className="task" to="/student">
          Cancel
        </Link>
        <Link className="task" to="/student" onClick={SubmitHandler}>
          Submit
        </Link>
      </div>
    </div>
  );
};

export default AddStudent;
