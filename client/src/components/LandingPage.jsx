import React from 'react';
import styled from 'styled-components';

import Navbar from './Navbar/Navbar.jsx';
import Search from './Search/Search.jsx';

const SearchDiv = styled.div`
  margin-top: 90px;
`;

const LandingPage = () => {
  return (
    <div> 
      <div>
        <Navbar />
      </div>
      <SearchDiv>
        <Search />
      </SearchDiv>
    </div>
  )
}

export default LandingPage;