import React from 'react';
import classes from "./Steps.module.sass"
import Image from "../UI/Image/Image"
import step1 from "../../assets/images/icons/0.png"
import step2 from "../../assets/images/icons/1.png"
import step3 from "../../assets/images/icons/2.png"
import step4 from "../../assets/images/icons/3.png"

import beforeAfterImage from "../../assets/images/beforeafter.jpg"
const Steps = props => {


    return <section className={classes.Steps}>

        <div className={classes.Steps_Wrapper}>
            <div>

                <div className={classes.Steps_Icons_Wrapper}>
                    <h2>To proste!</h2>
                    <div>
                        <Image src={step1} alt="Krok pierwszy - odrysuj" />
                        <Image src={step2} alt="Krok drugi - pokoloruj" />
                    </div>
                    <div>
                        <Image src={step3} alt="Krok trzeci - wytnij" />
                        <Image src={step4} alt="Krok czwarty - wypiecz" />
                    </div>

                    <h4>... i gotowe :) </h4>
                </div>

            </div>

        </div>
        <div className={classes.BeforeAfter}>
            <Image src={beforeAfterImage} alt="Zdjęcie przedstawia zawieszkę przed i po wypieczeniu" />
        </div>
    </section>
}

export default Steps