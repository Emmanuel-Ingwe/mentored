import Link from 'next/link';
import { SectionHeader } from '@/shared/components/SectionHeader';
import { Button } from '@/shared/components/ui/button';
import { TabsContent } from '@/shared/components/ui/tabs';
import SearchPopover from './components/SearchPopover';
import UserTypeSwitch from '../../../shared/components/UserTypeSwitch';
import CircularDivs from '../MentoredConnected';

const HeroSection = () => {
  return (
    <section className="mt-16 w-full lg:mt-32">
      <UserTypeSwitch defaultValue="MENTEE">
        <TabsContent value="MENTEE">
          <div className="mt-4">
            <SectionHeader
              subHeader="Connect with experienced mentors s c d to achieve your career goals in tech."
              wrapperClassName="space-y-6 lg:w-auto mb-12 w"
              headerClassName="text-4xl leading-[2.75rem]  lg:text-[4.5rem] lg:leading-[5.625rem]"
            >
              Unlock your potential with <br />
              <span className="text-primaryx">personalized</span> mentorship.
            </SectionHeader>
            <div className="flex justify-center">
              <SearchPopover />
            </div>
            <CircularDivs />
          </div>
        </TabsContent>
        <TabsContent value="MENTOR">
          <div className="mt-4 text-center">
            <SectionHeader
              subHeader="Join MentorsHub and make a meaningful impact on future tech leaders."
              wrapperClassName="space-y-6 lg:w-auto"
              headerClassName="text-4xl leading-[2.75rem] lg:text-[4.5rem] lg:leading-[5.625rem]"
            >
              Empower tech <br /> professionals as a Mentor
            </SectionHeader>
            <div className="mt-12 flex justify-center">
              <Link
                href={{ pathname: '/register', query: { mentor: 'true' } }}
                className="max-lg:w-full"
              >
                <Button hasAnimaion className="w-full lg:w-fit" size={'lg'}>
                  Become a mentor
                </Button>
              </Link>
            </div>
            <CircularDivs />
          </div>
        </TabsContent>
      </UserTypeSwitch>
    </section>
  );
};

export default HeroSection;
