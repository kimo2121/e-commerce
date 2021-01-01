import React from "react";
import { GoogleLogin } from "react-google-login";

import "./google-sign-in.css";

const clientId =
  "910480267716-dk0udj2alrh9kbe59af4irkbsebdpr9c.apps.googleusercontent.com";

function GoogleSiginIn() {
  const onSuccess = (res) => {
    console.log("[Login Success] currentUser:", res.profileObj);
  };
  const onFailure = (res) => {
    console.log("[Login failed] res:", res);
  };
  return (
    <div>
      <GoogleLogin
        clientId={clientId}
        buttonText="Google"
        onSuccess={onSuccess}
        onFailure={onFailure}
        cookiePolicy={"single_host_origin"}
        isSignedIn={true}
      ></GoogleLogin>
    </div>
  );
}

export default GoogleSiginIn;
