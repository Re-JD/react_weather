import React from 'react';
import styled from 'styled-components';

function LocalBox () {
    const city = ["Seoul", "Busan", "Daegu", "Incheon", "Gwangju", "Daejeon", 
    "Ulsan", "Sejong", "Gyeonggi", "Gangwon", "Jeju", 
    "Chungcheongbuk", "Chungcheongnam", "Jeollabuk", "Jeollanam", "Gyeongsangbuk",
    "Gyeongsangnam"];


    return (
        <>
        <Kmap_Seoul/>
        </>
    );
}

const Kmap_Seoul = styled.div`
    top : 17%;
    left : 37%;
    background-color: gray;
    width: 50px;
    height: 50px;
`;

export default LocalBox;