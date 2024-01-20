export const PlayButton = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      width="88"
      height="89"
      viewBox="0 0 88 89"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g filter="url(#filter0_b_288_11627)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M44 88.5605C68.3005 88.5605 88 68.8611 88 44.5605C88 20.26 68.3005 0.560547 44 0.560547C19.6995 0.560547 0 20.26 0 44.5605C0 68.8611 19.6995 88.5605 44 88.5605ZM37.125 60.6999L61.875 46.8662C63.7083 45.8414 63.7083 43.2796 61.875 42.2549L37.125 28.4212C35.2917 27.3965 33 28.6774 33 30.7268V58.3943C33 60.4437 35.2917 61.7246 37.125 60.6999Z"
          fill="white"
          fillOpacity="0.3"
        />
      </g>
      <defs>
        <filter
          id="filter0_b_288_11627"
          x="-16"
          y="-15.4395"
          width="120"
          height="120"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feGaussianBlur in="BackgroundImageFix" stdDeviation="8" />
          <feComposite
            in2="SourceAlpha"
            operator="in"
            result="effect1_backgroundBlur_288_11627"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_backgroundBlur_288_11627"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  );
};
