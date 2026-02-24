import { FC } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Action } from "../lib/types";

interface ActionButtonProps {
  action: Action;
}

const ActionButton: FC<ActionButtonProps> = ({ action }) => {
  return (
    <Button
      variant="outline"
      className="flex flex-col items-center border-2 border-primary-100 hover:bg-primary-50 gap-2 px-8 py-8 rounded-3xl"
      tabIndex={1}
    >
      <Image
        src={action.icon}
        alt={action.label}
        width={16}
        height={16}
        className="w-4 h-4 object-cover"
      />
      <span className="text-sm text-primary-100 font-medium font-poppins">
        {action.label}
      </span>
    </Button>
  );
};

export default ActionButton;
