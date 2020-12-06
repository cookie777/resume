import React from "react";
import styled from 'styled-components';
import {styledVariables} from '../../Styled';

const P = styled.p`
    margin-bottom: 0.5rem;  
    font-size: 0.875rem;
    font-style: italic;
    color: ${styledVariables["secondary-color-l-ex"]};
    
`;

function Supplement(props){
    return(
        <P>{props.children}</P>
    );
}

export default Supplement;