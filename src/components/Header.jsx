import React from "react";
import List from "./List";
import {H1, Section, Text} from "./Styled";
import styled from 'styled-components';

const Grid = styled.div`
    display: grid;
    grid-auto-flow: column;
    grid-template-columns: repeat(2, auto);
    justify-content: space-between;
    column-gap: 1rem;
`;

function Header(props){
    return(
        <Section>
            <Grid>
                <H1>
                    <List list={props.basic.name}/> 
                </H1>
                <Text>
                    <List list={props.basic.contact}/> 
                </Text>
                
            </Grid>
        </Section>
    );
}

export default Header;