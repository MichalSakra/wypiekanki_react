import classes from "./Main.module.sass"
import React from 'react';
import About from "../../components/About/About"
import Steps from "../../components/Steps/Steps"
import Video from "../../components/Video/Video"
import SetInclude from "../../components/SetInclude/SetInclude"
const MainContent = props => {


    return (
        <main className={classes.MainContent}>
            <About />
            <Steps />
            <SetInclude />
            <Video />

        </main>

    )
}

export default MainContent