import React from "react";

class Comment extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            isEditing : false
        }
        this.handleEditClick = () => {
            this.setState({
                isEditing : true
            })
        }
    }
    render(){
        return (
            <div>
                <h3>{this.props.comment.title}</h3>
                <p>{this.props.comment.desc}</p>
                <div>
                    <input type="button" value="Edit" onClick={this.handleEditClick}/>
                </div>
            </div>
        )
    }
}

export default Comment;