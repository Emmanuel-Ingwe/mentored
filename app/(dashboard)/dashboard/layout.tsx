import { Navbar } from './shared/components/Layout/Navbar';
import { Sidebar } from './shared/components/Layout/Sidebar';

type Props = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: Props) {
  return (
    <div>
      <div className="mx-auto flex">
        <Sidebar />
        <div className="relative w-full lg:ml-[15rem]">
          <Navbar />
          <main className="overflow-x-auto bg-gray-50 p-4 lg:p-8">
            {children}
          </main>
        </div>
      </div>
    </div>
  );
}
