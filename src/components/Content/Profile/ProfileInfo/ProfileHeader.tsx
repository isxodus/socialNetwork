import React from "react";
import {ProfileInfoType} from "../../../../redux/reduxStore";
import defaultUserIcon from "./../../../../assets/userPhoto.png"

type ProfileHeaderType = {
    data: ProfileInfoType
}

export function ProfileHeader(props: ProfileHeaderType) {
    const userPhoto = props.data.photos.large ? props.data.photos.large : defaultUserIcon

    return <div>
        does not work right now
        {props.data.fullName}
        <img
            src={userPhoto}
            alt={"user"}
        />
        {/*<div className={css.profileInfoDescription}>{props.data.myInfo}</div>*/}
    </div>
}