import React, { useContext } from "react";
import { store } from "./detail";
import { Link } from "react-router-dom";
import { useState } from "react";
import "./add.css";
 
 

const AddStudent = () => {
  const [Name, setName] = useState("");

  const [Class, setClass] = useState("");

 const [Score, setScore] = useState("");

  const [student, setStudent] = useContext(store);

  const ChangeHandler1 = (e) => {
    setName(e.target.value);
  };
  const ChangeHandler2 = (e) => {
    setClass(e.target.value);
  };
  
  const ChangeHandler4 = (e) => {
    setScore(e.target.value);
  };

  const threshold = 31;
  const threshold2 = 75;
  const SubmitHandler = () => {
    setStudent([
      ...student,
      {
        Name: Name,
        Class: Class,
        Score: Score,
        Result: Score >= threshold? <span className="pass">Passed</span>: <span className="fail">Failed</span>,
        Grade: Score >= threshold2?<span className="exe">Excellent</span> :Score>=threshold?<span className="ave">Average</span>: <span className="po">Poor</span>,
        id: student.length + 1,
      },
    ]);
  };
  return (
    <div>
      <div className="class10">
        <div style ={{lineHeight:"14px", textAlign:"left" }}><h2>Add Student</h2></div>
        <label><b>Name:</b></label><br></br>
        <input
          id="name"
          className="class11"
          type="text"
          name="name"
          value={Name}
          onChange={ChangeHandler1}
        />
        <br></br>
        <br></br>
        <label><b>Class:</b></label><br></br>
        <input
          id="Class"
          className="class11"
          type="text"
          name="Class"
          value={Class}
          onChange={ChangeHandler2}
        /><div style ={{lineHeight:"14px", textAlign:"left",marginLeft:"4px"}}><i>please input value from 1 to 12</i></div>
         
       <br></br>
        <label ><b>Score:</b></label><br></br>
        <input
          id="Score"
          className="class11"
          type="text"
          name="Score"
          value={Score}
          onChange={ChangeHandler4}
        />
        <div style ={{lineHeight:"14px", textAlign:"left",marginLeft:"4px"}}><i>please input Score from 1 to 100</i></div>

      </div>
      <br></br>
      <br></br>
       
      <div className="class13">
      <Link to="/student" className="class12">
          Cancel
        </Link> &nbsp;
        <Link to="/student" className="class12" onClick={SubmitHandler}>
          Submit
        </Link>
          
        
      </div>
    </div>
  );
};
export default AddStudent;
