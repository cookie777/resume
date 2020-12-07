// Display each item of the array in horizontal way.
// Elements are wrapped if width is small. 
// Each elements is defined as "div" to set margin.
// Thus, you can not wrap any inline elements
// ex, this is bad usage!!!
// <p>
//     <HorizontalList>
//         {ArrData}
//     </HorizontalList>
// </p>

import React from "react";
import styled from 'styled-components';

const Flex = styled.div`
    display:flex;
    flex-wrap: wrap;
    gap: 1rem;
    & > div{
        margin-right: 1rem;
    }
`;

function HorizontalList(props){
    const arr = props.children;
    return(
        <Flex>
            {arr&&arr.map((element, id)=>{
                return(
                    <div key={id}>
                        {element}
                    </div>
                );
            })}
        </Flex>
    );
}

export default HorizontalList;