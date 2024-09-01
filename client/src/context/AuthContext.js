import { createContext, useEffect, useReducer } from "react";
import reducer from "./AuthReducer";

const initialState = {
  token: localStorage.getItem("authToken") || null,  // JWT token from localStorage
};

export const AuthContext = createContext(initialState);

export const AuthContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    // Sync localStorage with state
    if (state.token) {
      localStorage.setItem("authToken", state.token);
    } else {
      localStorage.removeItem("authToken");
    }
  }, [state.token]);

  return (
    <AuthContext.Provider value={{ token: state.token, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
};
