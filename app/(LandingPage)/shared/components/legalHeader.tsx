import type { FC } from 'react';

type Props = {
  title: string;
  date: string;
  content: string;
};
const LegalHeader: FC<Props> = ({ date, title, content }) => {
  return (
    <div className="flex flex-col items-center p-4 md:my-8 md:p-0">
      <p className="mt-2 text-center text-xs font-semibold leading-normal text-indigo-600">
        Current as of {date}
      </p>
      <p className="my-2 text-center text-sm font-semibold leading-[30px] text-gray-900 md:text-xl">
        {title}
      </p>
      <p className="mb-2 text-center text-xs font-normal leading-[25px] text-slate-600 md:w-1/2 md:text-base ">
        {content}
      </p>
    </div>
  );
};

export default LegalHeader;
