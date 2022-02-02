import React from 'react';

const Task = (props) => {
    return (
        <div className="task-item">
            <p>{props.name}</p>
            <div className="btn btn_delete" onClick={() => props.delete(props.id)}>X</div>
        </div>
    );
};

export default Task;