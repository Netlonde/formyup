import styled, {createGlobalStyle} from "styled-components";


const GlobalStyle = createGlobalStyle`

  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html{
    height: 100%;
  }

  body{
    font-family: sans-serif;
  }

  input{
    width: 77%;
    font-size: 14px;
    padding: 15px;
    color: #333;
    font-weight: 400;
    border: 1px solid #ccc;
    margin-bottom: 20px;
    height: 53px;
  }

  button{
    width: 77%;
    cursor: pointer;
    background-color: #ff4546;
    border: 1px solid #ff4546;
    border-radius: 3px;
    padding: 15px 20px;
    font-size: 18px;
    font-weight: 700;
    color: #fff;
    height: 59px;
  }

  a{
    cursor: pointer;
    color: #737373;
    margin: 25px 0px;
    font-size: 10px;
  }
`;

export const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #212529;;

`;

export default GlobalStyle;
