import React from 'react';
import styled from 'styled-components';
import {styledVariables} from '../../../style/GlobalStyle';
import { mq } from '../../../style/MediaQuery';

const H1 = styled.h1`
        font-family: Oswald, sans-serif;
        margin-top:-1rem;
        font-size: 4rem;
        font-weight: 700;
        line-height: 124.8%;
        letter-spacing: 2.5%;
        color: ${styledVariables["secondary-color"]};
        ${mq("md")`
            font-size: 3rem;
            margin-bottom: 2rem;
        `};
        
`;

function LargeTitle(props){
    return(
        <H1>{props.children}</H1>
    );
}

export default LargeTitle;