import React, { useContext, useEffect } from "react";
import LoginForm from "../components/common/LoginForm";
import StrategiesList from "../components/StrategiesList";
import { UserContext } from "../App";

export default function Dashboard() {
  const {user, jwt} = useContext(UserContext)

  // useEffect(() => {
  //   if (user) setUserInput(user.userInput)
  // })


  return (
    <>
    {!user ? (
      <div>
        <LoginForm />
      </div>
    ) : (
    <div id="main" style={{ backgroundColor: "#F0FBF0" }}>
      <StrategiesList />;
    </div>
    )}
    </>
  );
}
