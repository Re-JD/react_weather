import React from 'react';
import styled from 'styled-components';

function LocalBox() {

    return (
        <LocalContainer>
            <localName>서울</localName>
        </LocalContainer>
    );
}
const LocalContainer = styled.div`
    width: 50vw;
    background-color: #0078FF;
    font-size: 50px;
    margin: 0 auto;
    text-align: center;
`;
const localName = styled.p`
    
`;

export default LocalBox;