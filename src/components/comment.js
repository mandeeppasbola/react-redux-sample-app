import React from "react";

class Comment extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            isEditing : false,
            title: props.comment.title,
            desc: props.comment.desc
        }
        this.handleEditClick = () => {
            this.setState({
                isEditing : true
            })
        }
        this.handleSaveClick = () => {
            this.setState({
                isEditing : false
            })
        }
        this.handleDeleteClick = () => {
            props.actions.removeComment();
        }
        this.handleTitleOnchange = (e) => {
            this.setState({
                title : e.target.value
            })
        }
        this.handleDescOnchange = (e) => {
            this.setState({
                desc : e.target.value
            })
        }
    }
    render(){
        if (!this.state.isEditing) {
            return (
                <div>
                    <h3>{this.state.title}</h3>
                    <p>{this.state.desc}</p>
                    <div>
                        <input type="button" value="Edit" onClick={this.handleEditClick}/>
                        <input type="button" value="Delete" onClick={this.handleDeleteClick}/>
                    </div>
                </div>
            )
        } else {
            return (
                <div>
                    <input type="text" placeholder="title" value={this.state.title} onChange={this.handleTitleOnchange}/><br/>
                    <textarea placeholder="description" value={this.state.desc} onChange={this.handleDescOnchange}></textarea>
                    <div>
                        <input type="button" value="Save" onClick={this.handleSaveClick}/>
                    </div>
                </div>
            )
        }
        
    }
}

export default Comment;