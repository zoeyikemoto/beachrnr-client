import React from 'react';
import styled from 'styled-components'; 
import { Divider } from 'semantic-ui-react';

const StyledP = styled.p`
  text-align: right;
  padding-right: 2rem;
`;

const HitsCount = (props) => {
  return (
    <React.Fragment>
      <StyledP>
        {props.hitsCount} results found in {props.timeTaken} ms
      </StyledP>
      <Divider />
    </React.Fragment>
  )
}

export default HitsCount;