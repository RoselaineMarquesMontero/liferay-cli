
import React from 'react';
import styled from 'styled-components'
import { primaryColor } from '../UI/variables';

const Button = styled.button`
  background: transparent;
  border-radius: 3px;
  border: 2px solid palevioletred;
  color: palevioletred;
  margin: 0.5em 1em;
  padding: 0.25em 1em;

  background: ${(props) => (props.primary ? "white" : primaryColor)};
  color: ${(props) => (props.primary ? primaryColor : "white")};
`;

const Container = styled.div`
  text-align: center;
`
export default () =>{
  return(
    <Container>
      <Button>Button using styled</Button>
      <Button primary>Button Primary using styled</Button>
    </Container>
  )
}