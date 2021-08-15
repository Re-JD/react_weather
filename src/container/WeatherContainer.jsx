import React from 'react';
import styled from 'styled-components';
import WeatherBox from '../components/weatherbox';

function WeatherContainer() {

    return (
        <TotalWeatherContainer>
            <WeatherBox/>
            <WeatherBox/>
            <WeatherBox/>
            <WeatherBox/>
            <WeatherBox/>
            <WeatherBox/>
            <WeatherBox/>
        </TotalWeatherContainer>
    );
}

const TotalWeatherContainer = styled.div`
    display: flex;
    width: 100vw;
    margin-top: 20px;
`;
export default WeatherContainer;