import React from "react";

export type Hobby = {
  name: string;
  description: string;
}

export type WorkExperience = {
  position: string;
  name: string;
  company: string;
  location: string;
  startDate: Date;
  endDate: Date;
  description: string;
}

export type FormData = {
  fullName: string;
  email: string;
  birthdate: Date;
  city: string;
  phone: string;

  template: string;

  title: string;
  personDescription: string;

  hobbies:  Hobby[];

  workExperiences: WorkExperience[];
}

export type CvBuilderFormProps = {
  formData: FormData;
  template: string | undefined;
  setFormData: React.Dispatch<React.SetStateAction<FormData>>;
}
