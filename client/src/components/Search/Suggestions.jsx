import React from 'react';
import styled from 'styled-components';

const Ul = styled.ul`
  padding: 0;
`;

const Li = styled.li`
  list-style-type: none;
`;

const SuggestedList = styled.li`
  list-style-type: none;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  text-align: left;
`;

const SuggestedItem = styled.ul`
  margin: 20px;
  text-align: center;
`;

const Image = styled.img`
  width: 200px;
  height: 200px;
  border-radius: 5%;  
`

const Suggestions = (props) => {
  const options = props.results.map(r => (
    <SuggestedItem key={r.id}>
      <Ul>
        <Li>          
          <Image
            src={r.unitImage}
            alt={`Image for ${r.unitName}`}
          />
        </Li>
        <Li>{r.unitName}</Li>
        <Li>{r.unitPrice}, {r.priceModifier}</Li>
        <Li>{r.unitAddress}</Li>
      </Ul>
    </SuggestedItem>
  ))
  return <SuggestedList>{options}</SuggestedList>
}

export default Suggestions