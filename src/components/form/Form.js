import React, {useState} from "react";
import { FaTimes } from 'react-icons/fa'

import Box, {Form} from "./styled";

import SocialMedia from "./components/socialmedia/SocialMedia";

import {loginSchema} from "../yup/yup";

function Login(){
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState({
    type: '',
    text: '',
  })


  async function handleSubmit(e){
    e.preventDefault();

    loginSchema.validate({email,password})
      .then(() =>{
        setMessage({type: "success", text:""});
      })
      .catch(function(err){
      setMessage({type: "error" , text: err.errors});
    })
  }

  return(
    <Box>

      <SocialMedia />

      <Form onSubmit={handleSubmit}>
        {message.type === "error" &&
          <label className="icon-errorEmail"><FaTimes /></label>
        }
        <input
          className={(message.type === "error") ? "inputError" : ""}
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        {message.type === "error" &&
          <label className="icon-errorPassword"><FaTimes /></label>
        }
        <input
          className={(message.type === "error") ? "inputError" : ""}
          type="password"
          placeholder="Senha"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <p className="errorMessage">{message.text}</p>
        <button type="submit">Entrar</button>
        <a href="/" className="forgot-password">Esqueceu a senha?</a>
      </Form>
    </Box>
  )
}

export default Login;
