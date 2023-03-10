const Button = ({ text, submit }) => {
  return (
    <button
      type={submit ? "submit" : ""}
      className='bg-violet-500 text-violet-50 py-3 rounded hover:bg-violet-600 duration-300 mt-5'
    >
      {text}
    </button>
  );
};

export default Button;
