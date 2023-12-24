import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDroplet,faWind,faTemperatureArrowUp,faTemperatureArrowDown} from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'
import search_icon from '../assets/search.png';
import sun_icon from '../assets/sun.png';
import logo_icon from '../assets/logo.png';
import cloud_icon from '../assets/cloud.png';
import ncloud_icon from '../assets/nicloud.png';
import dcloud_icon from '../assets/dacloud.png';
import drizzle_icon from '../assets/drizzle.png';
import storm_icon from '../assets/thunderstorm.png';
import mist_icon from '../assets/mist.png';
import moon_icon from '../assets/moon.png';
import rain_icon from '../assets/rain.png';
import snow_icon from '../assets/snow.png';
export default function Weather() {
    let api_key="212c6976b87faea7b5da1d3d1ca788a2";
    const[wicon,setWicon]=useState(cloud_icon)
    const search= async ()=>{
        const element =document.getElementsByClassName("cityInput")
        if(element[0].value===''){
            return 0;
        }
        let url =`https://api.openweathermap.org/data/2.5/weather?q=${element[0].value}&units=Metric&appid=${api_key}`;
        let response= await fetch(url);
        let data = await response.json()
        const humidity =document.getElementsByClassName("humidity");
        const wind =document.getElementsByClassName("wind");
        const temp =document.getElementsByClassName("temp");
        const tempmax =document.getElementsByClassName("tempmax");
        const tempmin =document.getElementsByClassName("tempmin");
        const location =document.getElementsByClassName("location");
        humidity[0].innerHTML=data.main.humidity+"%";
        wind[0].innerHTML=Math.floor(data.wind.speed)+" km/h";
        temp[0].innerHTML=Math.floor(data.main.temp)+ "°C";
        tempmax[0].innerHTML=`${Math.floor(data.main.temp_max)}°C`;
        tempmin[0].innerHTML=Math.floor(data.main.temp_min)+ "°C";
        location[0].innerHTML=data.name;
        if(data.weather[0].icon==='01d' ){
            setWicon(sun_icon)
        }
        else if(data.weather[0].icon==='01n'){
            setWicon(moon_icon)
        }
        else if(data.weather[0].icon==='02d' ){
            setWicon(dcloud_icon)
        }
        else if(data.weather[0].icon==='02n'){
            setWicon(ncloud_icon)
        }
        else if(data.weather[0].icon==='03d' || data.weather[0].icon==='03n' ){
            setWicon(cloud_icon)
        }
        else if(data.weather[0].icon==='04d' || data.weather[0].icon==='04n' ){
            setWicon(drizzle_icon)
        }
        else if(data.weather[0].icon==='09d' || data.weather[0].icon==='09n' ){
            setWicon(rain_icon)
        }
        else if(data.weather[0].icon==='10d' || data.weather[0].icon==='10n' ){
            setWicon(rain_icon)
        }
        else if(data.weather[0].icon==='11d' || data.weather[0].icon==='11n' ){
            setWicon(storm_icon)
        }
        else if(data.weather[0].icon==='13d' || data.weather[0].icon==='13n' ){
            setWicon(snow_icon)
        }
        else if(data.weather[0].icon==='50d' || data.weather[0].icon==='50n' ){
            setWicon(mist_icon)
        }
        else{
            setWicon(cloud_icon)
        }
        console.log('sss')
    }
    return(
        <>
       
        <div className="col-xl-6  pt-2 h-auto m-auto text-center container mt-4 rounded-3 bg-info ">
           <img src={logo_icon} alt="" width={'120px'} className="" />
            <div className="d-flex pb-5 justify-content-center gap-2 pt-4"> 
            
            <input type="text" placeholder="Search" className="d-flex focus-ring fs-5 bold cityInput  bg-light text-secondary py-2 ps-3 w-50 border-0 rounded-4" />
                <a className="search-icon d-block" href="#" onClick={ ()=>{search()}}>
                    <img src={search_icon} className="d-flex justify-content-center align-items-center p-3 rounded-circle bg-light cursor-pointer" alt="" />
                </a>
            </div>
            <div className=" d-flex justify-content-center mt-0 mb-2">
                <img src={wicon} alt="" className="rounded-circle p-3 w-25 bg-dark"  />
            </div>
            <div className="d-flex justify-content-center">
                <div className="d-flex align-items-center fs-5">
                    <p className="tempmax fw-bold">22°C</p>
                    <FontAwesomeIcon icon={faTemperatureArrowUp} className="mb-3 ms-1" />
                </div>
                <div className="temp text-dark fs-1 fw-bold mx-5">20°C</div>
                <div className="d-flex align-items-center fs-5">
                    <p className="tempmin fw-bold">5°C</p>
                    <FontAwesomeIcon icon={faTemperatureArrowDown} className="mb-3 ms-1 " />
                </div>
                
                
            </div>
            <div className="d-flex justify-content-center text-dark fs-3 fw-bold location">Oujda</div>
            <div className="mt-4 text-dark d-flex justify-content-center">
                <div className="m-auto d-flex align-items-start gap-2">
                
                    <FontAwesomeIcon icon={faDroplet} className="mt-2 fs-2" />
                    <div className="fs-4 fw-bolder">
                        <div className="humidity">64%</div>
                        <div className="fs-6 ">Humidity</div>
        

                    </div>
                </div>
                <div className="m-auto d-flex align-items-start gap-2">
                <FontAwesomeIcon icon={faWind} className="mt-2 fs-2" />

                    <div className="fs-4 fw-bolder">
                        <div className="wind">18 km/h</div>
                        <div className="fs-6 ">Wind Speed</div>
                    </div>
                </div>
                
            </div>
            <div className="text-dark mt-3 fw-bold p-1"><p>© 2023 Ismail Mhamdi</p></div>
        </div>
        </>
    
    )
}