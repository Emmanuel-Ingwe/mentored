'use client';
import { Skeleton } from '@/shared/components/ui/skeleton';
import SessionNotification from './SessionNotification';
import SubNav from './SubNav';
import useHeader from './useHeader';
import useCurrentUser from '../../hooks/usecurrentUser';

const Header = () => {
  const { currentUser, isLoading, session } = useCurrentUser();
  const { pathname } = useHeader();

  if (isLoading) {
    return <Skeleton className="h-14rem" />;
  }

  if (pathname === '/dashboard') {
    return (
      <div>
        <h1 className="text-2xl font-semibold text-gray-900 lg:text-3xl">
          Welcome Back, {currentUser?.firstName}
        </h1>
        <SessionNotification session={session} />
      </div>
    );
  }

  return <SubNav pathname={pathname} />;
};

export default Header;
