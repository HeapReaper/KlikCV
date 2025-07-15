import React from "react";

export type FormData = {
  fullName: string;
  email: string;
  birthdate: Date;
  city: string;
  phone: string;
}

export type CvBuilderFormProps = {
  formData: FormData;
  template: string | undefined;
  setFormData: React.Dispatch<React.SetStateAction<FormData>>;
}
