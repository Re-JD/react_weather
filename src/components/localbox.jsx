import React from 'react';
import styled from 'styled-components';

function LocalBox () {
    const city = ["Seoul", "Busan", "Daegu", "Incheon", "Gwangju", "Daejeon", 
    "Ulsan", "Sejong", "Gyeonggi", "Gangwon", "Jeju", 
    "Chungcheongbuk", "Chungcheongnam", "Jeollabuk", "Jeollanam", "Gyeongsangbuk",
    "Gyeongsangnam"];


    return (
        <div>
            <Kmap_Seoul/>
        </div>
    );
}

const Kmap_Seoul = styled.div`
    position: absoulte;
    top : 17%;
    left : 37%;
    border: black 2px solid;
    width: 50px;
    height: 50px;
    padding: 0;
    margin: 0;
`;

export default LocalBox;