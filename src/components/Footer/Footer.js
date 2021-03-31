import React from 'react';
import classes from "./Footer.module.sass"
import Logo from "../../assets/images/logo-small.png"
import { FcPhone } from 'react-icons/fc';
import { AiOutlineMail } from "react-icons/ai"
import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa"


const Footer = props => {







    return <div className={classes.Footer_Wrapper}>
        <img className={classes.Logo} src={Logo} alt="Logo Fabryka Frajdy" />
        <div className={classes.Footer_Columns_Wrapper}>
            <div className={classes.LeftColumn}>

                <div className={classes.Contact}>
                    <h3> Masz pytania?</h3>
                    <a href="tel:+48577870070"><span className={classes.Phone}>
                        <FcPhone />+48 577 870 070 </span></a>
                    <a href="mailto:kontakt@fabrykafrajdy.pl"><span className={classes.Mail}><AiOutlineMail />kontakt@fabrykafrajdy.pl </span></a></div>
            </div>
            <div className={classes.RightColumn}>

                <div className={classes.Socials}>
                    <h3>Social media</h3>
                    <a href="https://facebook.com/FabrykaFrajdyKielce" target="blank"><FaFacebook />Facebook</a>
                    <a href="https://instagram.com/FabrykaFrajdyKielce" target="blank"><FaInstagram />Instagram</a>
                    <a href="https://youtube.com/FabrykaFrajdyKielce" target="blank"><FaYoutube />Youtube</a>

                </div>

            </div>
        </div>
    </div>
}

export default Footer