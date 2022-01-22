import React from "react";

import Social from "./styled";

import { FaGoogle, FaFacebookF } from "react-icons/fa";

function SocialMedia(){
  return(
    <Social>
      <h3>Entrar</h3>

      <div className="social-icons">
        <FaGoogle className="social-iconsGoogle" />
        <FaFacebookF  className="social-iconsFacebook" />
      </div>

      <div className="or-divider">
        OU
      </div>

    </Social>
  )
}

export default SocialMedia;
