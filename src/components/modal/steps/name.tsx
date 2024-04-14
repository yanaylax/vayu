import React from "react";
import FormInput from "../../input";
import texts from "../../../texts.json";

const NameStep: React.FC = () => {
  const stepTexts = texts.modal.form.nameStep;
  const nameValidationRules = {
    minLength: {
      value: 2,
      message: stepTexts.nameShort,
    },
    maxLength: {
      value: 20,
      message: stepTexts.nameLong,
    },
    pattern: {
      value: /^[A-Za-z]+$/i,
      message: stepTexts.nameInvalid,
    },
  };

  return (
    <div className="step-container">
      <FormInput
        name="firstName"
        label={stepTexts.firstNameLabel}
        requiredMessage={stepTexts.firstNameRequired}
        validationRules={nameValidationRules}
      />
      <FormInput
        name="lastName"
        label={stepTexts.lastNameLabel}
        requiredMessage={stepTexts.lastNameRequired}
        validationRules={nameValidationRules}
      />
    </div>
  );
};

export default NameStep;
