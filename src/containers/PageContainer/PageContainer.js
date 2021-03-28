import React from 'react';
import classes from "./PageContainer.module.sass";

const PageContainer = (props) => {

    return <div className={classes.PageContainer}>
        {props.children}
    </div>
}

export default PageContainer