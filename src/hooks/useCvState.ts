import { useState, useEffect } from 'preact/hooks';
import Cookies from 'js-cookie';
import { getCookie, setCookie } from '../utils/cookies';
import { loadFromLocalStorage } from '../utils/localStorage';
import { getTemplates } from '../utils/getTemplates';

const COOKIE_NAME = 'cv-builder-data';

export const useCvState = (initialState: any) => {
  // Read
  const [state, setState] = useState(() => {
    try {
      const storedData = Cookies.get(COOKIE_NAME);
      if (storedData) {
        const parsed = JSON.parse(storedData);
        // Merge defaults for missing fields
        return { ...initialState, ...parsed };
      }
      return initialState;
    } catch (e) {
      console.error('Failed to parse stored data from cookies:', e);
      return initialState;
    }
  });

  // Write
  useEffect(() => {
    try {
      Cookies.set(COOKIE_NAME, JSON.stringify(state), { expires: 365 });
    } catch (e) {
      console.error('Failed to save data to cookies:', e);
    }
  }, [state]);

  return [state, setState];
};

export const useCv = () => {
  const [cvData, setCvData] = useCvState({
    primaryColor: 'F97316',
    secondaryColor: 'F97316',
    fontFamily: 'font-sans',
    template: 'Luna',
    fullName: '',
    email: '',
    phone: '',
    city: '',
    birthdate: '',
    preferredFunction: '',
    aboutMeDescription: '',
    languages: [{ language: '', level: '' }],
    skills: [{ skill: '', level: '' }],
    workExperiences: [
      {
        jobTitle: '',
        employer: '',
        place: '',
        startMonth: new Date().toLocaleString('nl-NL', { month: 'long' }),
        startYear: new Date().getFullYear(),
        endMonth: new Date().toLocaleString('nl-NL', { month: 'long' }),
        endYear: new Date().getFullYear(),
        current: false,
        description: '',
      },
    ],
    educations: [
      {
        name: '',
        institution: '',
        place: '',
        startMonth: new Date().toLocaleString('nl-NL', { month: 'long' }),
        startYear: new Date().getFullYear(),
        endMonth: new Date().toLocaleString('nl-NL', { month: 'long' }),
        endYear: new Date().getFullYear(),
        current: false,
        description: '',
      },
    ],
    certifications: [
      {
        name: '',
        month: new Date().toLocaleString('nl-NL', { month: 'long' }),
        year: new Date().getFullYear(),
        current: false,
        description: '',
      }
    ],
    hobbies: [
      {
        name: '',
      }
    ]
  });

  const templateComponents = getTemplates()
  const SelectedTemplate = templateComponents[cvData.template];

  const [collapsedSections, setCollapsedSections] = useState(() => {
    const cookie = getCookie('collapsedSections');
    return cookie ? JSON.parse(cookie) : {
      theme: false,
      personalInfo: false,
      aboutMe: false,
      education: false,
      workExperience: false,
      certifications: false,
      skills: false,
      languages: false,
    };
  });

  const toggleSection = (section: string) => {
    const updated = { ...collapsedSections, [section]: !collapsedSections[section] };
    setCollapsedSections(updated);
    setCookie('collapsedSections', JSON.stringify(updated));
  };

  const updateCvData = (field: string, value: any) => {
    setCvData((prev: any) => ({ ...prev, [field]: value }));
  };

  const updateListItem = (listName: string, index: number, field: string, value: any) => {
    setCvData((prev: any) => ({
      ...prev,
      [listName]: prev[listName].map((item: any, i: number) =>
        i === index ? { ...item, [field]: value } : item
      ),
    }));
  };

  const addListItem = (listName: string, newItem: any) => {
    setCvData((prev: any) => ({
      ...prev,
      [listName]: [...prev[listName], newItem],
    }));
  };

  const removeListItem = (listName: string, index: number) => {
    setCvData((prev: any) => ({
      ...prev,
      [listName]: prev[listName].filter((_: any, i: number) => i !== index),
    }));
  };

  const [profilePicture, setProfilePicture] = useState<string | null>(null);
  useEffect(() => {
    setProfilePicture(loadFromLocalStorage('profilePicture'));
  }, []);

  return {
    cvData,
    setCvData,
    SelectedTemplate,
    collapsedSections,
    toggleSection,
    updateCvData,
    updateListItem,
    addListItem,
    removeListItem,
    profilePicture,
    setProfilePicture,
  };
};
