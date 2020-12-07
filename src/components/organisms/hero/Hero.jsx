import React from 'react';
import styled from 'styled-components';
import LargeTitle from '../../atoms/title/LargeTitle';
import VerticalList from '../../atoms/list/VerticalList';
import Paragraph from '../../atoms/text/Paragraph';
import { mq } from '../../../style/MediaQuery';

const Grid = styled.div`
    margin-bottom: 3rem;
    display: grid;
    grid-auto-flow: column;
    grid-template-columns: repeat(2, auto);
    justify-content: space-between;
    column-gap: 1rem;
    ${mq("md")`
        display: block;
    `};

/* 
    ${mq("xlg")`
        background-color: #cffe42;
    `};
    ${mq("lg")`
        background-color: #3b83c2;
    `};
    ${mq("md")`
        background-color: #7a14c2;
    `};
    ${mq("sm")`
        background-color: #3e0126;
    `}; */


`;

function Hero(props){
    const data = props.children
    return(
        <Grid>
            <LargeTitle>
                <VerticalList>
                    {data.name}
                </VerticalList>
            </LargeTitle>
            <Paragraph>
                <VerticalList>
                    {data.contact}
                </VerticalList>
            </Paragraph>
        </Grid>
    );
}

export default Hero;