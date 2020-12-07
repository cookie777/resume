import React from 'react';
import styled from 'styled-components';
import { mq } from '../../../style/MediaQuery';
import MediumTitle from '../../atoms/title/MediumTitle';
import ListCard from '../../molecules/card/ListCard';

const Grid = styled.div`
    margin-bottom:3rem;
    display:grid;
    grid-auto-flow:column;
    grid-template-columns: 2fr 7fr;
    column-gap: 7rem;
    ${mq("lg")`
        grid-template-columns: 1fr;
        grid-auto-flow: row;
    `};
`;

function ListArticle(props){
    const data = props.children;
    return(
        <Grid>
            <MediumTitle>
                {data.title}
            </MediumTitle>
            <div>
                {data.contents.map((content, id)=>{
                    return(
                        <ListCard key={id}>
                            {content}
                        </ListCard>
                    )
                })}
            </div>
        </Grid>
    );
}

export default ListArticle;