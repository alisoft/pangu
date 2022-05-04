import React, {FC} from "react";
import { TranslateIcon } from "@heroicons/react/solid";
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

export interface I18nContainerProps {
  className?: string;
}

const I18nContainer: FC<I18nContainerProps> = ({ className = "hidden" }) => {

  const i18nNav: NavItemType = {
    id: ncNanoId(),
    href: "#",
    name: () => <TranslateIcon className="w-7 h-7" aria-hidden="true" />,
    type: "dropdown",
    children: demoChildMenus,
  };

  return (
    <ul className={`nc-Navigation ${className} lg:flex lg:flex-wrap lg:items-center lg:space-x-1 relative`}>
      <NavigationItem menuItem={i18nNav}/>
    </ul>
  );
};

export default I18nContainer;
