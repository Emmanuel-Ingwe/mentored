import Image from 'next/image';
import linePattern from '@/public/images/line-pattern.png';
import { Stars } from '@/shared/components/Icons/Stars';
import { ScrollArea } from '@/shared/components/ui/scroll-area';
import { AvatarGroup } from '../AvatarGroup';

type Props = {
  children: React.ReactNode;
};

export const AuthLayout = ({ children }: Props) => {
  return (
    <main className="relative flex min-h-screen overflow-auto lg:h-screen lg:overflow-hidden">
      <ScrollArea className="relative min-h-screen w-full lg:grid lg:h-screen lg:w-2/4 lg:content-center">
        {children}
      </ScrollArea>

      <section className="auth-layout-bg hidden min-h-full w-2/4 place-content-center px-24 lg:grid">
        <div className="">
          <Stars />

          <h2 className="mt-8 text-4xl font-medium -tracking-[1.2px] text-white lg:text-6xl lg:leading-[4.5rem] xl:text-desktop-lg">
            Your Path to Personal and Professional Growth!
          </h2>
          <p className="mt-6 text-xs text-gray-200 lg:text-sm xl:text-desktop-sm ">
            Join a diverse group of members worldwide and embark on a
            transformative learning journey with curated tech mentors.
          </p>
          <div className="mt-8 flex items-center gap-4">
            <AvatarGroup />
            <p className="text-gray-200 lg:text-base xl:text-desktop-xs">
              Join 1,000+ mentors and mentees
            </p>
          </div>
        </div>
      </section>

      <Image
        src={linePattern}
        alt="line pattern"
        className="absolute right-0 top-0 hidden h-[40%] w-[15%] lg:block"
      />
    </main>
  );
};
