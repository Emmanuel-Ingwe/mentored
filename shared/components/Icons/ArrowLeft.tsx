export const ArrowLeft = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      width="24"
      height="25"
      viewBox="0 0 24 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M19 12.5H5M5 12.5L12 19.5M5 12.5L12 5.5"
        stroke="#667085"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={props.className}
      />
    </svg>
  );
};
