import React from "react";
import {Section,H2,H3,Text,SubText} from "./Styled";
import styled from 'styled-components';
import List from "./List";

const Grid = styled(Section)`
    display:grid;
    grid-auto-flow:column;
    grid-template-columns: 2fr 7fr;
    column-gap: 7rem;
`;


function Post(props){

    const Items = styled.div`
        /* activate only skills post */
        ${props.post.title === "Skills"&&`
            display:grid;
            grid-auto-flow:row;
            grid-template-columns: repeat(2, auto);
            justify-content: space-between;
            column-gap: 1rem;
        `}
    `;

    const Item = styled.div`
        margin-bottom: 1.5rem;
        &:last-child{
            margin-bottom: 0;
        }
        /* activate only skills post */
        ${props.post.title === "Skills"&&`
            margin-bottom: 0;
        `}
    `;

    return(
        <Grid>
            <H2>{props.post.title}</H2>
            <Items>
                {props.post.contents.map((content, id)=>{
                    return(
                        <Item key={id}>
                            <H3>{content.secondTitle}</H3>
                            <SubText>{content.term}</SubText>
                            <Text>
                                {props.post.title === "Skills" ? <List list={content.text}/>: content.text}
                            </Text>
                        </Item>
                    )
                })}
            </Items>
        </Grid>
    )
}

export default Post;
