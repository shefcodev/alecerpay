"use client";

import { FC, Dispatch, SetStateAction } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Logo from "./Logo";
import LogoutButton from "../ui/logout-button";
import InfoBanner from "./InfoBanner";
import { LINKS } from "@/lib/config/constants";
import { cn } from "@/lib/utils";

interface SidebarProps {
  isExpanded: boolean | null;
  setIsExpanded: Dispatch<SetStateAction<boolean | null>>;
}

const Sidebar: FC<SidebarProps> = ({ isExpanded, setIsExpanded }) => {
  const pathname = usePathname();

  return (
    <aside
      className={cn(
        "w-fit sm:w-40 md:w-50 lg:w-60 h-full max-w-60 min-h-screen flex flex-col justify-between gap-16 bg-primary-50 px-2.5 pt-12 pb-8 overflow-y-auto scroll-bar",
        !isExpanded && "w-fit max-w-fit",
      )}
    >
      <nav className="flex flex-col gap-12">
        <div className="flex justify-between pl-4 relative">
          <Logo withText={isExpanded as boolean} />
          <button
            className={cn(
              "w-fit h-fit -mt-4",
              !isExpanded && "absolute -top-3 -right-0.5",
            )}
            onClick={() => setIsExpanded((prev) => !prev)}
          >
            <Image
              src="icons/grid-toggle.svg"
              alt="toggle"
              width={24}
              height={24}
              className={cn(
                "w-6 h-6 object-cover transition-transform cursor-pointer",
                !isExpanded && "rotate-180",
              )}
            />
          </button>
        </div>
        <div className="flex flex-col gap-8">
          {Object.values(LINKS).map((group, index) => (
            <div key={index} className="flex flex-col gap-1">
              {isExpanded && (
                <h4 className="inline-block text-[11.8px] text-secondary-50 font-bold font-inter px-4 uppercase">
                  {group.label}
                </h4>
              )}
              <div className="flex flex-col gap-2">
                {group.links.map((link, index) => {
                  const isActive =
                    pathname.toLowerCase() === link.route.toLowerCase() ||
                    pathname
                      .toLowerCase()
                      .startsWith(link.route.toLowerCase() + "/");
                  const Icon = link.icon;

                  return (
                    <Link
                      key={index}
                      href={link.route}
                      role="button"
                      tabIndex={index}
                      className={cn(
                        "inline-flex items-center gap-2 px-4 py-3 hover:bg-primary-100/10 rounded-lg cursor-pointer transition-colors",
                        isActive && "bg-primary-100",
                      )}
                    >
                      <Icon size={20} stroke={isActive ? "white" : "#64748B"} />
                      {isExpanded && (
                        <span
                          className={cn(
                            "text-sm text-secondary-50 font-medium font-poppins transition-colors",
                            isActive && "text-white",
                          )}
                        >
                          {link.label}
                        </span>
                      )}
                    </Link>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </nav>
      <section className="flex flex-col gap-8">
        <LogoutButton
          label="Logout"
          onLogout={() => {}}
          isExpanded={isExpanded as boolean}
        />
        {isExpanded && <InfoBanner />}
      </section>
    </aside>
  );
};

export default Sidebar;
