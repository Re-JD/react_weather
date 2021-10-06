import React from 'react';
import styled from 'styled-components';
import LocalBox from './localbox';
import './weather.css';


function WeatherBox () {

    return (
        <>
            <div className="MapImage">
                <LocalBox/>
            </div>
        </>
    );
}



export default WeatherBox;