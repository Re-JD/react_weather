import React from 'react';
import styled from 'styled-components';
import LocalBox from './localbox';
import imgUrl from "../images/kmap.png";

function WeatherBox () {

    return (
        <BackImage>
            
        </BackImage>
    );
}

const BackImage = styled.div`
    width: 100vw;
    heigth: 100vh;
    background-image: `url('${imgUrl}')`;
`;

export default WeatherBox;