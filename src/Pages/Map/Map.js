import React from 'react';
import Section from "../../containers/Section/Section"
import Mapbox from "../../components/Mapbox/Mapbox"
import classes from "./Map.module.sass"

const Map = props => {

    return <Section >
        Tutaj znajdziesz wszystkie sklepy, w których kupisz Wypiekanki!

      <div className={classes.Map}>
            <Mapbox />
        </div>
    </Section>
}


export default Map