import type { FC } from 'react';
import Link from 'next/link';
type Props = {
  session: number;
};
const SessionNotification: FC<Props> = ({ session }) => {
  if (session < 1) {
    return <p className="text-gray-600">You have no upcoming sessions</p>;
  }
  return (
    <p className="text-gray-600">
      You have {session}
      <Link href="/dashboard/sessions" className="text-primaryx-500">
        No upcoming sessions
      </Link>
    </p>
  );
};

export default SessionNotification;
