import { useState } from "react";
import Button from "../components/Button";
import FormControl from "../components/FormControl";
import SectionTitle from "../components/SectionTitle";

const Login = () => {
  const [formFields, setFormFields] = useState({
    email: "",
    password: "",
  });

  const handleLogin = (e) => {
    e.preventDefault();

    console.log(formFields);

    //clear state
    setFormFields({
      email: "",
      password: "",
    });
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

          <Button text='Login' submit />
        </form>
      </div>
    </div>
  );
};

export default Login;
