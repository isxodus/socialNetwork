import React from "react";
import css from "./ProfileInfo.module.css"

export function ProfileInfo() {
    return <div>
        <img
            src={"https://media.istockphoto.com/photos/financial-center-picture-id507076592?k=20&m=507076592&s=612x612&w=0&h=Jmctr_haN1UyZsferwuczs624R2Q3tro_WmQifotvT4="}
            alt={"pretty image"}/>
        <div className={css.profileInfoDescription}>my info</div>
    </div>
}