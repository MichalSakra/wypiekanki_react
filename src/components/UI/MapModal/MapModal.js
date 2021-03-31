import React from 'react';
import classes from "./MapModal.module.sass"
import Button from "../Button/Button"
const MapModal = ({ data, click }) => {

    const { name, address } = data
    return <div className={classes.MapModal}>
        <p>{name}</p>
        <p>{address}</p>
        <Button click={click} btnSize="Big" btnType="Primary-alt" onClick> zamknij</Button>
    </div>
}

export default MapModal