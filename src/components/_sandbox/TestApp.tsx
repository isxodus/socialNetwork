import React from "react";
import {TitleObject} from "./TitleObject";
import Rating from "./Rating";

function TestApp() {
    return <div>
        <Accordion title={"Forest "} stars={3} collapsed={false}/>
        <Accordion title={"Movie 2"} stars={4} collapsed={false}/>
        <Accordion title={"Movie 3"} stars={4} collapsed={true}/>
    </div>
}

type AccordionProps = {
    title: string, stars: 0 | 1 | 2 | 3 | 4 | 5, collapsed: boolean

}

function Accordion(props: AccordionProps) {
    if (props.collapsed) return <div><TitleObject title={props.title}/></div>
    else return <div><TitleObject title={props.title}/><Rating stars={props.stars}/></div>
}


export default TestApp