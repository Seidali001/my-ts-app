import React from "react";

type TypePropsAccordion = {
    titleValue: string
    collapsed: true | false
}

function Accordion(props: TypePropsAccordion) {
    console.log("Accordion rendering");

    if (props.collapsed) {
        return (
            <div>
                <AccordionBody/>
            </div>
        )
    } else {
        return (
            <div>
                <AccordionTitle title={props.titleValue}/>
                <AccordionBody/>
            </div>
        )
    }
}

type TypePropsAccordionTitle = {
    title: string
}

function AccordionTitle(props: TypePropsAccordionTitle) {
    console.log("AccordionTitle rendering");
    return (
        <div>
            <h3> -- {props.title} -- </h3>
        </div>
    )
}

function AccordionBody(props: any) {
    console.log("AccordionBody rendering");
    return (
        <div>
            <ul className="lists">
                <li>1</li>
                <li>2</li>
                <li>3</li>
            </ul>
        </div>
    )
}

export default Accordion;