import { useState } from "react";
import React, { useReducer } from "react";
import EmployeeList from "./Employe_container/Employee";
import TeamList from "./Team_container/Team";
import Employeejson from "./static/employee.json";

function App() {
  const initData = {
    employees: Employeejson,
    teamList: [],
    averageAge: 0,
  };

  const reducerfn = (state, action) => {
    console.log(state);

    const removeAddBtn = () => {
      const btn = document.getElementById("addBtn")
      // console.log(btn);
      state.employees.map((employee) => {
        if (employee.id === action.payload.id) {
          btn.style.display = "none";
        }
      })

    }

    if (action.type === "Add_To_Team_List") {
      removeAddBtn();
      return {
        ...state,
        teamList: [...state.teamList, action.payload],
      };
    } else if (action.type === "Remove_From_The_TeamList") {
      const teamListCopy = [...state.teamList];
      teamListCopy.splice(teamListCopy.indexOf(action.payload), 1);
      return {
        ...state,
        teamList: teamListCopy,
      };
    } else if (action.type === "Calculate_Average_Age") {
      const avgAge = (
        state.teamList.reduce((pc, cv) => pc + cv.age, 0) /
        state.teamList.length
      ).toFixed(2);

      const stateCopy = {
        ...state,
      };
      stateCopy.averageAge = avgAge;
      return stateCopy;
    } else if (action.type === "Sort_Age") {
      const sortedTeamList = [...state.teamList].sort((a, b) => a.age - b.age);
      return {
        ...state,
        teamList: sortedTeamList,
      };
    } else {
      return state;
    }
  };
  const [state, dispatch] = useReducer(reducerfn, initData);
  // const [AverageAge, setAverageAge] = useState(0);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        background: "lightblue",
        padding: "10px",
        gap: "5px",
      }}
    >
      <div
        style={{
          border: "1px solid black",
          width: "50%",
        }}
      >
        <EmployeeList employee={state.employees} dispatch={dispatch} />
      </div>
      <div
        style={{
          border: "1px solid black",
          width: "50%",
        }}
      >
        <TeamList
          employee={state.teamList}
          averageAge={state.averageAge}
          dispatch={dispatch}
        />
      </div>
    </div>
  );
}

export default App;
