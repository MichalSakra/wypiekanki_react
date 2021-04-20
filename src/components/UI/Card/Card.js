import React from 'react';
import styled from "styled-components"

const Div = styled.div.attrs(props => ({
    colour: props.colour || 'rgb(12, 212, 99)'
}))
`
    @media ( min-width: 1222px){
        transition: background-color .3s linear;
            &:hover{        
                background-color: ${props => props.colour}       
        }
    }
        
    `
const Card = props => {


    return <Div colour = {
        props.colour
    }
    className = {
        props.classes
    } > {
        props.children
    } < /Div>
}

export default Card