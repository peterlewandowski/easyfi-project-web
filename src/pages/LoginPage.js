import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { useContext } from "react";
import { useNavigate } from "react-router";
import { UserContext } from "../context/UserContext";

export const LoginPage = () => {
  const { setUser } = useContext(UserContext);
  const navigate = useNavigate();

  const auth = getAuth();
  const provider = new GoogleAuthProvider();
  const login = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        setUser(result.user);
        navigate("/dashboard");
      })
      .catch((error) => alert(error.message));
  };

  return (
    <>
      <button onClick={() => login()}>Sign In with Google</button>
    </>
  );
};
