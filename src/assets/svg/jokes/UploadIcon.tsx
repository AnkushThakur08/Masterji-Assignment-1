import { SVGProps } from "react";

const UploadIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={10}
    height={9}
    viewBox="0 0 10 9"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M4.58829 0L7.49421 2.78653L6.77538 3.48072L5.0981 1.86746V6.55568H4.07848V1.86746L2.39611 3.48072L1.67727 2.78653L4.58829 0ZM9.17658 6.06681L9.16638 7.78273C9.16638 8.45736 8.5954 9 7.89186 9H1.27453C0.565889 9 0 8.45247 0 7.77784V6.06681H1.01962V7.77784C1.01962 7.91472 1.13178 8.02227 1.27453 8.02227H7.89186C8.03461 8.02227 8.14676 7.91472 8.14676 7.77784L8.15696 6.06681H9.17658Z"
      fill="#71767B"
    />
  </svg>
);
export default UploadIcon;
