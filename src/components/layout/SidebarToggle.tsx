import { FC, Dispatch, SetStateAction } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

interface SidebarToggleProps {
  isExpanded: boolean | null;
  setIsExpanded: Dispatch<SetStateAction<boolean | null>>;
  showBar: boolean | null;
  onShowBar: (value: boolean) => void;
}

const SidebarToggle: FC<SidebarToggleProps> = ({
  isExpanded,
  setIsExpanded,
  showBar,
  onShowBar,
}) => {
  return (
    <button className="w-fit h-fit md:hidden" onClick={() => onShowBar(true)}>
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
  );
};

export default SidebarToggle;
