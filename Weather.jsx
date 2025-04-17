import { useState } from "react";
import InfoBox from "./InfoBox";
import SearchBox from "./SearchBox";

function Weather(){

    //This is for displaying information in the InfoBox
    let [res,setInfo]=useState({
        city:"",
        temp:"",
        maxTemp:"",
        minTemp:"",
        feelsLike:"",
        humidity:"",
        description:"",
        pressure:"",
        wind:""
    })

    //This is for setting information in the InfoBox.It will fetch data from SearchBox and pass the info to InfoBox
    function setWeatherInfo(fetchedData){
        setInfo(fetchedData);
    }


    return(
        <div>
            <SearchBox cityData={setWeatherInfo}/>
            <InfoBox res={res}/>
        </div>
    )
}

export default Weather;