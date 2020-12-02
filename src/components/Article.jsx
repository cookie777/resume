import React from "react";

function Article(props){
    return(
        <div>
            <h1>{props.article.title}</h1>
            {props.article.contents.map((content, id)=>{
                return(
                    <div key={id}>
                        <h2>{content.secondTitle}</h2>
                        <p>{content.term}</p>
                        <p>{content.text}</p>
                    </div>
                )
            })}
        </div>
    );
}

export default Article;
