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
    outline: 0;
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
    transition: all ease-in-out 300ms;
  }

  button:hover{
    background-color: #ff1213;
    border: 1px solid #ff1213;
  }

  a{
    cursor: pointer;
    color: #737373;
    margin: 25px 0px;
    font-size: 10px;
  }

  a:hover{
    text-decoration: none;
  }

  @media (max-width: 550px ) {
    input,
    button{
      width: 80%;
    }
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
