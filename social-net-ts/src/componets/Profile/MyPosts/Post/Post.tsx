import React from 'react';
import s from './Post.module.css'

type postType = {
    message: string
    like: number
}

const Post = (props: postType) => {
    return (
        <div>
            <div className={s.item}><img
                src='https://www.freepnglogos.com/uploads/eagles-png-logo/eagle-sports-png-logos--0.png'/>
                {props.message}
                <div>
                    <span> like {props.like} </span>
                </div>
            </div>
        </div>

    )
}
export default Post