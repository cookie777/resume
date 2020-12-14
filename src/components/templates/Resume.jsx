import React from 'react';
import styled from 'styled-components';
import Hero from '../organisms/hero/Hero';
import ListArticle from '../organisms/article/ListArticle';
import DescriptionArticle from '../organisms/article/DescriptionArticle';
import { mq } from '../../style/MediaQuery';


const Paper = styled.div`
    max-width: 1080px;
    min-width: 300px;
    max-height: max(calc(1080px * 1.2941), calc(1080px * 1.2941 + calc( 1080px - 100vw )* 100));
    margin: 4rem max(1rem, calc((100vw - 1080px)/2));
    padding: 5rem 7rem;
    background-color:#f1f5f7;
    box-shadow: rgba(0, 0, 0, 0.15) 0px 2px 8px;
    background-image: url("https://www.transparenttextures.com/patterns/lined-paper-2.png");
    position: relative; 
    ${mq("lg")`
        max-height: none;
    `};   
    ${mq("md")`
        padding: 4rem 2rem;
    `};   
`;

function Resume(props){
    const data = props.children;
    return(
        <Paper>
            <Hero>
                {data.basic}
            </Hero>
            {data.post.map((article,id)=>{
                return(
                    (article.title === "Skills") ?
                            <ListArticle key={id}>
                                {article}
                            </ListArticle>
                        :
                            <DescriptionArticle key={id}>
                                {article}
                            </DescriptionArticle>
                );
            })}
        </Paper>
    );
}

export default Resume;