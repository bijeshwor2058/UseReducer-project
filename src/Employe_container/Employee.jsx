import styles from "./emlpoyee.module.css";
const Employee = (props) => {
  return (
    <div>
      <h2>Employee</h2>
      <hr />
      <main>
        <div>
          {props.employee.map((data) => {
        
            return (
              <div key={data.id} className={styles.employee_container}>
                <span>{data.first_name} {data.last_name}</span>
                <span>{data.id}</span>
                <span>{data.age} - years old</span>
                <button id="addBtn" onClick={()=> props.dispatch({type: "Add_To_Team_List", payload: data})}>Add</button>
              </div>

            );
          })}
        </div>
      </main>
    </div>
  );
};

export default Employee;
