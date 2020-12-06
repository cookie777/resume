// Display each item of the array in vertical way.
// Each and the whole elements are not wrapped.
// You can wrap as any tag
// ex,
// <p>
//     <VerticalList>
//         {ArrData}
//     </VerticalList>
// </p> 


import React from "react";


function VerticalList(props){
    const arr = props.children;
    return(
        <React.Fragment>
            {/* to avoid undefined map */}
            {arr && arr.map((val,id)=>{
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


export default VerticalList;