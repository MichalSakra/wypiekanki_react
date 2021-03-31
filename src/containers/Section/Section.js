import React from 'react';
import classes from './Section.module.sass';


const Section = props => {
    return (
        <section className={[classes.Section, props.classes].join(" ")}>
            {props.children}
        </section>
    )
}

export default Section