import CommentAvatar from "./CommentAvatar";
import CommentWrapper from "../UI/CommentWrap";
import './UserInfo.css';

export const UserInfo = (props) => {
    return (
        <CommentWrapper className="UserInfo">
            <CommentAvatar author={props.author} />
            <div className='UserInfo-name'>
                {props.author.name}
            </div>
        </CommentWrapper>
    )
}