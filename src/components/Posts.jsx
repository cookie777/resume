import React from "react";
import styled from 'styled-components';
import ListArticle from "./organisms/article/DescriptionArticle";
import DescriptionArticle from "./organisms/article/DescriptionArticle";


function Posts(props){
    if (props.post.title === "Skills"){
        return(
            <ListArticle>
                {props.post}
            </ListArticle>
        );        
    }else{
        return(
            <DescriptionArticle>
                {props.post}
            </DescriptionArticle>
        );
    }
}

export default Posts;
