import {
    createContext,
    useEffect,
    useState,
  } from 'react';
  import { getAuth, onAuthStateChanged } from 'firebase/auth';
  
  
  export const UserContext = createContext()
  
  export const UserContextProvider = (props) => {
    const auth = getAuth();
    const [user, setUser] = useState();
    const [loaded, setLoaded] = useState(false);
    const value = { user, setUser }
    const { Provider } = UserContext;
    useEffect(() => {
      onAuthStateChanged(auth, (u) => {
        setUser(u);
        setLoaded(true);
      });
    }, [auth]);
  
    if (!loaded) {
      return <></>;
    }
  
    return <Provider value={value}>{props.children}</Provider>;
  };
  