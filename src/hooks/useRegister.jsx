import { useState } from "react";
import { useAuthContext } from "./useAuthContext";

export const useRegister = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const { dispatch } = useAuthContext();

  const register = async (name, email, password) => {
    setIsLoading(true);
    setError(null);

    const res = await fetch("http://localhost:4000/api/user/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, email, password }),
    });

    const data = await res.json();

    if (!res.ok) {
      setIsLoading(false);
      setError(data);
    }

    if (res.ok) {
      setIsLoading(false);

      //update auth context
      dispatch({ type: "LOGIN", payload: data });

      //update local storate
      localStorage.setItem("user", JSON.stringify(data));
    }
  };

  return {
    register,
    isLoading,
    error,
  };
};
