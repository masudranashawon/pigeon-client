import React, { useState } from "react";
import { useLogin } from "../hooks/useLogin";

import Button from "../components/Button";
import FormControl from "../components/FormControl";
import SectionTitle from "../components/SectionTitle";
import ErrorMessage from "../components/ErrorMessage";

const Login = () => {
  const [formFields, setFormFields] = useState({
    email: "",
    password: "",
  });

  const { login, isLoading, error } = useLogin();

  const handleLogin = async (e) => {
    e.preventDefault();

    await login(formFields.email, formFields.password);
  };

  return (
    <div className='login flex flex-col justify-center items-center mt-10'>
      <div className='login-wrapper flex flex-col gap-5'>
        <SectionTitle title={"Login..."} />

        <form onSubmit={handleLogin} className='flex flex-col gap-5'>
          <FormControl
            label='email'
            labelInner='Email'
            inputType='email'
            placeholder='Enter your email'
            formFields={formFields}
            setFormFields={setFormFields}
          />

          <FormControl
            label='password'
            labelInner='Password'
            inputType='password'
            placeholder='Enter your password'
            formFields={formFields}
            setFormFields={setFormFields}
          />

          <Button text={isLoading ? "Logging..." : "Login"} submit />

          {error && <ErrorMessage error={error} />}
        </form>
      </div>
    </div>
  );
};

export default React.memo(Login);
