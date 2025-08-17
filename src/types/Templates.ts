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
  aboutMeDescription: string;
  profilePicture: any;
}

type WorkExperienceType = {
  workExperiences: {
    jobTitle: string;
    employer: string;
    place: string;
    startMonth: string;
    startYear: string;
    endMonth?: string;
    endYear?: string;
    current: boolean;
    description: string;
  }[]
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
  ThemeStyleType &
  SkillsType &
  LanguagesType;
