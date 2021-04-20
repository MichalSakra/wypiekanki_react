import classes from "./ContactInfo.module.sass"
import logo from "../../assets/images/logo-small.png"
import Image from "../UI/Image/Image"

const ContactInfo = props => {


    return <div className={classes.ContactInfo}>
        <Image src={logo} />
        <h4>Dane kontaktowe:</h4>
        <p>Fabryka Frajdy Aleksandra Sakra</p>
        <p>Kielce, ul. Targowa 18/913</p>
        <p>+48 577 870 070</p>
        <p>kontakt@fabrykafrajdy.pl</p>

        <br />
        <h4>Przedstawiciel handlowy:</h4>
        <p>Tomasz Kowalczyk</p>
        <p>+48 606 234 548</p>
        <p>biuro@hurtksiazek.pl</p>

    </div>
}

export default ContactInfo