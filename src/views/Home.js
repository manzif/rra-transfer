import React, { useEffect } from "react";
import Navigation from "../component/common/Navigation";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

function Home() {
  const isAuth = useSelector((state) => state.auth.isAuth);
  let history = useHistory();
  useEffect(() => {
    if (!isAuth) {
      history.push("/login");
    }
  }, [isAuth]);
  return (
    <div>
      <Navigation />
      <h1>Welcome Home</h1>
    </div>
  );
}

export default Home;
