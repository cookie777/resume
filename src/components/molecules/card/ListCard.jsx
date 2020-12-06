import React from 'react';
import HorizontalList from '../../atoms/list/HorizontalList';
import Supplement from '../../atoms/text/Supplement';
import SmallTitle from '../../atoms/title/SmallTitle';

function ListCard(props){
    const data = props.children;
    return(
        <React.Fragment>
            <SmallTitle>
                {data.smallTitle}
            </SmallTitle>
            <HorizontalList>
                {data.description}
            </HorizontalList>
        </React.Fragment>
    );
}

export default ListCard;