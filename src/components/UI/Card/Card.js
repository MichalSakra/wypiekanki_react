import React from 'react';
import styled from "styled-components"

const Card = props => {

    const Div = styled.div`


    @media ( min-width: 1222px){
        transition: background-color .3s linear;
            &:hover{
               
                background-color: ${props.colour}
          
        
        }
    }

        
    `

    return <Div className={props.classes}>{props.children}</Div>
}

export default Card