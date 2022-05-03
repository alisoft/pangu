import React, {FC} from "react";
import NavigationItem, {NavItemType} from "../../components/Navigation/NavigationItem";
import ncNanoId from "../../utils/ncNanoId";
import i18n from '../../locales'

const demoChildMenus: NavItemType[] = [
  {
    id: ncNanoId(),
    href: "#",
    name: "i18n.en-US.title",
    element: "button",
    onClick: async () => {
      await i18n.changeLanguage('en-US');
    }
  },
  {
    id: ncNanoId(),
    href: "#",
    name: "i18n.zh-CN.title",
    element: "button",
    onClick: async () => {
      await i18n.changeLanguage('zh-CN');
    }
  },
];

const I18nContainer: FC = () => {

  const i18nNav: NavItemType = {
    id: ncNanoId(),
    href: "#",
    name: "i18n.title",
    type: "dropdown",
    children: demoChildMenus,
  };

  return (
    <ul className="nc-Navigation hidden lg:flex lg:flex-wrap lg:items-center lg:space-x-1 relative">
      <NavigationItem menuItem={i18nNav}/>
    </ul>
  );
};

export default I18nContainer;
