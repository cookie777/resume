import React from "react";
import styled from 'styled-components';
import {styledVariables} from '../../Styled';

const P = styled.p`
    font-size: 1em;
    font-weight: 400;
    text-align: left;
    font-family: 'Playfair Display', serif;
    line-height: 168%;
    color: ${styledVariables["secondary-color-l"]};
    
`;

function Paragraph(props){
    return(
        <P>{props.children}</P>
    );
}

export default Paragraph;