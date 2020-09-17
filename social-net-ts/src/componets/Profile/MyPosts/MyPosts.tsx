import React from 'react';
import s from './MyPosts.module.css'
import Post from "./Post/Post";


const MyPosts = () => {
    return (
        <div>
            My posts
            <div>
                <textarea></textarea>
                <button> Add post</button>
            </div>
            <div>
                POSTS
            </div>
            <div className={s.posts}>
                <Post message={"Hey hello"} like={15}/>
                <Post message={"i am fine"} like={20}/>
            </div>
        </div>

    )
}
export default MyPosts