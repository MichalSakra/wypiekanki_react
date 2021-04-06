import React from 'react';
import classes from "./MapModal.module.sass"
import Button from "../Button/Button"
const MapModal = ({ data, click }) => {

    const { name, address, city } = data
    return <div className={classes.MapModal}>
        <h3>{name}</h3>
        <p>{city}, {address}</p>
        <Button click={click} btnSize="Big" btnType="Primary-alt" onClick> zamknij</Button>
    </div>
}

export default MapModal