import React from 'react';

const Button = ({ text, onClick }) => {
  return (
    <button
      className="px-8 py-1 border rounded-full border-[#A9F868] text-white text-xl hover:bg-[#A9F868] hover:text-[#111111]"
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default Button;
