import React from "react";

type PropsType = {
  children: React.ReactNode;
};

const Button = ({ children }: PropsType) => {
  return (
    <div
      style={{
        padding: "10px 20px",
        fontSize: "1.2rem",
        borderRadius: "5px",
        cursor: "pointer",
        backgroundColor: "blue",
        color: "white",
        border: "none",
      }}
    >
      {children}
    </div>
  );
};

export { Button };
