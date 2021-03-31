import React from 'react';
import classes from "./Set.module.sass"
import Button from "../UI/Button/Button"
import Card from "../UI/Card/Card"

const Set = ({ data }) => {

    const { frontImg, name, text, colour } = data
    return <Card classes={classes.Card_Wrapper} colour={colour}>

        <div className={classes.Card_Image_Wrapper}>
            <img src={frontImg} alt="okładka zestawu Wypiekanek" />
        </div>
        <div className={classes.Card_Body_Wrapper}>
            <div className={classes.Body_Title}><h2>{name}</h2></div>
            <div className={classes.Card_Body_Content}>{text}</div>
            <div className={classes.Card_Body_Footer}><Button btnSize="Big"
                btnType="Primary-alt">galeria</Button>
                <Button btnSize="Big"
                    btnType="Secondary-alt">kup teraz</Button></div>
        </div>
    </Card>

}

export default Set