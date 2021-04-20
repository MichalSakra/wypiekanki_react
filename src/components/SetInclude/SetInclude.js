import React from 'react';
import Section from "../../containers/Section/Section"
import classes from "./SetInclude.module.sass"
const SetInclude = () => {

    return <Section>
        <h2 style={{ textAlign: "center" }}> Każdy zestaw zawiera:</h2>
        <div className={classes.SetInclude_Wrapper}>
            <ul >
                <li>arkusz specjalnej folii termokurczliwej (20x30 cm)</li>
                <li>arkusz A4 z propozycjami wzorów</li>
                <li>parę antyalergicznych kolczyków</li>
                <li>dwa breloki do kluczy</li>
                <li>kółeczka łączące</li>
                <li>szczegółową instrukcję wraz ze wskazówkami</li>
            </ul>
        </div>
    </Section>
}

export default SetInclude