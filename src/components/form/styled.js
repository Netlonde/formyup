import styled from "styled-components";

const Box = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 525px;
  height: 469px;
  background-color: #fff;

  @media (max-width: 550px ) {
    width: 80%;
  }
`;

export const Form = styled.form`
  position: relative;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  .errorMessage{
    display: flex;
    text-align: center;
    justify-content: center;
    width: 80%;
    font-size: 15px;
    color: #ff4546;
    margin-bottom: 5px;
  }

  .icon-errorEmail,
  .icon-errorPassword{
    color: #ff4546;
    position: absolute;
    right: 15%;
  }

  .icon-errorEmail{
    top: 19px;
  }

  .icon-errorPassword{
    top: 93px;
  }

  .inputError{
    border: 1px solid #ff4546;
  }

  @media (max-width: 550px ) {
    .error{
      font-size: 12px;
    }
  }

`;

export default Box;
