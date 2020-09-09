import React from 'react';
import s from './Post.module.css'

const Post = () => {
    return (
        <div>
            <div className={s.item}><img
                src='https://www.freepnglogos.com/uploads/eagles-png-logo/eagle-sports-png-logos--0.png'/> post 1
                <div>
                    <span>Like</span>
                </div>
            </div>
        </div>

    )
}
export default Post