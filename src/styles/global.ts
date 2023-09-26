import styled, { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
    font-family: 'Modern Antiqua', sans-serif;
  }
  
  html, body, #root {
    width: 100%;
    height: 100%;
  }
  
  body {
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(to bottom, #2a4065, #bb9135);
  color: #ffffff;
}
`;

export const Content = styled.div`
  align-items: center;
  justify-content: center;
`;
