import React from 'react';
import Section from "../../containers/Section/Section"
import classes from "./About.module.sass";
import Image from "../UI/Image/Image"
import AboutImg from "../../assets/images/image.jpg"


const About = () => {





    return (
        <Section>



            <div className={classes.About}>
                <div className={classes.About_Content}>
                    <h4>Wypiekanki - kreatywna zabawa</h4>
                    <p>W czterech prostych krokach stworzysz własne niesamowite breloki, zawieszki, kolczyki, przypinki, magnesy - wszystko, co tylko przyjdzie Ci do głowy ♥. </p>
                    <p>Odrysuj na specjalnej folii szablony dołączone do zestawów, pokoloruj, wytnij je, a na koniec wypiecz przez kilka minut w domowym piekarniku w temp. 160 o C.
                W tym czasie folia skurczy się i usztywni.</p>

                    <p>Już po chwili możesz się cieszyć własnoręcznie wykonanymi ozdobami. Fantastyczny prezent dla małych i dużych :)</p>
                </div>
                <div className={classes.About_Image}>
                    <Image src={AboutImg} alt="Zdjęcie zestawów Wypiekanek. Więcej informacji o zestawach znajdziesz w zakładce Nasze zestawy" />
                </div>
            </div>


        </Section>)

}

export default About