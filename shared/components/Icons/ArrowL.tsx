export const ArrowL = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      width="92"
      height="92"
      viewBox="0 0 92 92"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g filter="url(#filter0_d_190_19284)">
        <circle
          cx="32"
          cy="32"
          r="32"
          transform="matrix(-1 0 0 1 78 10)"
          fill="white"
        />
      </g>
      <path
        d="M49.4098 32.3574L39.7676 41.9997L49.4098 51.6419"
        stroke="#353CF7"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <defs>
        <filter
          id="filter0_d_190_19284"
          x="0"
          y="0"
          width="92"
          height="92"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="4" />
          <feGaussianBlur stdDeviation="7" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.0462007 0 0 0 0 0.0147569 0 0 0 0 0.40191 0 0 0 0.09 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_190_19284"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_190_19284"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  );
};
