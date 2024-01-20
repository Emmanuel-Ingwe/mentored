import { AuthSecondaryLayout } from '../shared/components/AuthSecondaryLayout';
import { VerifyEmail } from '.';

export default function Page({
  searchParams,
}: {
  searchParams: { [key: string]: string };
}) {
  const { email } = searchParams;
  return (
    <AuthSecondaryLayout>
      <VerifyEmail email={email} />
    </AuthSecondaryLayout>
  );
}
