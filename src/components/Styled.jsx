import { createGlobalStyle }  from 'styled-components';
import { reset } from 'styled-reset'

const styledVariables = {
        "primary-color":"#FFFFFF",
        "secondary-color":"#131516",
        "secondary-color-l":"#373D3F",
        "secondary-color-l-ex":"#707480",
};

const GlobalStyle = createGlobalStyle`
        ${reset}

        * { 
                /* outline: 2px solid rgba(218, 65, 65, 0.426);
                outline-offset: -1px; */
                box-sizing: border-box;
        }
        html{
                background-color:${styledVariables["primary-color"]};
                background-color:whitesmoke;
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


export {GlobalStyle,styledVariables};