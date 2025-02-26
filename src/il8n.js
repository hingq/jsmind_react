import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import {default as enUs} from "../locale/en-us.json";
import {default as zhCn} from "../locale/zh-cn.json";


const resources = {
  en: {
    translation: enUs,
  },
  zh: {
    translation: zhCn,
  },
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  // 配置参数的文档: https://www.i18next.com/overview/configuration-options
  .init({
    resources,
    // lng: "zh",
    fallbackLng: "en",
    // 回退语言

    interpolation: {
      escapeValue: false,
    },
  });
export default i18n;