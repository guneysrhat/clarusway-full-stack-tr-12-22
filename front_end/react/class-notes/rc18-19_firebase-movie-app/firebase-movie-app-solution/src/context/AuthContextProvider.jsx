import React, { createContext, useEffect, useState } from "react";
import { userObserver } from "../auth/firebase";

export const AuthContext = createContext();
//* with custom hook
// export const useAuthContext = () => {
//   return useContext(AuthContext);
// };

const AuthContextProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(false);
  console.log(currentUser);

  useEffect(() => {
    userObserver(setCurrentUser);
  }, []);
  return (
    <AuthContext.Provider value={{ currentUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
