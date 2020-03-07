import React from 'react'

function Tasks(props) {
    return (
        <ul>
            {
                props.data.map((task, i) => {
                    console.log(task);
                    return (
                        <li>{task.name} <span className="btn btn-light m-3" onClick={() => props.setTask(i)}>{props.firstBtn}</span> <span className="btn btn-danger m-3" onClick={() => props.deleteTask(i)} >{props.secondBtn}</span></li>
                    );
                })
            }
        </ul>
    );
}
export default Tasks;