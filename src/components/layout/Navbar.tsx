"use client";

import { FC } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Logo from "./Logo";
import LogoutButton from "../ui/logout-button";
import InfoBanner from "./InfoBanner";
import { LINKS } from "@/lib/config/constants";
import { cn } from "@/lib/utils";

const Navbar: FC = () => {
  const pathname = usePathname();

  return (
    <aside className="w-60 h-full min-w-fit max-w-60 min-h-screen flex flex-col justify-between gap-16 bg-primary-50 px-2 pt-12 pb-8 fixed top-0 left-0 overflow-y-auto scroll-bar">
      <nav className="flex flex-col gap-12">
        <div className="flex justify-between pl-4">
          <Logo withText />
          <Image
            src="icons/grid-toggle.svg"
            alt="toggle"
            width={24}
            height={24}
            className="w-6 h-6 object-cover -mt-4"
          />
        </div>
        <div className="flex flex-col gap-8">
          {Object.values(LINKS).map((group, index) => (
            <div key={index} className="flex flex-col gap-1">
              <h4 className="inline-block text-[11.8px] text-secondary-50 font-bold font-inter px-4 uppercase">
                {group.label}
              </h4>
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
                      <span
                        className={cn(
                          "text-sm text-secondary-50 font-medium font-poppins",
                          isActive && "text-white",
                        )}
                      >
                        {link.label}
                      </span>
                    </Link>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </nav>
      <section className="flex flex-col gap-4">
        <LogoutButton label="Logout" onLogout={() => {}} />
        <InfoBanner />
      </section>
    </aside>
  );
};

export default Navbar;
