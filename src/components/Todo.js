import React from 'react'
import Tasks from './Tasks.js'
class Todo extends React.Component {
    constructor(props) {
        super(props);
        this.state = { input: { name: "" } };
    }
    handleChange = (e) => {

        this.setState({ [e.target.name]: { name: e.target.value } });
    }
    submitTodo = (e) => {
        e.preventDefault();
        if (this.state.input.name != "") {
            this.props.setTask("todo", this.state.input);
            this.setState({ input: { name: "" } });
        }
    }
    setDone = (i) => {
        this.props.moveTask("todo", "done", i);
    }
    deleteTask = (i) => {
        this.props.moveTask("todo", "deleted", i);
    }
    render() {
        return (
            <>
                <div className="container w-100">
                    <form onSubmit={this.submitTodo}>

                        <input type="text" onChange={this.handleChange} className="m-3" name="input" value={this.state.input.name} />
                        <button type="submit" className="btn btn-primary">add</button>
                    </form>
                </div>
                <div className="p-3 bg-primary m-3 w-100">
                    <h1>Todo</h1>
                    <Tasks data={this.props.data} setTask={this.setDone} deleteTask={this.deleteTask} firstBtn="Done" secondBtn="Delete" />
                </div>
            </>
        );
    }
}
export default Todo;
