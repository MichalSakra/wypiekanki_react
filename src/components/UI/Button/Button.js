
import React from 'react';
import classes from "./Button.module.sass"

const Button = props => {

    let classType
    let classSize

    switch (props.btnType) {
        case "Primary":
            classType = classes.Primary;
            break;
        case "Secondary":
            classType = classes.Secondary
            break;
        case "Primary-alt":
            classType = classes.PrimaryAlt;
            break;
        case "Secondary-alt":
            classType = classes.SecondaryAlt;
            break;

        default: classType = null
    }

    switch (props.btnSize) {
        case "Small":
            classSize = classes.Small;
            break;
        case "Big":
            classSize = classes.Big
            break;

        default: classSize = null
    }


    return <button disabled={props.disabled || false} onClick={props.click} className={[classes.Button, classType, classSize].join(" ")}>{props.children}</button>
}

export default Button