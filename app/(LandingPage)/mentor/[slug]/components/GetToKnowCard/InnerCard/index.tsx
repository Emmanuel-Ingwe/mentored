import Image from 'next/image';
import avatarLady from '@/public/images/avater-lady.png';
import office from '@/public/images/office.jpeg';
import { ArrowUpRight } from '@/shared/components/Icons/ArrowUpRight';
import { Button } from '@/shared/components/ui/button';
import { IdentityWidget } from '../../IdentityWidget';

export const InnerCard = () => {
  return (
    <div className="max-w-[316px] rounded-2xl border border-polar-100 bg-white px-[0.83rem] py-[0.56rem]">
      <Image
        src={office}
        alt="card image"
        className="h-[160px] w-[289.34px] rounded-lg object-cover"
      />
      <h3 className="mt-4 text-sm font-semibold text-primaryx-500">Design</h3>
      <div className="group mt-3 flex items-start justify-between">
        <h1 className="text-2xl font-semibold text-gray-900 group-hover:underline">
          UX review presentations
        </h1>
        <Button variant={'ghost'} size={'icon'}>
          <ArrowUpRight />
        </Button>
      </div>
      <p className="mb-6 mt-2 text-gray-600">
        How do you create compelling presentations that wow your colleagues and
        impress your managers?
      </p>

      <IdentityWidget name="Pius Linux" text="20 Jan 2022" image={avatarLady} />
    </div>
  );
};
