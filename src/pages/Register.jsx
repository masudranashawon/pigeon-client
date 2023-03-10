import { useState } from "react";
import SectionTitle from "../components/SectionTitle";

const Register = () => {
  const [formFields, setFormFields] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleRegister = (e) => {
    e.preventDefault();
  };

  return (
    <div className='register flex flex-col justify-center items-center'>
      <div className='register-wrapper flex flex-col gap-5'>
        <SectionTitle title={"Register..."} />
        <form onSubmit={handleRegister} className='flex flex-col gap-5'>
          <div className='form-control flex flex-col gap-2'>
            <label htmlFor='name' className='cursor-pointer'>
              Name
            </label>
            <input
              value={formFields.name}
              onChange={(e) =>
                setFormFields({ ...formFields, name: e.target.value })
              }
              type='text'
              id='name'
              placeholder='Write your name'
              className='border rounded outline-none py-3 px-5 w-[25rem] focus:border-violet-500 duration-300'
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
