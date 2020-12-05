import React from "react";
import styled from 'styled-components';
import Post from "./Post";
import Post2 from "./Post2";


function Posts(props){
    if (props.post.title === "Skills"){
        return(
            <Post2 post= {props.post}/>
        );        
    }else{
        return(
            <Post post={props.post}/>
        );
    }
}

export default Posts;
