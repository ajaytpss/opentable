"use client";

import { createContext, useState } from "react";

export const AuthenticationContext = createContext({
  authLoading: false,
  authData: null,
  authError: null,
  setAuthLoading: () => {},
  setAuthData: () => {},
  setAuthError: () => {},
});

const AuthContext = ({ children }) => {
  const [authLoading, setAuthLoading] = useState(false);
  const [authData, setAuthData] = useState(null);
  const [authError, setAuthError] = useState(null);
  return (
    <AuthenticationContext.Provider
      value={{
        authLoading,
        authData,
        authError,
        setAuthLoading,
        setAuthData,
        setAuthError,
      }}
    >
      {children}
    </AuthenticationContext.Provider>
  );
};

export default AuthContext;
