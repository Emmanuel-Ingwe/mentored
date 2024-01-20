import { WelcomeSection } from '../components/WelcomeSection';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="px-4 lg:px-28">
      <WelcomeSection />
      {children}
    </div>
  );
}
