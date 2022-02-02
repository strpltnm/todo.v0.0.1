import { useState } from "react";
import Column from "./Components/Column";

function App() {
  const [columns, setColumns] = useState([
    {columnName: 'learn js', id: 1}, 
    {columnName: 'learn Node.js', id: 2}
  ]);

  const [tasks, setTasks] = useState([
    // {id:1, columnId:1, name: 'read about promises'}, 
    // {id:2, columnId:2, name: 'Create petProject for portfolio'},
    // {id:3, columnId:2, name: 'Create second petProject for portfolio'},
    // {id:4, columnId:2, name: 'Get a job!'}      
  ])

  const [addTaskInput, setAddTaskInput] = useState('');

  function deleteTask(taskId){
    setTasks(tasks.filter(task => task.id !==taskId));
  }

  function createTask(columnId, value){
    console.log(1);
    var id = Math.floor(Date.now()/1000);
    let newTask = {id: id, columnId: columnId, name: value};
    setTasks([...tasks, newTask]);
  }


  return (
    <div className="App main-tasks-layout">
    {
      columns.map(el=> {
        return(
          <Column key={el.id} id={el.id} name={el.columnName} tasks={[...tasks].filter(task => task.columnId === el.id)} createTask={createTask} deleteTask={deleteTask} />
          )})
    }
    
    </div>
  );
}

export default App;