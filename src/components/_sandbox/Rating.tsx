import React from "react";

function Rating(props: { stars: 0 | 1 | 2 | 3 | 4 | 5 }) {
    if (props.stars > 3) return <p>good</p>
    else return <p>bad</p>
}

export default Rating