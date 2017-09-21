import React from "react";
import AddComponent from "./add-component";
import Comment from "./comment";
import CommentsData from "../data/comments";

const App = () => (
    <div>
        <h1>This is comment manager app</h1>
        <div className="add-comment">
            <AddComponent/>
        </div>
        <div className="comments">
            {
                CommentsData.map((comment) => (
                    <Comment comment={comment} key={comment.id}/>
                ))
            }
        </div>
    </div>
)

export default App;