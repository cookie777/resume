import React from "react";

function Header(props){
    return(
        <div>
            <h1>{props.basic.name}</h1>
            <ul>
                <li>{props.basic.email}</li>
                <li>{props.basic.github}</li>
                <li>{props.basic.phone}</li>
            </ul>
        </div>
    );
}

export default Header;