import React from "react";
import Header from "./Header";
import Article from "./Article";
import data from "../data.json";

function App(){
    return(
        <div>
            <Header basic={data.basic} />
            <Article article={data.article[0]}/>
        </div>
    );
}

export default App;