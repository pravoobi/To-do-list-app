import React from 'react';

class Todolist extends React.Component {

	render() {
				
		const inputtag=<input type="checkbox" name="done" value={false} autoFocus />;
		return (
			<div className="task-elem">
			
				{inputtag}
				
				{inputtag.checked===true ? <label><s>{this.props.details.item}</s></label>:<label>{this.props.details.item}</label>}
			
			<button onClick={() => this.props.removeTask(this.props.index)} className="remove-btn">x</button>
			</div>
		)
	}
}

export default Todolist ;