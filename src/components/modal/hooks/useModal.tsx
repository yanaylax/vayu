import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import NameStep from "../steps/name";
import AgeStep from "../steps/age";
import ReviewStep from "../steps/data-review";

type FormData = {
  firstName: string;
  lastName: string;
  age: number;
};

const formDataKey = "formData";

function retrieveFormData(): FormData | null {
  const data = localStorage.getItem(formDataKey);
  return data ? JSON.parse(data) : null;
}

export default function useModal(modalRef: React.RefObject<HTMLDialogElement>) {
  const methods = useForm<FormData>({
    mode: "all",
    defaultValues: retrieveFormData() || {},
  });
  const { handleSubmit, formState, reset } = methods;
  const { isSubmitting } = formState;

  const [currentStep, setCurrentStep] = useState(0);
  const steps = [<NameStep />, <AgeStep />, <ReviewStep />];

  useEffect(() => {
    const data = retrieveFormData();
    if (data) {
      reset(data);
    }
  }, [reset]);

  const openModal = () => {
    if (modalRef.current) modalRef.current.showModal();
  };

  const closeModal = () => {
    if (modalRef.current) modalRef.current.close();
    setCurrentStep(0);
  };

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep((current) => current + 1);
    }
  };

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep((current) => current - 1);
    }
  };

  const onSubmit = (data: FormData) => {
    localStorage.setItem(formDataKey, JSON.stringify(data));
    alert("Form submitted successfully! Your data has been saved.");
    closeModal();
  };

  return {
    openModal,
    closeModal,
    handleNext,
    handleBack,
    onSubmit: handleSubmit(onSubmit),
    currentStep,
    steps,
    isSubmitting,
    methods,
  };
}
