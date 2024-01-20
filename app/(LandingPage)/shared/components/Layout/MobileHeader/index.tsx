import { Hamburger } from '@/shared/components/Icons/Hamburger';
import { ShortLogo } from '@/shared/components/Icons/ShortLogo';

const MobileHeader = () => {
  return (
    <header className="pt-4">
      <div
        className="flex w-full items-start gap-10 self-stretch rounded-2xl border border-white shadow-lg backdrop-filter"
        style={{
          background:
            'linear-gradient(169deg, rgba(234, 255, 254, 0.30) 0%, rgba(205, 201, 241, 0.30) 97.46%)',
        }}
      >
        <div className="flex h-16 w-full items-center p-0 ">
          <div className="flex w-full items-center justify-between self-stretch px-4 py-3 ">
            <ShortLogo />
            <div>
              <Hamburger />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default MobileHeader;
