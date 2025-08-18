type PersonalInfoType = {
  name: string;
  phone: string;
  website?: string;
  linkedIn?: string;
  github?: string;
  city: string;
  email: string;
  birthdate: string;
};

type AboutMeType = {
  preferredFunction: string;
  profilePicture?: any;
  aboutMeDescription: string;
}

type WorkExperienceType = {
  workExperiences: {
    jobTitle: string;
    employer: string;
    place: string;
    startMonth: string;
    startYear: number;
    endMonth?: string;
    endYear?: number;
    current: boolean;
    description: string;
  }[]
}

type EducationsType = {
  educations: {
    name: string;
    institution: string;
    place: string;
    startMonth: string;
    startYear: number;
    endMonth?: string;
    endYear?: number;
    current: boolean;
    description: string;
  }[]
}

type CertificatesType = {
  certifications: {
    name: string;
    month?: string;
    year: number;
    current: boolean;
    description: string;
  }[];
}

type ThemeStyleType = {
  primaryColor: string;
  secondaryColor: string;
  fontFamily: string;
}

type SkillsType = {
  skills: {
    skill: string;
    level: string;
  }[];
}

type LanguagesType = {
  languages: {
    language: string;
    level: string;
  }[];
}

export type CvBuilderType =
  PersonalInfoType &
  AboutMeType &
  WorkExperienceType &
  EducationsType &
  CertificatesType &
  ThemeStyleType &
  SkillsType &
  LanguagesType;
