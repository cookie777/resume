import React from 'react';
import styled,{ createGlobalStyle }  from 'styled-components';
import { reset } from 'styled-reset'

const styledVariables = {
    "primary-color":"#FFFFFF",
    "secondary-color":"#131516",
    "secondary-color-l":"#373D3F",
    "secondary-color-l-ex":"#707480",
    "accent-color":""
};

const GlobalStyle = createGlobalStyle`
    ${reset}
    @import url('https://fonts.googleapis.com/css2?family=Oswald:wght@700&display=swap');
    @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital@0;1&display=swap');
        
    html{
        * { 
            outline: 2px solid rgba(218, 65, 65, 0.426);
            outline-offset: -1px;
        }
        font-size:16px;

    }
    body {
        font-size: 1em;
        font-weight: 400;
        text-align: left;
        font-family: 'Playfair Display', serif;
        color: ${styledVariables["secondary-color-l"]};
    }
`;

const H1 = styled.h1`
        margin-bottom: 2rem;
        font-size: 4rem;
        font-weight: 700;
        font-family: Oswald, sans-serif;
        color: ${styledVariables["secondary-color"]};
        
`;
const H2 = styled.h2`
        margin-bottom: 1.5rem;
        font-size: 3rem;
        font-weight: 700;
        font-family: Oswald, sans-serif;
        color: ${styledVariables["secondary-color"]};
`;
const H3 = styled.h3`
        margin-bottom: 1rem;
        font-size: 1.125rem;
        font-weight: 700;
        font-family: Oswald, sans-serif;
        color: ${styledVariables["secondary-color"]};
`;

const Text = styled.p`
        margin-bottom: 1rem;
`;

const SubText = styled.p`
        margin-bottom: 0.5rem;  
        font-size: 0.875rem;
        font-style: italic;
        color: ${styledVariables["secondary-color-l-ex"]};
`;

const Section = styled.section`
        margin-bottom:2.5rem;
`;


export {GlobalStyle, Section, H1,H2,H3,Text,SubText};