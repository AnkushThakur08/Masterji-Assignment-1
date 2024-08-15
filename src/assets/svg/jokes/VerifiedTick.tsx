import { SVGProps } from "react";

const verifiedTick = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={8}
    height={6}
    viewBox="0 0 8 6"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M7.51767 0.649135C7.68853 0.819988 7.68853 1.097 7.51767 1.26785L3.43434 5.35117C3.35232 5.43324 3.24102 5.47933 3.12499 5.47933C3.00897 5.47933 2.89767 5.43324 2.81564 5.35117L0.482302 3.01784C0.311449 2.84698 0.311449 2.57001 0.482302 2.39915C0.653154 2.22829 0.930168 2.22829 1.10102 2.39915L3.12499 4.42309L6.89899 0.649135C7.06984 0.478283 7.34681 0.478283 7.51767 0.649135Z"
      fill="black"
    />
  </svg>
);
export default verifiedTick;
