import axios from "axios";
import React, { useState } from "react";
import { Grid, Button, TextField, Alert } from '@mui/material';
import WeatherCard from "../../components/WeatherCard";

const Home = () => {
  const [cityName, setCityName] = useState("");
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState(null);

  const handleInputChange = (event) => {
    setCityName(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    axios.get(`api/weather?city=${cityName}`)
      .then(response => {
        setWeatherData(response.data.data);
        setError(null);
      })
      .catch(error => {
        setError(error.response.data.error);
        setWeatherData(null);
      });
  }

  return (
    <>
      {error && <Alert severity="error">{error}</Alert>}

      <Grid container direction="column" justifyContent="center" alignItems="center" spacing={4}>
        <Grid item xs={12}>
          <h1>Weather Forecast</h1>
        </Grid>

        <Grid item xs={12}>
          <form onSubmit={handleSubmit}>
            <TextField 
              id="outlined-basic"
              label="Enter City"
              variant="outlined"
              style={{ margin: '10px' }}
              value={cityName}
              onChange={handleInputChange}
            />
            <Button
              variant="outlined" 
              color="secondary" 
              size="large"
              style={{ margin: '15px' }}
              type="submit">
              Get Weather
            </Button>
          </form>
        </Grid>

        {weatherData && (
          <Grid item xs={12}>
            <WeatherCard
              title={weatherData.city}
              content={
                <>
                  <p>Temperature: {weatherData.temperature}&deg;F</p>
                  <p>Description: {weatherData.description}</p>
                </>
              }
            />
          </Grid>
        )}
      </Grid>
    </>
  );
}

export default Home;
