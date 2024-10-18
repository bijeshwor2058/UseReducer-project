import styles from "./team.module.css";
const Team = (props) => {
  console.log(props)
  return (
    <div>
      <h2>Team</h2> <hr />
      <main className={styles.main}>
        <div>
          {props.employee.map((data) => {
            return (
              <div key={data.id} className={styles.employee_container}>
                <span>
                  {data.first_name} {data.last_name}
                </span>
                <span>{data.id}</span>
                <span>{data.age} - years old</span>
                <button onClick={()=> props.dispatch({type: "Remove_From_The_TeamList", payload: {}})}>Remove</button>
              </div>
            );
          })}
        </div>
        <p>Average age:{props.averageAge}</p>
        <button onClick={()=> props.dispatch({type: "Calculate_Average_Age", payload: {}})}>Calulate Average age</button>
        <button onClick={()=> props.dispatch({type: "Sort_Age", payload: {}})}>Sort Age</button>
      </main>
    </div>
  );
};

export default Team;
