import { LogoIcon } from '@/shared/components/Icons/LogoIcon';

const Circle = () => {
  return (
    <div className="relative w-full md:hidden lg:block">
      <div className="absolute left-2/4 top-2/4 z-50 -translate-x-2/4 -translate-y-2/4">
        <LogoIcon className="h-5 w-5 lg:h-12 lg:w-12" />
      </div>
      <div className="outer-ring outer-ring-main h-[320px] w-[320px] before:absolute before:top-[-10px] before:h-[17.76px] before:w-[17.76px] before:rounded-full lg:h-[816px] lg:w-[816px] lg:before:top-[-50px] lg:before:h-[95.71px] lg:before:w-[95.71px]">
        <div className="outer-ring outer-ring-main-1 h-[85%] w-[85%] before:absolute before:-left-[10px] before:h-[17.76px] before:w-[17.76px] before:rounded-full lg:before:-left-[25px] lg:before:h-[50.18px] lg:before:w-[50.18px]">
          <div className="outer-ring outer-ring-main-2 h-[85%] w-[85%] before:absolute before:-right-[15px] before:h-[42.11px] before:w-[42.11px] before:rounded-full lg:before:-right-[45px] lg:before:h-[89.20px] lg:before:w-[89.20px]">
            <div className="outer-ring outer-ring1 h-[85%] w-[85%] before:absolute before:-bottom-[17.5px] before:h-[38.16px] before:w-[38.16px] before:rounded-full lg:before:-bottom-[40px] lg:before:h-[80.84px] lg:before:w-[80.84px]">
              <div className="outer-ring outer-ring2 h-[85%] w-[85%] before:absolute before:-left-[20px] before:h-[42.11px] before:w-[42.11px] before:rounded-full lg:before:-left-[40px] lg:before:h-[89.20px] lg:before:w-[89.20px]">
                <div className="outer-ring outer-ring3 h-[125px] w-[125px] before:absolute before:-right-[15px] before:h-[31.58px] before:w-[31.58px] before:rounded-full lg:h-[325px] lg:w-[325px] lg:before:-right-[30px] lg:before:h-[66.90px] lg:before:w-[66.90px]">
                  <div className="outer-ring outer-ring4 h-[85%] w-[85%] content-none before:absolute before:-bottom-[7px] before:h-[18.42px] before:w-[18.42px] before:rounded-full lg:before:-bottom-[20px] lg:before:h-[39.03px] lg:before:w-[39.03px]">
                    <div className="outer-ring outer-ring7 z-50">
                      <div className="outer-ring outer-ring5">
                        <div className="outer-ring outer-ring6" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Circle;
