import axios from "axios";
import { baseUrl } from "@/lib/config";
import { AuthenticationContext } from "@/app/context/authContext";
import { useContext } from "react";
import { toast } from "react-hot-toast";
import { useRouter } from "next/navigation";

const useAuth = () => {
  const router = useRouter();
  const { setAuthLoading, setAuthData } = useContext(AuthenticationContext);

  const commonFunction = async (apiURL, data) => {
    setAuthLoading(true);
    try {
      const res = await axios.post(apiURL, data);
      const result = await res.data;
      setAuthData(result.accessToken);
      toast.success(result.message);
      localStorage.setItem("accessToken", result.accessToken);
      router.push("/");
    } catch (error) {
      toast.error(error.response.data.message);
    }
    setAuthLoading(false);
  };

  const signIn = (data) => {
    commonFunction(`${baseUrl}/api/auth/login`, data);
  };

  const signUp = async (data) => {
    commonFunction(`${baseUrl}/api/auth/signup`, data);
  };

  const logOut = () => {
    localStorage.removeItem("accessToken");
    setAuthData(null);
    toast.success("You have been Logged out!");
  };

  const refreshAuth = async (data) => {
    try {
      const res = await axios.post(`${baseUrl}/api/auth/refresh`, data);
      const result = await res.data;
      setAuthData(result.accessToken);
      localStorage.setItem("accessToken", result.accessToken);
    } catch (error) {
      toast.error(result.message);
      localStorage.removeItem("accessToken");
    }
  };

  const isLoggedIn = () => {
    const isLogged = localStorage.getItem("accessToken");
    if (isLogged) {
      setAuthData(isLogged);
      return true;
    } else {
      return false;
    }
  };

  return { signIn, signUp, logOut, refreshAuth, isLoggedIn };
};

export default useAuth;
