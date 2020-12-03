import React from "react";
import {Section,H2,H3,Text,SubText} from "./Styled";


function Post(props){
    return(
        <Section className={props.className}>
            <H2>{props.article.title}</H2>
            {props.article.contents.map((content, id)=>{
                return(
                    <div key={id}>
                        <H3>{content.secondTitle}</H3>
                        <SubText>{content.term}</SubText>
                        <Text>{content.text}</Text>
                    </div>
                )
            })}
        </Section>
    );
}

export default Post;
