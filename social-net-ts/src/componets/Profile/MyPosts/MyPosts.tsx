import React from 'react';
import s from './MyPosts.module.css'
import Post from "./Post/Post";


const MyPosts = () => {
    let postsData = [
        {id:1, message:'Hey, hello', like: 15},
        {id:2, message:'Im fine thx', like: 20}
    ]
    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea></textarea>
                </div>
                <div>
                    <button> Add post </button>
                </div>
            </div>
            <div className={s.posts}>
                <Post message={postsData[0].message} like={postsData[0].like}/>
                <Post message={postsData[1].message} like={postsData[1].like}/>
            </div>
        </div>

    )
}
export default MyPosts