'use client';

import { useState, useEffect } from 'react';
import Cookies from 'js-cookie';
import { getCookie, setCookie } from '@/utils/cookies';
import { loadFromLocalStorage } from '@/utils/localStorage';
import { getTemplates } from '@/utils/getTemplates';
import { CvBuilderType } from '@/types/templates';

const COOKIE_NAME = 'cv-builder-data';

export const useCvState = (initialState: CvBuilderType) => {
  const [state, setState] = useState<CvBuilderType>(() => {
    try {
      const storedData = Cookies.get(COOKIE_NAME);
      return storedData ? { ...initialState, ...JSON.parse(storedData) } : initialState;
    } catch (e) {
      console.error('Failed to parse stored data from cookies:', e);
      return initialState;
    }
  });

  useEffect(() => {
    try {
      Cookies.set(COOKIE_NAME, JSON.stringify(state), { expires: 365 });
    } catch (e) {
      console.error('Failed to save data to cookies:', e);
    }
  }, [state]);

  return [state, setState] as const;
};

export const useCv = () => {
  const initialCvData: CvBuilderType = {
    // Personal info
    name: '',
    phone: '',
    website: '',
    linkedIn: '',
    github: '',
    city: '',
    email: '',
    birthdate: '',
    // About me
    preferredFunction: '',
    profilePicture: null,
    aboutMeDescription: '',
    // Work experiences
    workExperiences: [
      {
        jobTitle: '',
        employer: '',
        place: '',
        startMonth: new Date().toLocaleString('nl-NL', { month: 'long' }),
        startYear: new Date().getFullYear(),
        endMonth: '',
        endYear: new Date().getFullYear(),
        current: false,
        description: '',
      },
    ],
    // Educations
    educations: [
      {
        name: '',
        institution: '',
        place: '',
        startMonth: new Date().toLocaleString('nl-NL', { month: 'long' }),
        startYear: new Date().getFullYear(),
        endMonth: '',
        endYear: new Date().getFullYear(),
        current: false,
        description: '',
      },
    ],
    // Certificates
    certifications: [
      {
        name: '',
        month: '',
        year: new Date().getFullYear(),
        current: false,
        description: '',
      },
    ],
    // Theme
    primaryColor: 'F97316',
    secondaryColor: 'F97316',
    fontFamily: 'font-sans',
    template: 'Luna',
    // Skills
    skills: [{ skill: '', level: '' }],
    // Languages
    languages: [{ language: '', level: '' }],
    // Hobbies
    hobbies: [{ name: '' }],
  };

  const [cvData, setCvData] = useCvState(initialCvData);
  const [templates, setTemplates] = useState<Record<string, any>>(getTemplates(false));
  const SelectedTemplate = templates[cvData.template];

  useEffect(() => {
    const t = getTemplates(false);
    setTemplates(t);
  }, []);

  // Section collapsed states
  type CollapsedSections = {
    theme: boolean;
    personalInfo: boolean;
    aboutMe: boolean;
    education: boolean;
    workExperience: boolean;
    certifications: boolean;
    skills: boolean;
    languages: boolean;
    hobbies: boolean;
  };

  const defaultCollapsed: CollapsedSections = {
    theme: false,
    personalInfo: false,
    aboutMe: false,
    education: false,
    workExperience: false,
    certifications: false,
    skills: false,
    languages: false,
    hobbies: false,
  };

  const [collapsedSections, setCollapsedSections] = useState<CollapsedSections>(() => {
    try {
      const cookie = getCookie('collapsedSections');
      return cookie ? { ...defaultCollapsed, ...JSON.parse(cookie) } : defaultCollapsed;
    } catch (e) {
      console.warn('Invalid collapsedSections cookie, using defaults.', e);
      return defaultCollapsed;
    }
  });

  const toggleSection = (section: keyof CollapsedSections) => {
    const updated = { ...collapsedSections, [section]: !collapsedSections[section] };
    setCollapsedSections(updated);
    setCookie('collapsedSections', JSON.stringify(updated));
  };

  const updateCvData = <K extends keyof CvBuilderType>(field: K, value: CvBuilderType[K]) => {
    setCvData(prev => ({ ...prev, [field]: value }));
  };

  const updateListItem = <
    K extends keyof CvBuilderType,
    T extends CvBuilderType[K] extends Array<infer U> ? U : never
  >(
    listName: K,
    index: number,
    field: keyof T,
    value: T[keyof T]
  ) => {
    setCvData(prev => ({
      ...prev,
      [listName]: (prev[listName] as T[]).map((item, i) =>
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-expect-error
        i === index ? { ...item, [field]: value } : item
      ),
    }));
  };

  const addListItem = <K extends keyof CvBuilderType>(listName: K, newItem: unknown) => {
    setCvData(prev => ({
      ...prev,
      [listName]: [...(prev[listName] as unknown[]), newItem],
    }));
  };

  const removeListItem = <K extends keyof CvBuilderType>(listName: K, index: number) => {
    setCvData(prev => ({
      ...prev,
      [listName]: (prev[listName] as unknown[]).filter((_, i) => i !== index),
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
