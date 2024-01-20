type Props = React.SVGProps<SVGSVGElement> & { pathClassName?: string };

export const Check = ({ pathClassName, ...props }: Props) => {
  return (
    <svg
      width="18"
      height="13"
      viewBox="0 0 18 13"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M17 1L6 12L1 7"
        stroke="black"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={pathClassName}
      />
    </svg>
  );
};
