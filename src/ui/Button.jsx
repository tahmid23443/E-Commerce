import React from "react";

const Button = ({
  children,
  type = "button",
  variant = "primary",
  loading = "false",

  className = "",
  ...props
}) => {
const base = "px-5 py-3 rounded-lg font-medium disabled:opacity-50 disabled:cursor-not-allowed";
  const variants = {
    primary: "bg-brand  text-white",
    success: "bg-green-500 hover:bg-green-600 text-white",
    danger: "bg-red-500 hover:bg-red-600 text-white",
    outline: "border border-blue-500 text-blue-500 hover:bg-blue-50",
    secondary : "bg-gray-200 text-gray-800 hover:bg-gray-300"
  };

  return (
    <button
      type={type}
    

      className={`${base} ${variants[variant]} 
      
      
      ${className}`}
      {...props}
    
      >
      { children}
      
    </button>
  );
};

export default Button;