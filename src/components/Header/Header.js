import React from 'react';
import classes from "./Header.module.sass"
import Logo from "../../assets/images/logo.png"
import Bar from "../../assets/images/header-image-bar.jpg"
import Subtitle from "../../assets/images/kreatywna-zabawa.png"
import background from "../../assets/images/slides/0.jpg"
import Button from "../UI/Button/Button"
const Header = props => {
    const buyBtnHandler = () => {
        return window.open('https://www.fabrykafrajdy.pl/pl/c/Wypiekanki-kreatywna-zabawa/1', "_blank")
    }
    return <div className={classes.Header_Wrapper} style={{
        backgroundImage: `url(${background})`
    }}>
        <div className={classes.Images_Wrapper}>
            <div className={classes.Bar}>
                <img src={Bar} alt="" />
            </div>
            <img className={classes.Logo} src={Logo} alt="" />
            <img className={classes.Subtitle} src={Subtitle} alt="" />

        </div>
        <div className={classes.Buttons_Bar}>
            <Button click={buyBtnHandler} btnType="Primary" btnSize="Big">Kup teraz</Button>
        </div>
    </div>
}

export default Header