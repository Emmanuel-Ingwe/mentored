export const ArrowRight = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      width="20"
      height="21"
      viewBox="0 0 20 21"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M4.16666 10.5H15.8333M15.8333 10.5L10 4.66666M15.8333 10.5L10 16.3333"
        stroke="#1319B3"
        strokeWidth="1.66667"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={props.className}
      />
    </svg>
  );
};
