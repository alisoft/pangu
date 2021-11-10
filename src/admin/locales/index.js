import { createI18n } from "vue-i18n";
import en from "./en";
import en_US from "./en_US";
import zh from "./zh";
import zh_CN from "./zh_CN";
import zh_Hans_CN from "./zh_Hans_CN";
import zh_Hant_HK from "./zh_Hant_HK";
import zh_Hant_TW from "./zh_Hant_TW";
import zh_HK from "./zh_HK";
import zh_TW from "./zh_TW";

export default createI18n({
  legacy: false,
  locale: "en_US",
  messages: {
    en,
    en_US,
    zh,
    zh_CN,
    zh_Hans_CN,
    zh_Hant_HK,
    zh_Hant_TW,
    zh_HK,
    zh_TW,
  },
});
