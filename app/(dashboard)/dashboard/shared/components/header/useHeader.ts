import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';

const useHeader = () => {
  const pathname = usePathname();
  const [updatePathname, setUpdatePathname] = useState(pathname);

  useEffect(() => {
    if (pathname === '/dashboard') {
      return;
    }
    const formattedPathname = pathname.split('/dashboard/')[1];
    if (formattedPathname && formattedPathname.includes('-')) {
      setUpdatePathname(
        formattedPathname.replace(/-/g, ' ').replace(/\b\w/g, (c) => {
          return c.toUpperCase();
        }),
      );
    } else {
      setUpdatePathname(
        formattedPathname.replace(/\b\w/g, (c) => {
          return c.toUpperCase();
        }),
      );
    }
  }, [pathname]);

  return {
    pathname: updatePathname,
  };
};
export default useHeader;
