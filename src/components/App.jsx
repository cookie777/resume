import React from "react";
import {GlobalStyle} from "../style/GlobalStyle";
import data from "../data.json";
import Resume from "./templates/Resume";

function App(){
    return(
        <React.Fragment>
            <GlobalStyle/>
            <Resume>
                {data}
            </Resume>
        </React.Fragment>
    );
}

export default App;