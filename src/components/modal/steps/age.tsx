import React from "react";
import FormInput from "../../input";
import texts from "../../../texts.json";

const AgeStep: React.FC = () => {
  const stepTexts = texts.modal.form.ageStep;

  return (
    <div className="step-container">
      <FormInput
        name="age"
        type="number"
        label={stepTexts.ageLabel}
        requiredMessage={stepTexts.ageRequired}
        validationRules={{
          valueAsNumber: true,
          max: {
            value: 140,
            message: stepTexts.ageMax,
          },
        }}
      />
    </div>
  );
};

export default AgeStep;
