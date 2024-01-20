import Link from 'next/link';

export const Logo = () => {
  return (
    <Link href="/">
      <img src="/images/logo.png" alt="logo" width={175} height={32} />
    </Link>
  );
};
