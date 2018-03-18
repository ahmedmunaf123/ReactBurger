import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

class TodoList extends React.Component{
    constructor(){
        super();
        this.state ={
            tasks:[{
                name: "Buy Milk",
                completed:false
            },
            {
                name: "Buy Cheese",
                completed:false
            },
            {
                name: "Buy Bread",
                completed:false
            }]
        }
    }
    render(){
        return(
            <div>
            <ul>
            {
                this.state.tasks.map(function(task){
                    return <TodoItem key={task.name} details={task}/>
                })
            }   
            </ul>
            </div>
        )
    }
}
class TodoItem extends React.Component{
    render(){
        return(
            
            <li>
                {this.props.details.name}
            </li>
        )
    }
}

ReactDOM.render(<TodoList/>, document.getElementById("root"));