import { FC } from "react";
import Image from "next/image";

interface LogoutButtonProps {
  label?: string;
  onLogout: () => void;
  isExpanded?: boolean;
}

const LogoutButton: FC<LogoutButtonProps> = ({
  label,
  onLogout,
  isExpanded,
}) => {
  return (
    <button
      onClick={onLogout}
      className="inline-flex items-center gap-4 px-4 cursor-pointer"
    >
      <Image
        src="icons/logout.svg"
        alt="logout"
        width={16}
        height={16}
        className="w-4 h-4 object-cover"
      />
      {isExpanded && (
        <span className="text-sm text-error font-poppins font-medium">
          {label}
        </span>
      )}
    </button>
  );
};

export default LogoutButton;
