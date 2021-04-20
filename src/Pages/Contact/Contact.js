import React from 'react';
import Section from "../../containers/Section/Section"
import ContactForm from "../../components/ContactForm/ContactForm"
import ContactInfo from "../../components/ContactInfo/ContactInfo"
import classes from './Contact.module.sass';
class Contact extends React.Component {


    render() {

        return <Section>
            <h2>Skontaktuj się z nami!</h2>
            <div className={classes.ContactContainer}>

                <ContactForm />
                <ContactInfo />
            </div>
        </Section>
    }
}

export default Contact