import React, {useState, useEffect} from "react";
export default function SearchItem({searchTerm, searchItem, searchTitle}) {
    return(
        <div className={(searchTerm.length>0 && searchItem.length>0)?"show":"none"} style={{maxHeight:(searchTerm.length>0 && searchItem.length>0)?((searchItem.length*36)+19)+"px":"0px"}}>
            <span className="category">{searchTitle}</span>
            {searchItem.map((key, data)=>(
                <a key={"Results"+(data+1)} className="item" href="#">
                    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0z" fill="none"/><path d="M20 4H4c-1.11 0-1.99.89-1.99 2L2 18c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V6c0-1.11-.89-2-2-2zm0 14H4v-6h16v6zm0-10H4V6h16v2z"/></svg>
                    <span>{key}</span>
                </a>
            ))}
        </div>
    )
}