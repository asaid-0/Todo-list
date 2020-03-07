import React from 'react'
import Tasks from './Tasks.js'
class Deleted extends React.Component {
    constructor(props) {
        super(props);
    }
    undoTask = (i) => {
        this.props.moveTask("deleted", null, i);
    }
    render() {

        return (
            <>
                <div className="p-3 bg-danger m-3 w-100">
                    <h1>Deleted</h1>
                    <Tasks data={this.props.data} setTask={this.undoTask} firstBtn="Undo" />
                </div>
            </>
        );


    }
}
export default Deleted;
