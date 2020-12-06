import React from "react";
import {Text} from "./Styled";


// display array data as list with new line
function List(props){
    const arr = props.children;
    return(
        <div>
            {arr && arr.map((val,id)=>{
                return(
                    <React.Fragment key={id}>
                        {val}
                        <br/>
                    </React.Fragment>
                )
            })}
        </div>   
        
    
    );
}

export default List;