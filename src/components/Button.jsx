import React from "react";

const Button = ({ text, submit, logout, handleLogout }) => {
  return (
    <button
      onClick={handleLogout ? handleLogout : null}
      type={submit ? "submit" : ""}
      className={` text-violet-50 py-3 rounded duration-300 px-5 ${
        logout
          ? "bg-rose-500 hover:bg-rose-600"
          : "bg-violet-500 mt-5 hover:bg-violet-600"
      }`}
    >
      {text}
    </button>
  );
};

export default React.memo(Button);
