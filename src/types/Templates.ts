type PersonalInfoType = {
  name: string;
  phone: string;
  website?: string;
  linkedIn?: string;
  github?: string;
  city: string;
  email: string;
};

type LanguagesType = {
  language: string;
  level: string;
}


export type CvBuilderType = PersonalInfoType & LanguagesType;
