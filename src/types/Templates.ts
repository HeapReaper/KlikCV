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
  aboutMeDescription: string;
  profilePicture: any;
}

type ThemeStyleType = {
  primaryColor: string;
  secondaryColor: string;
  fontFamily: string;
}

type LanguagesType = {
  language: string;
  level: string;
}

export type CvBuilderType =
  PersonalInfoType &
  AboutMeType &
  ThemeStyleType &
  LanguagesType;
