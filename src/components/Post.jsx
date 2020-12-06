import React from "react";
import {Section,H2,H3,Text,SubText} from "./Styled";
import styled from 'styled-components';
import List from "./List";
import Paragraph from "./atoms/text/Paragraph";
import Supplement from "./atoms/text/Supplement";
import DescriptionCard from "./molecules/card/DescriptionCard";

const Grid = styled(Section)`
    display:grid;
    grid-auto-flow:column;
    grid-template-columns: 3fr 7fr;
    column-gap: 7rem;
`;

const Item = styled.div`
    margin-bottom: 1.5rem;
    &:last-child{
        margin-bottom: 0;
    }
`;

function Post(props){
    // console.log(props.post)
    return(
        <Grid>
            <H2>{props.post.title}</H2>
            <div>
                {props.post.contents.map((content, id)=>{
                    return(
                        <Item key={id}>
                            <DescriptionCard>
                                {content}
                            </DescriptionCard>
                        </Item>
                    )
                })}
            </div>

        </Grid>
    )
}

export default Post;
