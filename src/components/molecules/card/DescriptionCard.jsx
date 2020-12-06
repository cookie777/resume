import React from 'react';
import styled from 'styled-components';
import Paragraph from '../../atoms/text/Paragraph';
import Supplement from '../../atoms/text/Supplement';
import SmallTitle from '../../atoms/title/SmallTitle';

const Card = styled.div`
    margin-bottom: 1.5rem;
    &:last-child{
        margin-bottom: 0;
    }
`;

function DescriptionCard(props){
    const data = props.children;
    return(
        <Card>
            <SmallTitle>
                {data.smallTitle}
            </SmallTitle>
            <Supplement>
                {data.supplement}
            </Supplement>
            <Paragraph>
                {data.description}
            </Paragraph>
        </Card>
    );
}

export default DescriptionCard;