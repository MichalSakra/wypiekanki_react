
import classes from "./Input.module.sass"


const Input = props => {

    const Textarea = <span><label htmlFor=""></label><textarea placeholder={props.placeholder} className={[classes.Textarea, classes.Input].join(" ")}></textarea></span>

    const Input = <span><label htmlFor=""></label><input placeholder={props.placeholder} className={[classes.Input, classes.InputText].join(" ")} type={props.type} /></span>


    return props.type === "textarea" ? Textarea : Input
}

export default Input