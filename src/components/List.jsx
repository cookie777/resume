import React from "react";
import {Text} from "./Styled";

// display array data as list with new line
function List(props){
    return(
        <React.Fragment>
            {props.list.map((val,id)=>{
                return(
                    <React.Fragment key={id}>
                        {val}
                        <br/>
                    </React.Fragment>
                )
            })}
        </React.Fragment>   
        
    
    );
}

export default List;