import React from "react";
import {H1, Section} from "./Styled";

function Header(props){
    return(
        <Section>
            <H1>{props.basic.name}</H1>
            <ul>
                <li>{props.basic.email}</li>
                <li>{props.basic.github}</li>
                <li>{props.basic.phone}</li>
            </ul>
        </Section>
    );
}

export default Header;