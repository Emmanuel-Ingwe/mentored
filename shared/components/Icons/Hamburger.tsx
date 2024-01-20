'use client';
type Props = {
  className?: string;
  d: string;
  variants?: {
    closed: { d: string };
    open: { d: string };
  };
  opacity?: string;
};

const Path = (props: Props) => {
  return (
    <path
      fill="transparent"
      strokeWidth="2"
      stroke="#344054"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    />
  );
};

export const Hamburger = () => {
  return (
    <svg width="23" height="18" viewBox="0 0 23 18">
      <Path
        d="M 2 2.5 L 20 2.5"
        className="top"
        variants={{
          closed: { d: 'M 2 2.5 L 20 2.5' },
          open: { d: 'M 3 16.5 L 17 2.5' },
        }}
      />
      <Path d="M 2 9.423 L 20 9.423" opacity="1" className="middle" />
      <Path
        d="M 2 16.346 L 20 16.346"
        className="bottom"
        variants={{
          closed: { d: 'M 2 16.346 L 20 16.346' },
          open: { d: 'M 3 2.5 L 17 16.346' },
        }}
      />
    </svg>
  );
};
