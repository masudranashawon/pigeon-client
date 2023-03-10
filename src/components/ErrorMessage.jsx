const ErrorMessage = ({ error }) => {
  return (
    <p className='bg-rose-100 text-rose-500 p-5 rounded border border-rose-500 w-[25rem]'>
      {error}
    </p>
  );
};

export default ErrorMessage;
