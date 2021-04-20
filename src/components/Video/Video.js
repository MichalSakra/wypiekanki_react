import React from 'react';
import Section from "../../containers/Section/Section"
import YouTube from "react-youtube"
import classes from "./Video.module.sass"
const Video = props => {
    return <Section classes={classes.Video_Wrapper}>
        <h2>Jak się robi Wypiekanki?</h2>

        <YouTube className={classes.Player} videoId="FFDPr8-I7_w" />
    </Section>
}

export default Video