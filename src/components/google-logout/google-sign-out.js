import React from "react";
import "./google-sign-out.css";
import { GoogleLogout } from "react-google-login";

const clientId =
  "910480267716-dk0udj2alrh9kbe59af4irkbsebdpr9c.apps.googleusercontent.com";

function GoogleSignOut() {
  const onSuccess = () => {
    alert("Logout made successfuly");
  };
  return (
    <div>
      <GoogleLogout
        clientId={clientId}
        buttonText="Logout"
        onLogoutSuccess={onSuccess}
      ></GoogleLogout>
    </div>
  );
}

export default GoogleSignOut;
