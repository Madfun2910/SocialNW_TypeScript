import React from "react";
import s from "./ProfileInfo.module.css";



const ProfileInfo = () => {
    return (
        <div>
            <div>
                <img className={s.img}
                     src="https://img2.akspic.ru/preview/151517-s_vysoty_ptichego_poleta-gorodskoj_pejzazh-delovoj_rajon-metropoliya-gollivud-550x310.jpg"
                     alt=""/>
            </div>

            <div className={s.discptionBlock}>
                ava + discription
            </div>

        </div>
    )
}
export default ProfileInfo