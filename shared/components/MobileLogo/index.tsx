import Link from 'next/link';
import { LogoIcon } from '../Icons/LogoIcon';

export const MobileLogo = () => {
  return (
    <Link href="/">
      <LogoIcon />
    </Link>
  );
};
