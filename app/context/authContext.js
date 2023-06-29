"use client";

import { createContext, useState } from "react";

export const AuthenticationContext = createContext({
  authLoading: false,
  authData: null,
  authError: null,
  setAuthLoading: () => {},
  setAuthData: () => {},
  setAuthError: () => {},
  searchLoading: false,
  searchKeyword: null,
  searchError: false,
  setLoading: () => {},
  setKeyword: () => {},
  setError: () => {},
});

const AuthContext = ({ children }) => {
  const [authLoading, setAuthLoading] = useState(false);
  const [authData, setAuthData] = useState(null);
  const [authError, setAuthError] = useState(null);
  const [searchLoading, setSearchLoading] = useState(false);
  const [searchKeyword, setSearchKeyword] = useState(null);
  const [searchError, setSearchError] = useState(false);
  return (
    <AuthenticationContext.Provider
      value={{
        authLoading,
        authData,
        authError,
        setAuthLoading,
        setAuthData,
        setAuthError,
        searchLoading,
        searchKeyword,
        searchError,
        setSearchLoading,
        setSearchKeyword,
        setSearchError,
      }}
    >
      {children}
    </AuthenticationContext.Provider>
  );
};

export default AuthContext;
