import React,{useState,useEffect,useRef} from "react";
import useFetch from "../../customHooks/useFetch";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch,faLocationPin,faMagnifyingGlass,faWind,faDroplet } from "@fortawesome/free-solid-svg-icons";
import notFound from '../../assets/not_found.png';
import sunshine from '../../assets/sunshine.png';
import './SearchCard.css';


const SearchCard = (props)=>{
    const [query,setQuery] = useState(''); // set query state
    const { data,error,loading } = useFetch(`https://api.openweathermap.org/data/2.5/weather?q=${query}&appid=${process.env.REACT_APP_APIKEY}&units=metric`);

    const searchCardContainer = useRef();

    const onSearchClick = (event)=>{
        event.preventDefault();

        console.log("CLICKED");

        if(data){
            // triggered if data evaluates to true 
            console.log("SUCCESFUL");
            searchCardContainer.current.style.maxHeight="1000px";
            return;
        }
        searchCardContainer.current.style.maxHeight="50px";
    }

    return (
        <div id="search-card-container" ref={searchCardContainer}>
            <div id="search-container">
                <div id="location-icon-container">
                    <FontAwesomeIcon icon={faLocationPin} size="2x"/>
                </div>
                <div className="input-group">
                    <input id="country-search" type="text" onChange={(event)=>setQuery(event.target.value)} />
                </div>

                <div id="search-icon-container">
                    <FontAwesomeIcon icon={faMagnifyingGlass} size="2x" onClick={onSearchClick}/>
                </div>
            </div>

            {(!data||error) &&
            
            <div id="not-found-container">
                <img src={notFound} alt="" />
                <h2>Not Found!</h2>
            </div>
            }

            {data && 
            
            <div id="sunshine-container">
                <img src={sunshine} alt="" />

                <div id="data-container">
                    <h1>{data.main.temp} <sup>o</sup></h1>
                    <p>{data.weather[0].description}</p>

                    <div id="weather-data">
                        <div id="humidity-container">
                            <FontAwesomeIcon icon={faDroplet} size="2x"/>
                            <div id="humidity-data">
                                <p className="data">{data.main.humidity}%</p>
                            </div>
                        </div>

                        <div id="wind-container">
                            <FontAwesomeIcon icon={faWind} size="2x"/>
                            <div id="wind-data">
                                <p className="data">{data.wind.speed} mph</p>
                            </div>
                        </div>                        
                    </div>
                </div>
            </div>
        
        }

        </div>
    )
}



export default SearchCard;