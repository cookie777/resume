import React from 'react';
import styled from 'styled-components';
import {styledVariables} from '../../../style/GlobalStyle';

const H2 = styled.h2`
        margin-top:-0.5rem;
        margin-bottom: 1.5rem;
        font-size: 2rem;
        font-weight: 700;
        font-family: Oswald, sans-serif;
        line-height:128%;
        color: ${styledVariables["secondary-color"]};
`;

function MediumTitle(props){
    return(
        <H2>{props.children}</H2>
    );
}

export default MediumTitle;