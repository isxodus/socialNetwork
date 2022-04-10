import React from "react";
import css from "./ProfileInfo.module.css"
import {ProfileInfoType} from "../../../../redux/reduxStore";

type ProfileHeaderType = {
    data: ProfileInfoType
}

export function ProfileHeader(props: ProfileHeaderType) {
    return <div>
        <img
            src={props.data.imageLink}
            alt={props.data.altText}/>
        <div className={css.profileInfoDescription}>{props.data.myInfo}</div>
    </div>
}