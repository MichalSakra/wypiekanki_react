import React, { useState, useEffect } from 'react';
import Section from "../../containers/Section/Section"
import classes from "./About.module.sass";

import img_zabawkowicz from "../../assets/images/zabawka-roku.png"
const About = () => {

    const [isMounted, setIsMounted] = useState(false)

    useEffect(() => {

        return isMounted ? null : setIsMounted(true)


    })


    console.log(isMounted);
    return (
        <Section>

            {isMounted ? <img className={classes.Img_zabawkowicz} src={img_zabawkowicz} alt="" /> : null}
            <h2>Wypiekanki - kreatywna zabawa</h2>
            <div className={classes.Welcome}>
                <p>W czterech prostych krokach stworzysz własne niesamowite breloki, zawieszki, kolczyki, przypinki, magnesy - wszystko, co tylko przyjdzie Ci do głowy ♥.
</p>
                <p>Odrysuj na specjalnej folii szablony dołączone do zestawów, pokoloruj, wytnij je, a na koniec wypiecz przez kilka minut w domowym piekarniku w temp. 160 o C.
                W tym czasie folia skurczy się i usztywni.</p>

                <p>Już po chwili możesz się cieszyć własnoręcznie wykonanymi ozdobami. Fantastyczny prezent dla małych i dużych :)</p>
            </div>
        </Section>

    )

}

export default About