import { Fragment, useState } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function HomePage(){
    const [city, setCity] = useState("");
    const [state, setState] = useState("");
    const [country, setCountry] = useState("");

    const navigate = useNavigate();

    const cityChange = (e) => {
        setCity(e.target.value);
    }

    const stateChange = (e) => {
        setState(e.target.value);
    }

    const countryChange = (e) => {
        setCountry(e.target.value);
    }

    const handleSubmission = async (e) => {
        e.preventDefault();

        const form = new FormData();
        form.append('city', city);
        form.append('state', state);
        form.append('country', country);

        const response = await axios.post("http://localhost:8080/weather/data", form);
        console.log(response.data);

        localStorage.setItem("temp", response.data.temperature);
        localStorage.setItem("feels", response.data.feels_like);
        localStorage.setItem("code", response.data.code);
        localStorage.setItem("humid", response.data.humidity);
        localStorage.setItem("timezone", response.data.timezone);
        localStorage.setItem("wind_dir", response.data.wind_direction);
        localStorage.setItem("wind_spd", response.data.wind_speed);
        localStorage.setItem("location", response.data.location);
        localStorage.setItem("weather", response.data.weather);
        navigate('/weather/data')
    }

    return (
        <Fragment> 
            <h1>Weather App!</h1>
            <form onSubmit={handleSubmission}>
                <div id="weather_form">
                    <label>Enter City: </label>
                    <input required type="text" name="city" value={city} onChange={cityChange}/>
                    <br />
                    <label>Enter State (optional): </label>
                    <input type="text" name="state" value={state} onChange={stateChange}/>
                    <br />
                    <label>Enter Country: </label>
                    <input required type="text" name="country" value={country} onChange={countryChange}/>
                    <br />
                    <br />
                    <button type='submit' className="btn btn-success">Get Weather Data</button>
                </div>
            </form>
        </Fragment>
    )
}

export default HomePage