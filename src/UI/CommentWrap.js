import './CommentWrap.css';

function CommentWrapper(props){
    const wrapper = 'wrapper ' + props.className;
    return (
        <div className={wrapper}>
            {props.children}
        </div>
    )
}

export default CommentWrapper;