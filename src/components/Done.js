import React from 'react'
import Tasks from './Tasks.js'
class Done extends React.Component {
    constructor(props) {
        super(props);
    }
    setTodo = (i) => {
        this.props.moveTask("done", "todo", i)
    }
    deleteTask = (i) => {
        this.props.moveTask("done", "deleted", i);
    }
    render() {

        return (
            <>
                <div className="p-3 bg-success m-3 w-100">
                    <h1>Done</h1>
                    <Tasks data={this.props.data} setTask={this.setTodo} deleteTask={this.deleteTask} firstBtn="Todo" secondBtn="Delete" />
                </div>
            </>
        );


    }
}
export default Done;
