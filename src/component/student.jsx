import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { store } from "./detail";
import "./add.css";
import DeleteOutlineTwoToneIcon from '@mui/icons-material/DeleteOutlineTwoTone';
import ModeEditOutlineOutlinedIcon from '@mui/icons-material/ModeEditOutlineOutlined';
const Student = () => {
  // const [student] = useContext(store);
  const [student, setStudent] = useContext(store);

  // console.log(student);
  const DeleteItem =(idd)=>{
    const Updatelist = student.filter((student,indexx)=>{
         return indexx !== idd;
    });
    setStudent(Updatelist);
  }
  return (
    <div>
      <h1 className="class2">Student Details</h1>
      <Link to="/addstudent">
        <button className="class4">
          <span className="pluss">+</span>
          <span className="btnadd">ADD</span>{" "}
        </button>
      </Link>
      <table className="class5">
        <thead>
          <tr>
            <th>No.</th>
            <th>Student Name</th>
            <th>Class</th>
            <th>Result</th>
            <th>Score</th>
            <th>Grade</th>
          </tr>
        </thead>

        <tbody>
          {student.map((student,indexx) => (
            <tr className="row" key={student.id}>
              <td>{student.id}</td>
              <td>{student.Name}</td>
              <td>{student.Class}</td>
              <td>{student.Result}</td>
              <td>{student.Score}</td>
              <td>{student.Grade}</td>
              <td className="appear" >
                <Link to={`/edit/${student.id}`}  ><ModeEditOutlineOutlinedIcon style={{color:"#2CA4D8"}}/></Link>
              </td>
              <td className="appear" >< DeleteOutlineTwoToneIcon onClick={()=>DeleteItem(indexx)} style={{color:"#2CA4D8"}}/> </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Student;
