import { useState } from "react";
import Button from "../components/Button";
import FormControl from "../components/FormControl";
import SectionTitle from "../components/SectionTitle";

const Register = () => {
  const [formFields, setFormFields] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleRegister = (e) => {
    e.preventDefault();

    console.log(formFields);

    //clear state
    setFormFields({
      name: "",
      email: "",
      password: "",
    });
  };

  return (
    <div className='register flex flex-col justify-center items-center mt-10'>
      <div className='register-wrapper flex flex-col gap-5'>
        <SectionTitle title={"Register..."} />

        <form onSubmit={handleRegister} className='flex flex-col gap-5'>
          <FormControl
            label='name'
            labelInner='Name'
            inputType='text'
            placeholder='Enter your name'
            formFields={formFields}
            setFormFields={setFormFields}
          />

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

          <Button text='Register' submit />
        </form>
      </div>
    </div>
  );
};

export default Register;
