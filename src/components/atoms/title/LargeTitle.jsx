import React from 'react';
import styled from 'styled-components';
import {styledVariables} from '../../Styled';

const H1 = styled.h1`
        font-family: Oswald, sans-serif;
        margin-top:-1rem;
        font-size: 4rem;
        font-weight: 700;
        line-height: 124.8%;
        letter-spacing: 2.5%;
        color: ${styledVariables["secondary-color"]};
        
`;

function LargeTitle(props){
    return(
        <H1>{props.children}</H1>
    );
}

export default LargeTitle;