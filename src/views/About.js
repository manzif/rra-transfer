import React, { useEffect } from "react";
import Navigation from "../component/common/Navigation";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

function About() {
  const isAuth = useSelector((state) => state.auth.isAuth);
  let history = useHistory();
  useEffect(() => {
    if(!isAuth) {
        history.push("/login");
    }
  }, [isAuth]);
  return (
    <div>
      <Navigation />
      <h1>Welcome to the About of Geeks!</h1>
    </div>
  );
}

export default About;
