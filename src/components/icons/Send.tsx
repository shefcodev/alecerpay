import { FC } from "react";

interface SendProps {
  size?: number;
  stroke?: string;
  className?: string;
}

const Send: FC<SendProps> = ({ size = 20, stroke = "#64748B", className }) => {
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
        d="M12.1125 18.0711C12.1442 18.15 12.1992 18.2174 12.2702 18.2641C12.3413 18.3108 12.4249 18.3347 12.5099 18.3325C12.5949 18.3303 12.6772 18.3022 12.7457 18.2519C12.8143 18.2016 12.8658 18.1316 12.8934 18.0511L18.31 2.21781C18.3367 2.14397 18.3418 2.06406 18.3247 1.98744C18.3076 1.91081 18.2691 1.84064 18.2135 1.78513C18.158 1.72961 18.0879 1.69106 18.0112 1.67397C17.9346 1.65688 17.8547 1.66197 17.7809 1.68864L1.94752 7.10531C1.8671 7.13289 1.79704 7.18441 1.74675 7.25295C1.69645 7.3215 1.66833 7.40379 1.66615 7.48878C1.66398 7.57377 1.68785 7.65739 1.73457 7.72842C1.78129 7.79945 1.84862 7.85448 1.92752 7.88614L8.53585 10.5361C8.74476 10.6198 8.93456 10.7449 9.09382 10.9038C9.25309 11.0628 9.3785 11.2524 9.46252 11.4611L12.1125 18.0711Z"
        stroke={stroke}
        strokeWidth="1.66667"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M18.2124 1.78906L9.0957 10.9049"
        stroke={stroke}
        strokeWidth="1.66667"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default Send;
