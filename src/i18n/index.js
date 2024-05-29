import i18next from 'i18next';
import {initReactI18next} from 'react-i18next';
import {resources} from './resources';
import languageDetector from './languageDetector';
import {Platform, NativeModules} from 'react-native';

i18next.use(initReactI18next).use(languageDetector).init({
  compatibilityJSON: 'v3',
  resources: resources,
});

export default i18next;

export function getLanguage() {
  const i18nextLanguage = i18next.language;
  if (
    i18nextLanguage === 'he' ||
    i18nextLanguage === 'iw' ||
    i18nextLanguage === 'he-IL' ||
    i18nextLanguage === 'iw-IL'
  ) {
    return 'he';
  }
  return 'en';
}

export function strings(name, params = {}) {
  return i18next.t(name, params);
}

export const isLTR = () => {
  const defaultDeviceLang = getLanguage();
  return !(defaultDeviceLang === 'he');
};

export function deviceLanguageNotAsAppLanguage() {
  if (Platform.OS === 'ios' &&  getLanguage() !==
  NativeModules.SettingsManager.settings.AppleLocale.split('_')[0]) {
    return true;
  } else {
    return false;
  }
}

export function isIos() {
  if (Platform.OS === 'ios') {
    return true;
  } else {
    return false;
  }
}

export const changeLanguageApp = (newLang) => {
  i18next.changeLanguage(newLang);
};

export function detectHebText(text) {
  const hebrewCharsRegex = /[\u0590-\u05FF]/;

  if (hebrewCharsRegex.test(text)) {
    return true;
  } else {
    return false;
  }
}
