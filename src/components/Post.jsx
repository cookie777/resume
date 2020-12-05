import React from "react";
import {Section,H2,H3,Text,SubText} from "./Styled";
import styled from 'styled-components';
import List from "./List";

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
                            <H3>{content.secondTitle}</H3>
                            <SubText>{content.term}</SubText>
                            <Text>{content.text}</Text>
                        </Item>
                    )
                })}
            </div>

        </Grid>
    )
}

export default Post;
