import React from 'react';
import styled from 'styled-components';
import MediumTitle from '../../atoms/title/MediumTitle';
import ListCard from '../../molecules/card/ListCard';

const Grid = styled.div`
    margin-bottom:3rem;
    display:grid;
    grid-auto-flow:column;
    grid-template-columns: 3fr 7fr;
    column-gap: 7rem;
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