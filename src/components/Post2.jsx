import React from "react";
import {Section,H2,H3,Text,SubText} from "./Styled";
import styled from 'styled-components';
import List from "./List";

const Grid = styled(Section)`
    display:grid;
    grid-auto-flow:column;
    grid-template-columns: 3fr 7fr;
    column-gap: 7rem;
`;
const Item = styled.div`
    margin-bottom: 1.5rem;
    &:last-child{
        margin-bottom: 0;
    }
`;

const Flex = styled.div`
    display:flex;
    flex-wrap: wrap;
    & > div{
        margin-right: 2rem;
    }
`;

function Post2(props){
    return(
        <Grid>
            <H2>{props.post.title}</H2>
            <div>
                {props.post.contents.map((content, id)=>{
                    return(
                        <Item key={id}>
                            <H3>{content.secondTitle}</H3>
                            <Flex>
                                {content.text.map((val,id)=>{
                                    return(
                                        <div key={id}>
                                            {val}
                                        </div>
                                    )
                                })}
                            </Flex>
                        </Item>
                    )
                })}
            </div>
        </Grid>
    )
}

export default Post2;