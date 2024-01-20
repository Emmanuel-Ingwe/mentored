export const StepIcon = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      width="28"
      height="28"
      viewBox="0 0 28 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <circle
        cx="14.25"
        cy="14.25"
        r="12.375"
        strokeWidth="4"
        className="fill-gray-100 group-data-[active=true]:fill-primaryx-500 group-data-[completed=true]:fill-primaryx-500 group-data-[active=true]:stroke-polar-300 group-data-[complete=true]:stroke-none"
      />
      <path
        d="M17.75 14.375C17.75 16.239 16.239 17.75 14.375 17.75C12.511 17.75 11 16.239 11 14.375C11 12.511 12.511 11 14.375 11C16.239 11 17.75 12.511 17.75 14.375Z"
        fill="white"
        className="group-data-[active=true]:visible group-data-[completed=true]:invisible"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M18.2986 9.263L11.437 15.8851L9.61614 13.9397C9.28072 13.6234 8.75364 13.6043 8.37031 13.8726C7.99656 14.1505 7.89114 14.6393 8.12114 15.0322L10.2774 18.5397C10.4882 18.8655 10.8524 19.0668 11.2645 19.0668C11.6574 19.0668 12.0311 18.8655 12.242 18.5397C12.587 18.0893 19.1707 10.2405 19.1707 10.2405C20.0332 9.35884 18.9886 8.58259 18.2986 9.25342V9.263Z"
        fill="white"
        className="invisible group-data-[completed=true]:visible"
      />
    </svg>
  );
};

{
  /* <svg
  width="28"
  height="28"
  viewBox="0 0 28 28"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <circle
    cx="14.25"
    cy="14.25"
    r="12.375"
    fill="#353CF7"
    stroke="#F4EBFF"
    strokeWidth="2.25"
  />
  <path
    fillRule="evenodd"
    clipRule="evenodd"
    d="M18.2986 9.263L11.437 15.8851L9.61614 13.9397C9.28072 13.6234 8.75364 13.6043 8.37031 13.8726C7.99656 14.1505 7.89114 14.6393 8.12114 15.0322L10.2774 18.5397C10.4882 18.8655 10.8524 19.0668 11.2645 19.0668C11.6574 19.0668 12.0311 18.8655 12.242 18.5397C12.587 18.0893 19.1707 10.2405 19.1707 10.2405C20.0332 9.35884 18.9886 8.58259 18.2986 9.25342V9.263Z"
    fill="white"
  />
</svg>; */
}
