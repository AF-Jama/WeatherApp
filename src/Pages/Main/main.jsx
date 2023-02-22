import React,{useState,useEffect} from "react";
import Header from "../../Components/Header";
import SearchCard from "../../Components/SearchCard";
import './main.css';


const Main = ()=>{




    return (
        <div id="main-container">
            <Header/>

            <main>
                <SearchCard/>
            </main>
        </div>
    )
}



export default Main;