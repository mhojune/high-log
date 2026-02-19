import { Outlet } from 'react-router-dom';
import Header from '@/components/common/Header';
import Footer from '@/components/common/Footer';
import ScrollToTop from '@/hooks/ScrollToTop';
import { AuthProvider } from '@/contexts/AuthContext';

const App = () => {
  return (
    <AuthProvider>
      <ScrollToTop />
      <Header />
      <Outlet />
      <Footer />
    </AuthProvider>
  );
};

export default App;