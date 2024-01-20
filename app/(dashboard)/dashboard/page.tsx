import type { Metadata } from 'next';
import { getUserData } from '@/app/server/helpers/getUser';
import { MenteeDashboard } from './(mentee)/home';
import { MentorDashboard } from './(mentor)';

export const metadata: Metadata = {
  themeColor: '#ffffff',
  title: 'Dashboard',
};

export default async function DashboardPage() {
  const user = await getUserData();
  if (user?.accountType === 'mentee') {
    return <MenteeDashboard />;
  }
  if (user?.accountType === 'mentor') {
    return <MentorDashboard />;
  }
}
