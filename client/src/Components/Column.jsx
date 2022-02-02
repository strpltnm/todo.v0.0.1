import React, { useRef, useState } from 'react';
import Task from './Task';

const Column = ({createTask, deleteTask, id, name, tasks}) => {
    const [isTaskAdding, setIsTaskAdding] = useState(false);
    const inputValue = useRef();

    function CreateTask(){
        if(!isTaskAdding){
            createTask(id, inputValue.current.value);
            setIsTaskAdding(!isTaskAdding);
        }
    }

    return (
        <div id={id} className="column">        
            <div className="task-title">{name}</div>
            <div className="task-container">       
                {tasks.map(task => {
                    return(
                        <Task key={task.id} id={task.id} name={task.name} delete={deleteTask}/>                
                    )
                })}
            </div>

            {!isTaskAdding
                ? <div className='div-input'> <input ref={inputValue}/> <div className="btn" onClick={() => CreateTask()} >+</div></div> 
                : <div className="btn btn_add" onClick={() => setIsTaskAdding(!isTaskAdding)}>Add task</div>
            }
            

        </div>

    );
};

export default Column;