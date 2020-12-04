import React from "react";
import {Section,H2,H3,Text,SubText} from "./Styled";
import styled from 'styled-components';



function Post(props){
    const Grid = styled.div`
        display:grid;
        grid-auto-flow:row;
        grid-template-columns: 1fr 1fr;
        column-gap: 1rem;
    `;

    if (props.post.title == "Skills"){
        return(
            <Section className={props.className}>
                <H2>{props.post.title}</H2>
                <Grid>
                    {props.post.contents.map((content, id)=>{
                        return(
                            <div key={id}>
                                <H3>{content.secondTitle}</H3>
                                <SubText>{content.term}</SubText>
                                <Text>
                                    {content.text.map(skill=><div>{skill}<br/></div>)}
                                </Text>
                            </div>
                        )
                    })}
                </Grid>
            </Section>
        )
    }else{
        return(
            <Section className={props.className}> 
                <H2>{props.post.title}</H2>             
                {props.post.contents.map((content, id)=>{
                    return(
                        <div key={id}>
                            <H3>{content.secondTitle}</H3>
                            <SubText>{content.term}</SubText>
                            <Text>{content.text}</Text>
                        </div>
                    )
                })}
            </Section>
        )
    }
}

export default Post;
