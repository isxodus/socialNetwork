import React from "react";
import css from "./ProfileInfo.module.css"
import {ProfileInfoType} from "../../../../myRedux/state";

export function ProfileInfo(props: ProfileInfoType) {
    return <div>
        <img
            src={props.imageLink}
            alt={props.altText}/>
        <div className={css.profileInfoDescription}>{props.myInfo}</div>
    </div>
}