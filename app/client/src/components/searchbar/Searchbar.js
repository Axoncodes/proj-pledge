import React, {useState, useEffect} from "react";
import { Link } from "react-router-dom";

import SearchItem from "./SearchItem";

import './style.css'

export default function Searchbar() {

    const [allSearchable, setAllSearchable] = useState([])
    const [searchTerm, setSearchTerm] = useState('')
    const [searchTitle, setSearchTitle] = useState([])
    const [searchTag, setSearchTag] = useState([])
    const [searchCat, setSearchCat] = useState([])

    const changeHandler = event => {
        let value = event.target.value;
        setSearchTerm( value )
    }

    async function getSearches() {
        var arr = { names:[], tags:[], cats:[] }
        const response = await fetch('http://localhost:5000/api/search');
        const search  = await response.json();
        await search.map((key, data)=>{
            arr.names.push(key["name"])
            arr.tags.push(key["tag"])
            arr.cats.push(key["category"])
        })
        setAllSearchable(arr)
    }

    useEffect(() => {
        // getSearches() 
    },[]);


    useEffect(() => {

        // manage search results
        if(Object.keys(allSearchable).length) {
            const titleResults = allSearchable.names.filter(name=>name.toLowerCase().includes(searchTerm.toLowerCase()))
            const tagResults = allSearchable.tags.filter(tag=>tag.toLowerCase().includes(searchTerm.toLowerCase()))
            const catResults = allSearchable.cats.filter(cat=>cat.toLowerCase().includes(searchTerm.toLowerCase()))
            setSearchTitle(titleResults);
            setSearchTag(tagResults);
            setSearchCat(catResults);
        }
        
    }, [searchTerm])

    return(

        <section id="searchbar">
            <div id="searchform_cover">
                <svg id="search_icon" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0z" fill="none"/><path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/></svg>
                <input type="search" onChange={changeHandler} value={searchTerm} placeholder="Search for" id="searchform"/>
                <div id="search_result" >
                    <SearchItem searchTerm={searchTerm} searchItem={searchTitle} searchTitle="Results" />
                    <SearchItem searchTerm={searchTerm} searchItem={searchTag} searchTitle="Tags" />
                    <SearchItem searchTerm={searchTerm} searchItem={searchCat} searchTitle="Cats" />
                </div>
            </div>
            
        </section>

    )

}