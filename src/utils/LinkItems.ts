import { IconType } from "react-icons";
import {
  FiHome,
  FiTrendingUp,
  FiUsers,
  FiPackage,
  FiDollarSign,
  FiBarChart2,
  FiMail,
  FiMessageSquare,
} from "react-icons/fi";
import { VscFeedback, VscReport } from "react-icons/vsc";
import { BsBriefcase } from "react-icons/bs";
import { IoMdAnalytics } from "react-icons/io";
import { MdPointOfSale } from "react-icons/md";

interface LinkItemProps {
  name: string;
  icon: IconType;
  url: string;
}

export interface GroupLinkItems {
  groupName: string;
  child: Array<LinkItemProps>;
}

export const LinkItems: Array<GroupLinkItems> = [
  {
    groupName: "Dashboard",
    child: [
      { name: "Home", icon: FiHome, url: "/" },
      { name: "Analytics", icon: FiTrendingUp, url: "/" },
      { name: "Sales", icon: MdPointOfSale, url: "/" },
    ],
  },
  {
    groupName: "Quick Menu",
    child: [
      { name: "Users", icon: FiUsers, url: "/user" },
      { name: "Products", icon: FiPackage, url: "/product" },
      { name: "Transactions", icon: FiDollarSign, url: "/" },
      { name: "Reports", icon: FiBarChart2, url: "/" },
    ],
  },
  {
    groupName: "Notifications",
    child: [
      { name: "Mail", icon: FiMail, url: "/" },
      { name: "Feedback", icon: VscFeedback, url: "/" },
      { name: "Messages", icon: FiMessageSquare, url: "/" },
    ],
  },
  {
    groupName: "Staff",
    child: [
      { name: "Manage", icon: BsBriefcase, url: "/" },
      { name: "Analytics", icon: IoMdAnalytics, url: "/" },
      { name: "Reports", icon: VscReport, url: "/" },
    ],
  },
];
