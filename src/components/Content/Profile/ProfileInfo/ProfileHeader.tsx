import React from "react";
import {ProfileInfoType} from "../../../../redux/reduxStore";

type ProfileHeaderType = {
    data: ProfileInfoType
}

export function ProfileHeader(props: ProfileHeaderType) {
    return <div>
        does not work right now
        {props.data.fullName}
        {/*<img*/}
        {/*    src={props.data.imageLink}*/}
        {/*    alt={props.data.altText}/>*/}
        {/*<div className={css.profileInfoDescription}>{props.data.myInfo}</div>*/}
    </div>
}