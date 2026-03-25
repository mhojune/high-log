import { Outlet, useLocation } from 'react-router-dom';
import Header from '@/components/common/Header';
import Footer from '@/components/common/Footer';
import ScrollToTop from '@/hooks/ScrollToTop';
import { AuthProvider } from '@/contexts/AuthContext';

const App = () => {
  const { pathname } = useLocation();
  const hideFooter = pathname.startsWith('/auth');

  return (
    <AuthProvider>
      <ScrollToTop />
      <Header />
      <Outlet />
      {!hideFooter && <Footer />}
    </AuthProvider>
  );
};

export default App;