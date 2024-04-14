import React from "react";

type InfoDisplayProps = {
  label: string;
  value: string | number;
};

const InfoDisplay: React.FC<InfoDisplayProps> = ({ label, value }) => {
  return (
    <p>
      <strong>{label}</strong> {value}
    </p>
  );
};

export default InfoDisplay;
