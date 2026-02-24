import { FC } from "react";
import Image from "next/image";
import Link from "next/link";

const InfoBanner: FC = () => {
  return (
    <div className="w-full flex flex-col gap-5 bg-primary-100 px-4 py-2 rounded-lg">
      <Image
        src="icons/user-tag.svg"
        alt="user info"
        width={20}
        height={20}
        className="w-5 h-5 object-cover"
      />
      <p className="text-xs text-secondary-100 font-bold font-inter">
        Got some questions, inquiries or need help?
      </p>
      <Link href="/help">
        <span className="text-[10px] text-success font-normal font-inter underline cursor-pointer">
          Visit AlecerPay Help Desk Here
        </span>
      </Link>
    </div>
  );
};

export default InfoBanner;
