import React from 'react';
import  s from './Profie.module.css'
import MyPosts from "./MyPosts/MyPosts";

const Profile = () => {
    return (
        <div className={s.content}>
            <div>
                <img className={s.img}
                    src="https://img2.akspic.ru/preview/151517-s_vysoty_ptichego_poleta-gorodskoj_pejzazh-delovoj_rajon-metropoliya-gollivud-550x310.jpg"
                    alt=""/>
            </div>

            <div>
                ava + discription
            </div>

            <div>
                <MyPosts/>
            </div>
        </div>

    )
}
export default Profile