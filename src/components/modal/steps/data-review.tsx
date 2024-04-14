import React from "react";
import { useFormContext } from "react-hook-form";
import texts from "../../../texts.json";
import InfoDisplay from "../../info-display";

const ReviewStep: React.FC = () => {
  const { getValues } = useFormContext();
  const values = getValues();
  const stepTexts = texts.modal.form.reviewStep;

  return (
    <div className="step-container">
      <h4>{stepTexts.header}</h4>
      <InfoDisplay label={stepTexts.firstName} value={values.firstName} />
      <InfoDisplay label={stepTexts.lastName} value={values.lastName} />
      <InfoDisplay label={stepTexts.age} value={values.age} />
    </div>
  );
};

export default ReviewStep;
