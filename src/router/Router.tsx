import { createBrowserRouter } from 'react-router-dom';
import App from '@/App';
import Home from '@/pages/home';
import SignUp from '@/pages/signUp';
import Login from '@/pages/login';
import Guide from '@/pages/guide';
import InterviewQuestions from '@/pages/interviewQuestions';
import InterviewPractice from '@/pages/interviewPractice';
import RecordManagement from '@/pages/recordManagement';
import MyPage from '@/pages/myPage';
import Support from '@/pages/support';
import Privacy from '@/pages/privacy';
import Term from '@/pages/term';

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
        path: '/privacy',
        element: <Privacy />,
      },
      {
        path: '/term',
        element: <Term />,
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
