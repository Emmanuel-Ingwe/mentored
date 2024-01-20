import { AuthSecondaryLayout } from '../shared/components/AuthSecondaryLayout';
import { ForgotPassword } from '.';

export default async function Page() {
  return (
    <AuthSecondaryLayout>
      <ForgotPassword />
    </AuthSecondaryLayout>
  );
}
