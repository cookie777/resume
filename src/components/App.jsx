import React from "react";

import styled from 'styled-components';
import {GlobalStyle} from "./Styled";

import data from "../data.json";

import Header from "./Header";
import Post from "./Post";

const Grid = styled.div`
        display:grid;
        grid-auto-flow: column;
        grid-template-columns:4fr 5fr;
        grid-template-rows: repeat(3,auto);
        section {
            &:last-child{
                grid-row-start: 2;
                grid-row-end: span 2;
            }
        }
        column-gap: 7rem;
`;

function App(){
    return(
        <React.Fragment>
            <GlobalStyle/>
            <Header basic={data.basic} />
            <Grid>
                {data.post.map((val,id)=>{
                    return(
                        <Post post={val} key={id}/>
                    )                
                })}
            </Grid>

        </React.Fragment>
    );
}

export default App;