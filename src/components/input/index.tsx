import React from "react";
import { useFormContext } from "react-hook-form";
import styles from "./input.module.css";

type FormInputProps = {
  name: string;
  label: string;
  type?: string;
  requiredMessage: string;
  validationRules?: Record<string, any>;
};

function TextFieldError({ error }: { error?: string }) {
  return error ? <p className={styles.errorMsg}>{error}</p> : null;
}

const FormInput: React.FC<FormInputProps> = ({
  name,
  label,
  type = "text",
  requiredMessage,
  validationRules = {},
}) => {
  const {
    register,
    formState: { errors },
  } = useFormContext<{ [x: string]: string }>();

  const combinedRules = {
    required: requiredMessage,
    ...validationRules,
  };

  return (
    <div className={styles.inputGroup}>
      <label htmlFor={name} className={styles.inputLabel}>
        {label}
      </label>
      <input
        id={name}
        type={type}
        className={styles.inputField}
        aria-invalid={errors[name] ? "true" : "false"}
        {...register(name, combinedRules)}
      />
      <TextFieldError error={errors[name]?.message} />
    </div>
  );
};

export default FormInput;
