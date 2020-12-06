import React from "react";
import List from "./List";
import {H1, Section, Text} from "./Styled";
import styled from 'styled-components';
import LargeTitle from "./atoms/title/LargeTitle";
import HorizontalList from "./atoms/list/HorizontalList";

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
                <LargeTitle>
                    <HorizontalList>
                        {props.basic.name}
                    </HorizontalList> 
                </LargeTitle>
                <Text>
                    <List list={props.basic.contact}/> 
                </Text>
                
            </Grid>
        </Section>
    );
}

export default Header;