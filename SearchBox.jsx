import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import './SearchBox.css'
import { useState } from 'react';
function SearchBox({cityData}){

    let [city,setCity]=useState("");
    let [error,setError]=useState(false);

    //website->openweathermap.org/current
    const URL="https://api.openweathermap.org/data/2.5/weather";
    const APIKey="1756dbcf2cebe769a9887fb24f109e59";

    async function responseGenerator(){
        
        try{
            const cityURL=`${URL}?q=${city}&appid=${APIKey}&units=metric`;
            let response=await fetch(cityURL);
            let jsonResponse=await response.json();
            // console.log(jsonResponse);
            return jsonResponse;
        }catch(error)
        {
            throw error;
        }
    }

    function cityHandler(event){
        setCity(event.target.value)
    }

    async function submitHandler(event){
        event.preventDefault();
        // console.log(city);
        setCity("");
        try{
            let response=await responseGenerator();
            // let necessaryInfo=getCityInfo(response);
            // cityData(necessaryInfo);
            if(response.cod!==200) 
            {
                setError(true);
                cityData("");// Clear previous InfoBox data
            } 
            else
            {
                let necessaryInfo=getCityInfo(response);
                cityData(necessaryInfo);
            }
        }
        catch(error)
        {
            setError(true);
        }
    }

    function printmsg()
    {
        // setCity("");
        return <p style={{ color: "black",fontWeight:'bold' }}>No such city exists in this API</p>;
    }

    function getCityInfo(response){
        // console.log(response);
        let result={
            city:city,
            temp:response.main.temp,
            maxTemp:response.main.temp_max,
            minTemp:response.main.temp_min,
            feelsLike:response.main.feels_like,
            humidity:response.main.humidity,
            description:response.weather[0].description,
            pressure:((response.main.pressure*100)/101325).toFixed(4),
            wind:response.wind.speed
        }
        // console.log(result);
        return result;
    }

    return(
        <div className='SearchBox'>
            <h2>Weather App</h2>
            <form onSubmit={submitHandler}>
                <TextField id="city" 
                label="City Name" 
                variant="outlined" 
                required
                value={city}
                onChange={cityHandler} style={{border:"red"}}/>
                <br/>
                <br/>
                <Button variant="contained" type="submit" endIcon={<SendIcon />}>
                    Submit
                </Button>
                <br/>
                {error?printmsg():""}
            </form>
        </div>
    )
}

export default SearchBox;