import React, {useEffect, useState} from "react";
import defaultUserIcon from "./../../../../assets/userPhoto.png"
import {ProfileInfoType} from "../../../../redux/profilePageReducer";
import {UniversalEditableSpan} from "../../../../componentsUniversal/UniversalEditableSpan/UniversalEditableSpan";

type ProfileHeaderType = {
    data: ProfileInfoType
    status: string
    updateUserStatusThunkCreator: (newText: string) => void
}

export function ProfileInfo(props: ProfileHeaderType) {


    const [profileStatus, setProfileStatus] = useState(props.status)
    useEffect(() => setProfileStatus(props.status), [props.status])

    const userPhoto = props.data.photos.large ? props.data.photos.large : defaultUserIcon


    return <div>

        <img
            src={userPhoto}
            alt={"user"}
        />
        <div>{props.data.fullName}</div>
        {/*<div>{profileStatus}</div>*/}
        <UniversalEditableSpan text={profileStatus} onEntityFunction={props.updateUserStatusThunkCreator}/>


        <div>------------------------------</div>
        {/*<div>{prop}</div>*/}
        {/*<div className={css.profileInfoDescription}>{props.data.myInfo}</div>*/}
    </div>
}