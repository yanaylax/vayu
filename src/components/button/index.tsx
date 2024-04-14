import React from "react";

type FormButtonProps = {
  onClick: () => void;
  disabled: boolean;
  buttonType?: "button" | "submit" | "reset";
  children: React.ReactNode;
};

const FormButton: React.FC<FormButtonProps> = ({
  onClick,
  disabled,
  children,
  buttonType = "button",
}) => {
  return (
    <button type={buttonType} onClick={onClick} disabled={disabled}>
      {children}
    </button>
  );
};

export default FormButton;
