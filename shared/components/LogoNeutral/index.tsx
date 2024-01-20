import Image from 'next/image';
import Link from 'next/link';

export const LogoNeutral = () => {
  return (
    <Link href="/">
      <Image
        src="/images/logo-neutral.png"
        alt="Mentored Logo"
        width={175}
        height={32}
      />
    </Link>
  );
};
