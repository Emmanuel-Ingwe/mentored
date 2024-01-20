import { Rating } from '@/app/(LandingPage)/shared/components/Rating';
import avatarLady from '@/public/images/avater-lady.png';
import { Button } from '@/shared/components/ui/button';
import { IdentityWidget } from '../IdentityWidget';

export const ReviewCard = () => {
  return (
    <div className="max-w-[45.5rem] rounded-2xl border border-polar-100 p-4">
      <p className="text-sm font-semibold text-gray-600">October 4, 2023</p>
      <h3 className="mt-1 text-lg font-medium text-gray-900">
        She was very supportive!
      </h3>
      <div className="mt-4 flex gap-2">
        <Rating className="gap-1" rating={5} />
        <span className="font-medium text-gray-900">4.9</span>
      </div>

      <div className="mt-8 flex items-center justify-between">
        <IdentityWidget
          image={avatarLady}
          name="Taiwo Bakare"
          text="Product Designer"
        />
        <Button variant={'ghost'}>Mentee</Button>
      </div>
    </div>
  );
};
