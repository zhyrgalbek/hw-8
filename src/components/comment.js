import CommentDate from "./CommentDate";
import { UserInfo } from "./UserInfo";
import CommentWrapper from "../UI/CommentWrap";
import './Comment.css';

function Comment(props) {
    return (
        <div className='Comment'>
            <UserInfo author={props.comment.author} />
            <CommentWrapper>
                <div className='Comment-text'>
                    {props.comment.text}
                </div>
                <CommentDate date={props.comment.date} />
            </CommentWrapper>
        </div>
    )
}

export default Comment;