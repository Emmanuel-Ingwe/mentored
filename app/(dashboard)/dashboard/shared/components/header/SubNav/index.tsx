import Link from 'next/link';
import { BiChevronRight } from 'react-icons/bi';
import { RiHome6Line } from 'react-icons/ri';

type Props = {
  pathname: string;
};

const SubNav = ({ pathname }: Props) => {
  return (
    <div className="flex flex-row items-center justify-start">
      <Link href="/dashboard">
        <RiHome6Line className="h-5 w-5 text-gray-600" />
      </Link>
      <BiChevronRight className="text-gray-300" />
      <div className="h-fit w-fit cursor-pointer rounded-lg bg-gray-100 px-2 py-1">
        <span className="text-gray-700">{pathname}</span>
      </div>
    </div>
  );
};

export default SubNav;
