import React from 'react';
import styled from 'styled-components';
function Header() {

    return (
        <div>
            <Head>Weather Data</Head>
        </div>
    );
}

const Head = styled.h1`
    font-size: 50px;

`;
export default Header;