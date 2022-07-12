import React, { createContext, useState } from "react";

export const store = createContext();

const Detail = (props) => {
  const [student, setStudent] = useState([
    {
      Name: "Ravikant",
      Class: "8",
      Result: <span className="fail">Failed</span>,
      Score: "29",
      Grade:<span className="po">Poor</span>,
      id: "1",
    },

    {
      Name: "Saurav",
      Class: "8",
      Result: <span className="pass">Passed</span>,
      Score: "89",
      Grade:<span className="exe">Excellent</span>,
      id: "2",
    },
    {
      Name: "dipu",
      Class: "10",
      Result: <span className="pass">Passed</span>,
      Score: "45",
      Grade:<span className="ave">Average</span>,
      id: "3",
    },
    {
      Name: "yash",
      Class: "9",
      Result: <span className="pass">Passed</span>,
      Score: "65",
      Grade:<span className="ave">Average</span>,
      id: "4",
    },
    
  ]);
  console.log(store);
  return (
    <div>
      <store.Provider value={[student, setStudent]}>
        {props.children}
      </store.Provider>
    </div>
  );
};

export default Detail;