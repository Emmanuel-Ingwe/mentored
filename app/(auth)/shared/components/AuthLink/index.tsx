import Link from 'next/link';

type Props = {
  text: string;
  href: string;
};

export const AuthLink = ({ text, href }: Props) => {
  return (
    <Link href={href} className="text-sm font-semibold text-primaryx-600">
      {text}
    </Link>
  );
};
