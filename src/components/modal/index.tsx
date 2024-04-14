import React, { useRef } from "react";
import { FormProvider } from "react-hook-form";
import useModal from "./hooks/useModal";
import FormButton from "../button";
import texts from "../../texts.json";
import styles from "./modal.module.css";

const Modal: React.FC = () => {
  const modalRef = useRef<HTMLDialogElement>(null);

  const {
    openModal,
    closeModal,
    handleNext,
    handleBack,
    onSubmit,
    currentStep,
    steps,
    isSubmitting,
    methods,
  } = useModal(modalRef);

  const modalTexts = texts.modal;

  return (
    <>
      <FormButton disabled={false} onClick={openModal}>
        {modalTexts.openButton}
      </FormButton>
      <dialog ref={modalRef} onClose={closeModal}>
        <div className={styles.dialogContent}>
          <FormButton onClick={closeModal} disabled={isSubmitting}>
            {modalTexts.closeButton}
          </FormButton>
          <FormProvider {...methods}>
            <form onSubmit={onSubmit}>
              {steps[currentStep]}
              <div className={styles.buttonGroup}>
                <FormButton
                  onClick={handleBack}
                  disabled={currentStep === 0 || isSubmitting}
                >
                  {modalTexts.backButton}
                </FormButton>
                {currentStep < steps.length - 1 && (
                  <FormButton
                    onClick={handleNext}
                    disabled={isSubmitting || !methods.formState.isValid}
                  >
                    {modalTexts.nextButton}
                  </FormButton>
                )}
                {currentStep === steps.length - 1 && (
                  <FormButton
                    onClick={onSubmit}
                    buttonType="submit"
                    disabled={isSubmitting || !methods.formState.isValid}
                  >
                    {modalTexts.submitButton}
                  </FormButton>
                )}
              </div>
            </form>
          </FormProvider>
        </div>
      </dialog>
    </>
  );
};

export default Modal;
