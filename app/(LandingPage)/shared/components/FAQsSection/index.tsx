import Image from 'next/image';
import lady from '@/public/images/avater-lady.png';
import { SectionHeader } from '@/shared/components/SectionHeader';
import { Button } from '@/shared/components/ui/button';
import { cn } from '@/shared/lib/utils';
import { FAQAccordion } from '../FAQAccordion';

type Props = {
  className?: string;
};

export const FAQsSection = ({ className }: Props) => {
  return (
    <div className={cn('px-4 pb-16 lg:px-28 lg:pb-24', className)}>
      <SectionHeader subHeader="Everything you need to know about being a mentor on MentorsHub.">
        Frequently asked questions
      </SectionHeader>
      <FAQAccordion />
      <div className="h-[298px] bg-gray-50 py-8 max-lg:rounded-2xl">
        <div className="flex items-center justify-center -space-x-4">
          <Image src={lady} alt="avatar lady" className="h-12 w-12" />
          <Image src={lady} alt="avatar lady" className="z-10 h-14 w-14" />
          <Image src={lady} alt="avatar lady" className="h-12 w-12" />
        </div>
        <h2 className="mt-8 text-center text-xl font-semibold text-gray-900">
          Still have questions?
        </h2>
        <p className="text-center text-gray-600 lg:text-lg">
          Can’t find the answer you’re looking for? Please chat to our friendly
          team.
        </p>

        <div className="mt-8 flex justify-center">
          <Button>Get in touch</Button>
        </div>
      </div>
    </div>
  );
};
