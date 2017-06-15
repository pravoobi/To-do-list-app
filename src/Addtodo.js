import React from 'react';

class Addtodo extends React.Component {
	createTask(event) {
		event.preventDefault();
	    const task = {
	    	item: this.todoItem.value
		}
		console.log(task);
		this.props.addTask(task);
	    this.todoForm.reset();

	}
	render() {
		return (
			<form ref={(input) => this.todoForm = input} className="form-add" onSubmit={(e) => this.createTask(e)}>
			<input ref={(input) => this.todoItem = input} type="text" className="form-input" placeholder="Add your Task"/>
			<button className="form-btn" type="submit"> + </button>
			</form>			
			)
	}

}

export default Addtodo ;