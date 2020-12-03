import React from "react";

import styled from 'styled-components';
import {GlobalStyle} from "./Styled";

import data from "../data.json";

import Header from "./Header";
import Article from "./Article";

const Articles = styled(Article)`
    color: palevioletred;
    margin-bottom: 2.5rem;
`;



function App(){
    return(
        <React.Fragment>
            <GlobalStyle/>
            <Header basic={data.basic} />
            {data.article.map((section,id)=>{
                return(
                    <Articles article={section} key={id}/>
                )                
            })}
            <Articles article={data.article[0]}/>
        </React.Fragment>
    );
}

export default App;