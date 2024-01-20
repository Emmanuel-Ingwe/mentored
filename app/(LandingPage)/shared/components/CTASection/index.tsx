'use client';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/shared/components/ui/button';
import { CDN_URL } from '@/shared/lib/constants';
import userTypeSwitchStore from '@/shared/store';

type Props = {
  mainText: JSX.Element | string;
  subText: string;
  customButtonText?: string;
};

const CTASection = ({ mainText, subText, customButtonText }: Props) => {
  const { userType } = userTypeSwitchStore();
  const buttonLabel =
    userType === 'MENTEE' ? 'Find a mentor' : 'Become a mentor';
  const btnText = customButtonText ?? buttonLabel;

  return (
    <section className="flex flex-col items-center justify-between gap-16 overflow-hidden bg-gray-50 py-16 lg:flex-row lg:px-16 lg:py-24 xl:px-28">
      <div className="max-lg:px-4 lg:w-[36rem]">
        <h1 className="text-3xl font-semibold text-gray-900 lg:text-4xl lg:leading-[3.25rem] xl:text-5xl xl:leading-[3.75rem]">
          {mainText}
        </h1>
        <p className="mt-6 text-lg text-gray-600 xl:text-xl">{subText}</p>

        {userType === 'MENTOR' && (
          <Link href={{ pathname: '/register', query: { mentor: 'true' } }}>
            <Button className="mt-10">{btnText}</Button>
          </Link>
        )}
        {userType === 'MENTEE' && (
          <Link href={{ pathname: '/find-a-mentor' }}>
            <Button hasAnimaion className="mt-10">
              {btnText}
            </Button>
          </Link>
        )}
      </div>
      <div className="lg:w-[30rem]">
        <div className="ready-to-wrapper">
          <Image
            src={`${CDN_URL}/images/cta-img-1.png`}
            height={200}
            width={200}
            alt=""
            className="p1"
          />
          <Image
            src={`${CDN_URL}/images/cta-img-2.png`}
            height={200}
            width={200}
            alt=""
            className="p2"
          />
          <Image
            src={`${CDN_URL}/images/person-3_izzum1`}
            height={200}
            width={200}
            alt=""
            className="p3"
          />
          <Image
            src={`${CDN_URL}/images/yifhmdbay9swzwknmn0e.png`}
            height={200}
            width={200}
            alt=""
            className="p4"
          />
          <Image
            src={`${CDN_URL}/images/r6fbwmlmzwlqtwzk7f29.png`}
            height={200}
            width={200}
            alt=""
            className="p5"
          />
        </div>
      </div>
    </section>
  );
};

export default CTASection;
