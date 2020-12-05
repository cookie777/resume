import React from "react";
import styled from 'styled-components';
import {GlobalStyle} from "./Styled";

import data from "../data.json";

import Header from "./Header";
import Post from "./Post";

const Paper = styled.div`
    max-width: 1080px;
    max-height: calc(1080px*1.2941);
    margin: 4rem auto;
    padding: 2.5rem 7rem;
    background-color:#f5f6f9;
`;

function App(){
    return(
        <React.Fragment>
            <GlobalStyle/>
            <Paper>
                <Header basic={data.basic} />
                {data.post.map((val,id)=>{return(<Post post={val} key={id}/>)})}
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