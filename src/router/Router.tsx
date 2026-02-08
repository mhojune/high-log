import { createBrowserRouter } from 'react-router-dom';
import App from '@/App';
import Home from '@/pages/Home';
import SignUp from '@/pages/SignUp';
import Login from '@/pages/Login';
import Guide from '@/pages/Guide';
import InterviewQuestions from '@/pages/InterviewQuestions';
import InterviewPractice from '@/pages/InterviewPractice';
import RecordManagement from '@/pages/RecordManagement';
import MyPage from '@/pages/MyPage';
import Support from '@/pages/Support';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: 'signup',
        element: <SignUp />,
      },
      {
        path: 'login',
        element: <Login />,
      },
      {
        path: 'guide',
        element: <Guide />,
      },
      {
        path: 'interview/questions',
        element: <InterviewQuestions />,
      },
      {
        path: 'interview/practice',
        element: <InterviewPractice />,
      },
      {
        path: 'record/management',
        element: <RecordManagement />,
      },
      {
        path: 'mypage',
        element: <MyPage />,
      },
      {
        path: 'support',
        element: <Support />,
      },
    ],
  },
]);

export default router;
