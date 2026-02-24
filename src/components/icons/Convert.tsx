import { FC } from "react";

interface ConvertProps {
  size?: number;
  stroke?: string;
  className?: string;
}

const Convert: FC<ConvertProps> = ({
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
        d="M6.66732 2.5L3.33398 5.83333L6.66732 9.16667"
        stroke={stroke}
        strokeWidth="1.66667"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M3.33398 5.83301H16.6673"
        stroke={stroke}
        strokeWidth="1.66667"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M13.334 17.4997L16.6673 14.1663L13.334 10.833"
        stroke={stroke}
        strokeWidth="1.66667"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M16.6673 14.167H3.33398"
        stroke={stroke}
        strokeWidth="1.66667"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default Convert;
