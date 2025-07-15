import React from "react";

export type CvBuilderFormProps = {
  formData: {
    fullName: string;
    email: string;
  };

  template: string | undefined;

  setFormData: React.Dispatch<React.SetStateAction<{
    fullName: string;
    email: string
  }>>;
}
