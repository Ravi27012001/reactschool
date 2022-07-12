import React, { useContext } from "react";
import { store } from "./detail";
import { Link, useParams } from "react-router-dom";
import { useState, useEffect } from "react";

const Edit = () => {
  const [name, setName] = useState("");

  const [Class, setClass] = useState("");

  const [score, setScore] = useState("");

  const { id } = useParams();
  const [students, setStudents] = useContext(store);
  const ChangeHandlerName = (e) => {
    setName(e.target.value);
  };
  const ChangeHandlerClass = (e) => {
    setClass(e.target.value);
  };

  const ChangeHandlerScore = (e) => {
    setScore(e.target.value);
  };
  useEffect(() => {
    students.forEach((element) => {
      if (element.id === id) {
        setName(element.Name);
        setClass(element.Class);
         setScore(element.Score);
      }
    });
  }, [id, students]);
  useEffect(() => {
    const currentStudent = students.filter(
      (el) => el.id.toString() === id.toString()
    )[0];
    setName(currentStudent.Name);
    setClass(currentStudent.Class);
    setScore(currentStudent.Score);
  }, [id,students]);

  const threshold = 30;
  const threshold2 = 75;
  const SubmitHandler = () => {
    setStudents((previousV) => {
      const data=previousV.map((store) =>
        store.id.toString() === id.toString()
          ? {
              id: id,
              Name: name,
              Class: Class,
              Result:
                score >= threshold ? (
                  <span className="pass">Passed</span>
                ) : (
                  <span className="fail">Failed</span>
                ),
              Grade:
                score >= threshold2 ? (
                  <span className="exe">Excellent</span>
                ) : score >= threshold ? (
                  <span className="ave">Average</span>
                ) : (
                  <span className="po">Poor</span>
                ),
              Score: score,
            }
          : store
      );
     
      return data;
    });
  };

  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <form style={{ marginTop: "25px" }}>
        <div className="class10">
          <div style={{ lineHeight: "14px", textAlign: "left" }}>
            <h2>Edit Student</h2>
          </div>
          <label>
            <b>Name:</b>
          </label>
          <br></br>
          <input
            id="name"
            className="class11"
            type="text"
            name="name"
            value={name}
            onChange={ChangeHandlerName}
          />
          <br></br>
          <br></br>
          <label>
            <b>Class:</b>
          </label>
          <br></br>
          <input
            id="Class"
            className="class11"
            type="text"
            name="Class"
            value={Class}
            onChange={ChangeHandlerClass}
          />
          <div
            style={{ lineHeight: "14px", textAlign: "left", marginLeft: "4px" }}
          >
            <i>please input value from 1 to 12</i>
          </div>

          <br></br>
          <label>
            <b>Score:</b>
          </label>
          <br></br>
          <input
            id="Score"
            className="class11"
            type="text"
            name="Score"
            value={score}
            onChange={ChangeHandlerScore}
          />
          <div
            style={{ lineHeight: "14px", textAlign: "left", marginLeft: "4px" }}
          >
            <i>please input Score from 1 to 100</i>
          </div>
        </div>
        <div style={{ marginTop: "70px" }}>
          <Link to="/student">
            <button className="class12" style={{ marginLeft: "25px" }}>
              Cancel
            </button>
          </Link>{" "}
          &nbsp;
          <Link to="/student" onClick={SubmitHandler}>
            <button className="class12">Submit</button>
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Edit;
