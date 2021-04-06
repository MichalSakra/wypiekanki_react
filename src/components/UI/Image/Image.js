import React from 'react'

import classes from "./Image.module.sass"
import { LazyLoadImage } from "react-lazy-load-image-component"
import 'react-lazy-load-image-component/src/effects/opacity.css';
const Image = props => {


    return (

        <LazyLoadImage
            data-index={props.index}
            onClick={(e) => props.click(e)}
            className={classes.Image}
            src={props.src}
            alt="Galeria wypiekanek"
            placeholder={<span className={classes.LazyLoadImage_Placeholder} />}
        />
    )
}

export default Image