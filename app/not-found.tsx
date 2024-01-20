import NotFoundComp from '@/shared/components/NotFound/NotFoundComp';
import Footer from './(LandingPage)/shared/components/Layout/Footer';
import MainHeader from './(LandingPage)/shared/components/Layout/MainHeader';

const NotFound = () => {
  return (
    <div>
      <MainHeader />
      <NotFoundComp />
      <Footer />
    </div>
  );
};

export default NotFound;
