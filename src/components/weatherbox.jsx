import React from 'react';
import styled from 'styled-components';

function WeatherBox() {
    
    return (
        <Container>
            <p>날짜</p>
            <p>온도</p>
            <p>최고온도</p>
            <p>최저온도</p>
        </Container>
    );
}

const Container = styled.div`
    background-color: #5AD2FF;
    width: 10vw;
    text-align: center;
    margin : 10px;
    padding: 10px;
`;



export default WeatherBox;