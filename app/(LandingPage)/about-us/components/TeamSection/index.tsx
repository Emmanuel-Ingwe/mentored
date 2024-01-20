'use client';

import TeamMember from './TeamMember';
import { members } from '../../contents';

const TeamSection = () => {
  return (
    <div className="container bg-gray-50 px-4 py-16 lg:px-28 lg:py-24">
      <div className="mb-12 text-center">
        <h1 className="text-3xl font-semibold text-gray-900 lg:text-4xl">
          Meet our team
        </h1>
        <p className="mx-auto mt-4 lg:w-[768px] lg:text-xl">
          Our philosophy is simple — hire a team of diverse, passionate people
          and foster a culture that empowers you to do your best work.
        </p>
      </div>

      <div>
        <div>
          <div className="flex flex-col items-center justify-between gap-6 lg:flex-row lg:gap-8">
            {members.map((member, index) => {
              return (
                <TeamMember
                  key={index}
                  name={member.name}
                  position={member.position}
                  experience={member.experience}
                  src={member.src}
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamSection;
