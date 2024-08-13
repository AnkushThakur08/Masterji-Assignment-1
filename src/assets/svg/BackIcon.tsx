import { SVGProps } from "react";
const BackIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={18}
    height={14}
    viewBox="0 0 18 14"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M17 7L1 7M1 7L7 13M1 7L7 1"
      stroke="black"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
export default BackIcon;
