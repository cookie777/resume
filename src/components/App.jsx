import React from "react";
import styled from 'styled-components';
import {GlobalStyle} from "./Styled";

import data from "../data.json";

import Hero from "./organisms/hero/Hero";
import Posts from "./Posts";

const Paper = styled.div`
    max-width: 1080px;
    max-height: calc(1080px*1.2941);
    margin: 4rem auto;
    padding: 5rem 7rem;
    background-color:#f6f8f9;
    box-shadow: rgba(0, 0, 0, 0.15) 0px 2px 8px;
    background-image: url("https://www.transparenttextures.com/patterns/lined-paper-2.png");
    position: relative;    
`;

function App(){
    return(
        <React.Fragment>
            <GlobalStyle/>
            <Paper>
                <Hero>
                    {data.basic}
                </Hero>
                {data.post.map((val,id)=>{return(<Posts post={val} key={id}/>)})}
            </Paper>
        </React.Fragment>
    );
}

export default App;