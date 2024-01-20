import Image from 'next/image';
import emptyBox from '@/public/images/empty-box.png';

type Props = {
  title: string;
  subtitle: string;
};

export const EmptyContent = ({ title, subtitle }: Props) => {
  return (
    <div className="flex w-full flex-col items-center justify-center py-16">
      <Image
        src={emptyBox}
        alt="empty box"
        className="h-[178px] w-[240px] object-contain"
        width={240}
        height={178}
      />
      <h1 className="mt-[0.32rem] text-xl font-semibold text-gray-900">
        {title}
      </h1>
      <p className="mt-2 text-gray-600">{subtitle}</p>
    </div>
  );
};
