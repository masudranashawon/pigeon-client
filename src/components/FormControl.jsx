const FormControl = ({
  label,
  labelInner,
  inputType,
  placeholder,
  formFields,
  setFormFields,
}) => {
  return (
    <div className='form-control flex flex-col gap-2'>
      <label htmlFor={label} className='cursor-pointer'>
        {labelInner}
      </label>
      <input
        value={formFields[label]}
        onChange={(e) =>
          setFormFields({ ...formFields, [label]: e.target.value })
        }
        type={inputType}
        id={label}
        placeholder={placeholder}
        className='border rounded outline-none py-3 px-5 w-[25rem] focus:border-violet-500 duration-300'
      />
    </div>
  );
};

export default FormControl;
