export const Dot = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      width="10"
      height="11"
      viewBox="0 0 10 11"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <rect
        y="0.5"
        width="10"
        height="10"
        rx="5"
        fill="white"
        className={props.className}
      />
    </svg>
  );
};
