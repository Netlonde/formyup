import React from "react";

import Box, {Form} from "./styled";

import SocialMedia from "../socialmedia/SocialMedia";

function FormYup(){
  return(
    <Box>
      <SocialMedia />


      <Form>
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Senha" />
        <button type="submit">Entrar</button>
        <a href="/" className="forgot-password">Esqueceu a senha?</a>
      </Form>
    </Box>
  )
}

export default FormYup;
