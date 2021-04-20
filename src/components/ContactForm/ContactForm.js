import React from "react"
import classes from "./ContactForm.module.sass"
import Button from "../UI/Button/Button"
import Input from "../UI/Input/Input"
class ContactForm extends React.Component {

    state = {
        message: {
            title: {
                id: "title",
                type: "text",
                value: "",
                placeholder: "Wpisz tytuł wiadomości"
            },
            email: {
                id: "email",
                type: "email",
                value: "",
                placeholder: "wpisz swój adres e-mail"
            },
            content: {
                id: "content",
                type: "textarea",
                value: "",
                placeholder: "Wpisz treść wiadomości"


            }

        },
        isFormValid: false
    }

    submitFormHandler = (e) => {
        e.preventDefault()
        console.log(e.target.name);
    }



    render() {
        const { message, isFormValid } = this.state
        const { title, email, content } = message
        return (
            <div className={classes.FormContainer} >
                <form className={classes.Form} onSubmit={e => this.submitFormHandler(e)} >

                    <div className={classes.TextInputs} >
                        <Input type={email.type} placeholder={email.placeholder} />
                        <Input type={title.type} placeholder={title.placeholder} />
                    </div>
                    <div className={classes.ContentInput}>
                        <Input type={content.type} placeholder={content.placeholder} />
                    </div>
                    <Button disabled={isFormValid} btnType="Primary-alt" btnSize="Small">Wyślij e-mail</Button>
                </form>

            </div>
        )
    }
}

export default ContactForm