import React from 'react';
import Todo from './components/Todo';
import Done from './components/Done';
import Deleted from './components/Deleted';

class Todos extends React.Component {
    constructor(props) {
        super(props);
        this.state = { todo: [], done: [], deleted: [] };
    }
    setTask = (type, data) => {
        this.setState({ [type]: this.state[type].concat(data) });
    }
    moveTask = (from, to, i) => {
        let setTo = to;
        let fromList = this.state[from];
        let toList = this.state[to];
        if (from == "deleted") {
            setTo = this.state.deleted[i].previous;
            toList = this.state[setTo];
        }
        let task = fromList.splice(i, 1)[0].name;
        if (to == "deleted") toList = toList.concat({ name: task, previous: from });
        else toList = toList.concat({ name: task });
        this.setState({ [from]: fromList, [setTo]: toList });
    }
    render() {
        return (
            <>
                <div className="container todos d-flex flex-row flex-wrap">
                    <Todo data={this.state.todo} setTask={this.setTask} moveTask={this.moveTask} />
                    <Done data={this.state.done} moveTask={this.moveTask} />
                    <Deleted data={this.state.deleted} moveTask={this.moveTask} />
                </div>
            </>
        );
    }
}
export default Todos;
