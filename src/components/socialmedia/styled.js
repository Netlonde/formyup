import styled from "styled-components";

const Social = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-bottom: 15px;

  h3{
    font-weight: 600 ;
    margin-bottom: 30px;
  }

  .social-icons{
    display: flex;
    gap: 10px;
    height: 55px;
  }

  .social-iconsFacebook,
  .social-iconsGoogle{
    border-radius: 5px;
    padding: 15px 10px;
    min-height: 45px;
    min-width: 60px;
    font-size: 18px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
  }

  .social-iconsGoogle{
    background: #db4437;
    color: #fff;
  }

  .social-iconsFacebook{
    background: #4267b2;
    color: #fff;
  }


  .or-divider {
    width: 310px;
    overflow: hidden;
    text-align: center;
    color: #9e9e9e;
  }

  .or-divider:before,
  .or-divider:after{
    background-color: #000;
    content: "";
    display: inline-block;
    height: 1px;
    position: relative;
    vertical-align: middle;
    width: 50%;
    background-color: #ccc;

  }

  .or-divider:before {
    right: 0.5em;
    margin-left: -50%;
  }

  .or-divider:after {
    left: 0.5em;
    margin-right: -50%;
  }
`;

export default Social;
