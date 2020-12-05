import React from "react";
import styled from 'styled-components';
import {GlobalStyle} from "./Styled";

import data from "../data.json";

import Header from "./Header";
import Posts from "./Posts";

const Paper = styled.div`
    max-width: 1080px;
    max-height: calc(1080px*1.2941);
    margin: 4rem auto;
    padding: 5rem 7rem;
    background-color:#f6f8f9;
    /* box-shadow: -5px -5px 30px 5px red, 5px 5px 30px 5px blue; */
    box-shadow: rgba(0, 0, 0, 0.15) 0px 2px 8px;
    background-image: url("https://www.transparenttextures.com/patterns/lined-paper-2.png");
    position: relative;
    /* &::before {    
        content: "";
        background-image: url("https://www.transparenttextures.com/patterns/lined-paper-2.png");
        position: absolute;
        top: 0px;
        right: 0px;
        bottom: 0px;
        left: 0px;
        opacity: 0.75;
    } */
    
`;

function App(){
    return(
        <React.Fragment>
            <GlobalStyle/>
            <Paper>
                <Header basic={data.basic} />
                {data.post.map((val,id)=>{return(<Posts post={val} key={id}/>)})}
            </Paper>
        </React.Fragment>
    );
}

export default App;

//Grid for patter1
// const Grid = styled.div`
//         display:grid;
//         grid-auto-flow: column;
//         grid-template-columns:4fr 5fr;
//         grid-template-rows: repeat(3,auto);
//         section {
//             &:last-child{
//                 grid-row-start: 2;
//                 grid-row-end: span 2;
//             }
//         }
//         column-gap: 7rem;
// `;