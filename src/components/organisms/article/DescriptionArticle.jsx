import React from 'react';
import styled from 'styled-components';
import { mq } from '../../../style/MediaQuery';
import MediumTitle from '../../atoms/title/MediumTitle';
import DescriptionCard from '../../molecules/card/DescriptionCard';



const Grid = styled.div`
    margin-bottom:3rem;
    display:grid;
    grid-auto-flow:column;
    grid-template-columns: 2fr 7fr;
    column-gap: 7rem;
    ${mq("lg")`
        display: block;
    `};
`;

function DescriptionArticle(props){
    const data = props.children;
    return(
        <Grid>
            <MediumTitle>
                {data.title}
            </MediumTitle>
            <div>
                {data.contents.map((content, id)=>{
                    return(
                        <DescriptionCard key={id}>
                            {content}
                        </DescriptionCard>
                    )
                })}
            </div>
        </Grid>
    );
}

export default DescriptionArticle;