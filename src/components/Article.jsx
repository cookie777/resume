import React from "react";
import {H1,H2,H3,SubText} from "./Styled";


function Article(props){
    return(
        <div className={props.className}>
            <H2>{props.article.title}</H2>
            {props.article.contents.map((content, id)=>{
                return(
                    <div key={id}>
                        <H3>{content.secondTitle}</H3>
                        <SubText>{content.term}</SubText>
                        <p>{content.text}</p>
                    </div>
                )
            })}
        </div>
    );
}

export default Article;
