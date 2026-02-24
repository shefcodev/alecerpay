import { FC } from "react";

interface ReceiveProps {
  size?: number;
  stroke?: string;
  className?: string;
}

const Receive: FC<ReceiveProps> = ({
  size = 20,
  stroke = "#64748B",
  className,
}) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className || ""}
    >
      <path
        d="M10 14.1667V2.5"
        stroke={stroke}
        strokeWidth="1.66667"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M5 9.16699L10 14.167L15 9.16699"
        stroke={stroke}
        strokeWidth="1.66667"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M15.8327 17.5H4.16602"
        stroke="#64748B"
        stroke-width="1.66667"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

export default Receive;
