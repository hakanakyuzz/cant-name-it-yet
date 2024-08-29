import './Post.css'
import RightSide from "../RightSide/RightSide.jsx";


const Post = () => {
    return (<>
            <div className='post-container'>
                <div className='user-info-container'>
                    <RightSide/>
                </div>
            <div>post</div>
            <div>
                <div>like</div>
                <div>share</div>
            </div>
            <div>post info by user</div>
            <div>comments</div>
            </div>
    </>)
}
export default Post