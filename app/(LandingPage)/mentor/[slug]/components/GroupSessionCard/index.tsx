import Image from 'next/image';
import avatarLady from '@/public/images/avater-lady.png';
import menteeReviewImg from '@/public/images/mentee-review-img.jpeg';
import { ArrowUpRight } from '@/shared/components/Icons/ArrowUpRight';
import { Button } from '@/shared/components/ui/button';
import { IdentityWidget } from '../IdentityWidget';

export const GroupSessionCard = () => {
  return (
    <div className="max-w-[26rem] rounded-xl border border-polar-100 bg-white p-4">
      <Image
        src={menteeReviewImg}
        alt="card image"
        className="h-[15rem] w-[24rem] object-cover"
      />
      <h3 className="mt-4 text-sm font-semibold text-gray-600">
        Oct 24, 8:00pm GMT
      </h3>
      <div className="group mt-3 flex cursor-pointer items-center justify-between">
        <h1 className="text-2xl font-semibold text-gray-900 group-hover:underline">
          UX Case Study Presentations
        </h1>
        <Button variant={'ghost'} size={'icon'} className="h-fit w-fit">
          <ArrowUpRight />
        </Button>
      </div>
      <p className="mb-6 mt-2 text-gray-600">
        How do you create compelling presentations that wow your colleagues and
        impress your managers?
      </p>

      <IdentityWidget
        name="Pius Linux"
        text="Digital media manager at Meta"
        image={avatarLady}
      />
    </div>
  );
};
