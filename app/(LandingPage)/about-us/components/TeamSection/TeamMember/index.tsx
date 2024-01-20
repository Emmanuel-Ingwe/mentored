import type { FC } from 'react';
import Image from 'next/image';
import type { StaticImageData } from 'next/image';
import { LinkedIn } from '@/shared/components/Icons/LinkedIn';
import { Twitter } from '@/shared/components/Icons/Twitter';

type Props = {
  name: string;
  position: string;
  experience: string;
  src: StaticImageData;
};

const TeamMember: FC<Props> = ({ name, position, experience, src }) => {
  return (
    <div className="flex max-w-[343px] flex-col gap-5 bg-white p-6 text-center lg:max-w-[280px]">
      <div className="text-center">
        <Image src={src} alt="team member" className="mx-auto" />
      </div>
      <div>
        <span className="mb-4">
          <h2 className="text-lg font-semibold text-gray-900">{name}</h2>
          <p className="text-indigo-600">{position}</p>
        </span>

        <span>
          <p>{experience}</p>
        </span>
      </div>
      <div className="flex justify-center gap-4">
        <Twitter />
        <LinkedIn />
      </div>
    </div>
  );
};

export default TeamMember;
