import { Base } from '@/app/(auth)/shared/components/Base';
import { UserTypeButton } from '@/app/(auth)/shared/components/UserTypeButton';
import { UserEnum } from '@/app/(auth)/shared/types/enums';
import { PolygonMenteeIcon } from '@/shared/components/Icons/PolygonMenteeIcon';
import { PolygonMentorIcon } from '@/shared/components/Icons/PolygonMentorIcon';
import useUserType from '../../hooks/useUserType';

const UserTypeSelect = () => {
  const { selectUserType } = useUserType();

  return (
    <Base
      title="Welcome to Mentored!"
      subtitle="Explore Mentored&lsquo;s thriving community and choose your path."
      className="lg:px-[20.4%]"
    >
      <div className="space-y-7">
        <UserTypeButton
          onClick={() => {
            return selectUserType(UserEnum.MENTOR);
          }}
          Icon={PolygonMentorIcon}
          userType={UserEnum.MENTOR}
          note="Effortless booking, sharing your expertise seamlessly."
        />

        <UserTypeButton
          onClick={() => {
            return selectUserType(UserEnum.MENTEE);
          }}
          Icon={PolygonMenteeIcon}
          userType={UserEnum.MENTEE}
          note="Gain access to personalized mentorship for accelerated growth."
        />
      </div>
    </Base>
  );
};
export default UserTypeSelect;
