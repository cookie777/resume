import React from "react";

import styled from 'styled-components';
import {GlobalStyle} from "./Styled";

import data from "../data.json";

import Header from "./Header";
import Post from "./Post";

const Grid = styled.div`
        display:grid;
        grid-auto-flow: column;
        column-gap: 7rem;
        grid-template-columns:4fr 5fr;
        grid-template-rows: auto auto;

`;

function App(){
    return(
        <React.Fragment>
            <GlobalStyle/>
            <Header basic={data.basic} />
            <Grid>
                {data.article.map((section,id)=>{
                    return(
                        <Post article={section} key={id}/>
                    )                
                })}
            </Grid>

        </React.Fragment>
    );
}

export default App;