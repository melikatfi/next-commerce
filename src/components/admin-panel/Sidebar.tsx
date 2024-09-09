import React from "react";
import { MdDashboard, MdManageAccounts } from "react-icons/md";
import { GrTransaction } from "react-icons/gr";
import { IoAnalytics, IoSettings } from "react-icons/io5";
import { RiShoppingCartLine } from "react-icons/ri";
import { BiLogoReact } from "react-icons/bi";
import Link from "next/link";

const sidebarPages = [
  {
    title: "Dashboard",
    icon: <MdDashboard />,
    href: "/admin/dashboard",
  },
  {
    title: "Products",
    icon: <RiShoppingCartLine />,
    href: "/admin/products",
  },
  {
    title: "Accounts",
    icon: <MdManageAccounts />,
    href: "#",
  },
  {
    title: "Transactions",
    icon: <GrTransaction />,
    href: "#",
  },
  {
    title: "Analytics",
    icon: <IoAnalytics />,
    href: "#",
  },
  {
    title: "Settings",
    icon: <IoSettings />,
    href: "#",
  },
];

const Sidebar = () => {
  return (
    <div className="bg-white w-[300px] min-h-screen p-4 shrink-0">
      <div className="flex items-center gap-4">
        <BiLogoReact />
        <h4 className="text-[20px] font-semibold">Themika Dashboard</h4>
      </div>
      <ul className="space-y-4 mt-6">
        {sidebarPages.map((sidebarPage) => (
          <Link
            key={sidebarPage.title}
            href={sidebarPage.href}
            className={`flex gap-2 items-center p-4 rounded-lg cursor-pointer hover:bg-pink hover:text-white ${
              pathName === sidebarPage.href
                ? "bg-pink text-white"
                : "bg-gray-200"
            }`}
          >
            <span className="text=[20px]">{sidebarPage.icon}</span>
            <p>{sidebarPage.title}</p>
          </Link>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
