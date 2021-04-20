import React from 'react'

import classes from "./Image.module.sass"
import { LazyLoadImage } from "react-lazy-load-image-component"
import 'react-lazy-load-image-component/src/effects/opacity.css';
const Image = props => {


    return (

        <LazyLoadImage
            className={[classes.Image, props.classes].join(" ")}
            data-index={props.index}
            onClick={props.click ? (e) => props.click(e) : null}
            src={props.src}
            alt={props.alt || "Wypiekanki - kreatywna zabawa!"}
            placeholder={<span className={classes.LazyLoadImage_Placeholder} />}
        />
    )
}

export default Image