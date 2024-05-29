import { NativeModules, Platform } from 'react-native';


const defaultLang = 'en';

const languageDetector = {
  type: 'languageDetector',
  init: () => {},
  cacheUserLanguage: () => {},
  detect: () => {
    const supportedLanguages = ['en', 'he', 'iw'];
    const locale = Platform.OS === 'ios' ? (
      NativeModules.SettingsManager?.settings?.AppleLocale
      || NativeModules.SettingsManager?.settings?.AppleLanguages[0]
      || ''
    ) : (
      NativeModules.I18nManager?.localeIdentifier || ''
    );
    
    const [lowerCaseLocale] = locale.split('_');
    
    if (supportedLanguages.includes(lowerCaseLocale)) {
      return lowerCaseLocale;
    }
    console.warn(`locale ${lowerCaseLocale} from ${locale} is not supported, defaulting to ${defaultLang}`);
    return defaultLang;
  },
}


export default languageDetector;