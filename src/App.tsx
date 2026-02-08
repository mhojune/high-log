import { Outlet } from 'react-router-dom';
import Header from '@/components/common/Header';

const App = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};

export default App;