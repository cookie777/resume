import React from 'react';
import styled from 'styled-components';
import {styledVariables} from '../../../style/GlobalStyle';
import { mq } from '../../../style/MediaQuery';

const H3 = styled.h3`
        margin-bottom: 0.75rem;
        font-size: 1.125rem;
        font-weight: 700;
        font-family: Oswald, sans-serif;
        color: ${styledVariables["secondary-color"]};
        ${mq("md")`
            line-height:140%;
        `};  
`;

function SmallTitle(props){
    return(
        <H3>{props.children}</H3>
    );
}

export default SmallTitle;