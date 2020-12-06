import React from 'react';
import styled from 'styled-components';
import HorizontalList from '../../atoms/list/HorizontalList';
import SmallTitle from '../../atoms/title/SmallTitle';

const Card = styled.div`
    margin-bottom: 1.5rem;
    &:last-child{
        margin-bottom: 0;
    }
`;

function ListCard(props){
    const data = props.children;
    return(
        <Card>
            <SmallTitle>
                {data.smallTitle}
            </SmallTitle>
            <HorizontalList>
                {data.description}
            </HorizontalList>
        </Card>
    );
}

export default ListCard;