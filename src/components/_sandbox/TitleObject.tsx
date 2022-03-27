import React from "react";

type TitleObjectType = {
    title: string
}

export function TitleObject(props: TitleObjectType) {
    return <p>{props.title}</p>
}

// export default TitleObject