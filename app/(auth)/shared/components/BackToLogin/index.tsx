import Link from 'next/link';
import { ArrowLeft } from '@/shared/components/Icons/ArrowLeft';

export const BackToLogin = () => {
  return (
    <Link href="/login">
      <div className="mt-8 flex items-center justify-center gap-2 text-sm font-semibold text-gray-600">
        <ArrowLeft className="h-5 w-5" />
        Back to login
      </div>
    </Link>
  );
};
