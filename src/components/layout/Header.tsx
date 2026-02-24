import { FC } from "react";
import Image from "next/image";

const Header: FC = () => {
  return (
    <header className="w-full h-20.5 bg-white shadow-50 sticky top-0 z-999 px-4">
      <div className="max-w-350 h-full flex justify-end items-center gap-4 mx-auto">
        <button onClick={() => {}}>
          <Image
            src="icons/notification.svg"
            alt="notification"
            width={24}
            height={24}
            className="w-6 h-6 object-cover"
          />
        </button>
        <div className="flex items-center gap-1.5">
          <Image
            src="/images/user.jpg"
            alt="profile image"
            width={32}
            height={32}
            className="w-8 h-8 rounded-full object-cover object-center"
          />
          <span className="text-xs text-secondary-200 font-medium font-poppins">
            Joy Keleb
          </span>
        </div>
      </div>
    </header>
  );
};

export default Header;
