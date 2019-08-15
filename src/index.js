
import React from 'react';
import ReactDOM from 'react-dom';

const HelloWorld = () => {
    return <h1>Hello React!!!</h1>;
}

class ToDoApp extends React.Component{
	constructor(){
		super();

		this.state = {
			todos: [
			    {name:"Написать ToDoApp на реакте",checked:true},
			    {name:"Закинуть ToDoApp на гит-хаб",checked:true},
			    {name:"Наслаждаться",checked:false}
			],
			newToDoText:''
		};
	}

	toggleToDo(key){
        const todos = this.state.todos.map((todo,i) => {
            if(key === i){
            	return {
            		name: todo.name,
            		checked: !todo.checked
            	}
            }else{
            	return todo;
            }
        });

		this.setState({todos});
	}

	addToDo(){
        const todos = this.state.todos;
        todos.push({
        	name:this.state.newToDoText,
        	checked:false
        });

        this.setState({todos});
	}

	render(){
		return (
			<div>
			<h1>ToDo List</h1>
			
			   <ol>
			   	  {
			   	  	this.state.todos.map((todo,i) => {
                        const className = todo.checked ? 'checked' : '';

			   	  		return(
                                <li 
                                key={i} 
                                className = {className}
                                onClick={ev => {this.toggleToDo(i)}}
                                >
                                	{todo.name}
                                </li>
			   	  			)
			   	  	})
			   	  }
			   </ol>
			   <input type="text" 
			   placeholder = "Новая задача"
			   value = {this.state.newToDoText}
			   onChange = {ev =>{
			   	this.setState({newToDoText:ev.target.value})
			   }}
			   onKeyUp = {ev => {
			   	if(ev.keyCode === 13){
			   		this.addToDo();
			   	}
			   }} 
			   />
			   </div>
			);
	}
}



ReactDOM.render(
   <ToDoApp />,
   document.querySelector('#app')
);


