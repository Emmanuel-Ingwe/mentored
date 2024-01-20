'use client';
import Image from 'next/image';
import { ScrollArea, ScrollBar } from '@/shared/components/ui/scroll-area';
import { useCompanies } from './useCompanies';

const Companies = () => {
  const { imgSrc } = useCompanies();
  return (
    <div className="flex flex-col items-center justify-center gap-8 py-24">
      <p className="text-[1rem] font-medium text-gray-600">
        Our mentors work in companies like
      </p>
      <ScrollArea className="flex max-w-full items-center justify-center">
        <div className="flex flex-row items-center justify-between gap-8">
          {imgSrc.map(({ src, alt, name }, _) => {
            return (
              <Image src={src} key={name} alt={alt} width={169} height={48} />
            );
          })}
        </div>
        <ScrollBar orientation="horizontal" className="invisible" />
      </ScrollArea>
    </div>
  );
};

export default Companies;
