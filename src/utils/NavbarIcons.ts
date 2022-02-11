import { IconType } from "react-icons/lib";
import { FiSettings, FiBell, FiMail } from "react-icons/fi";

export interface NavbarItemsProps {
  url: string;
  icon: IconType;
}

export const IconItems: Array<NavbarItemsProps> = [
  { url: "/notification", icon: FiBell },
  { url: "/mail", icon: FiMail },
  { url: "/setting", icon: FiSettings },
];
