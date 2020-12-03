import React from "react";
import {H1} from "./Styled";

function Header(props){
    return(
        <div>
            <H1>{props.basic.name}</H1>
            <ul>
                <li>{props.basic.email}</li>
                <li>{props.basic.github}</li>
                <li>{props.basic.phone}</li>
            </ul>
        </div>
    );
}

export default Header;