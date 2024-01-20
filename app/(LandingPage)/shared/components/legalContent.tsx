import type { FC } from 'react';

type Props = {
  title: string;
  body: { __html: string };
};
const LegalContent: FC<Props> = ({ title, body }) => {
  const termsParagraph =
    'md:w-1/2 text-slate-600 text-xs md:text-base font-normal leading-[25px] text-left mb-2';
  const termsHeader =
    'md:w-1/2 text-gray-900 text-sm md:text-xl font-semibold leading-[25px] text-left md:my-4';

  return (
    <>
      <p className={termsHeader}>{title}</p>
      <span dangerouslySetInnerHTML={body} className={termsParagraph} />
    </>
  );
};

export default LegalContent;
