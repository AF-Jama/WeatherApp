import React,{useState,useEffect} from "react";
import openWeatherLogo from '../../assets/weather.png';
import './Header.css';


const Header = ()=>{
    // const [visibility,setVisibility] = useState(false); // set visibility state

    // const navLinksContainer = useRef();


    return (
        <header>
            <div id="inner-header-container">
                <img id="header-logo" src={openWeatherLogo} alt="" />

                {/* <nav>
                    <div id="nav-links">
                        <a href="https://openweathermap.org/api" target='_blank' className="nav-link" id="home-link">Open Weather API</a>
                        <a href="https://github.com/AF-Jama" target='_blank' className="nav-link" id="api-link">Github</a>
                    </div>
                </nav> */}
            </div>
        </header>
    )
}


export default Header;