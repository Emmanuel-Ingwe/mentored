'use client';
import Link from 'next/link';

export const ShortLogo = () => {
  return (
    <Link href="/">
      <svg
        width="32"
        height="32"
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M17.0387 9.92795L14.2403 14.3902L10.2956 20.6804C9.2433 22.3721 8.46442 23.6559 7.96861 24.5269C7.87555 24.3586 7.77112 24.1724 7.65503 23.9678V27.9823H10.245L22.931 7.91878V27.9823H28.4546V4H20.7558L17.0384 9.92795H17.0387Z"
          fill="#353CF7"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M17.0383 9.9281L14.2398 14.39L8.52392 7.56808V27.9999H3V4.01733H11.6194L17.0383 9.9281Z"
          fill="#201E1E"
        />
      </svg>
    </Link>
  );
};
