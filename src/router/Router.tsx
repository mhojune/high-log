import { createBrowserRouter } from 'react-router-dom';
import App from '@/App';
import Home from '@/pages/home';
import AuthPage from '@/pages/authPage';
import FindPasswordPage from '@/pages/authPage/findPasswordPage';
import Guide from '@/pages/guide';
import CreateQuestions from '@/pages/interviewQuestions/createQuestions';
import LoadingQuestions from '@/pages/interviewQuestions/loadingQuestions';
import ShowQuestions from '@/pages/interviewQuestions/showQuestions';
import SaveQuestions from '@/pages/interviewQuestions/saveQuestions';
import InterviewPractice from '@/pages/interviewPractice';
import MyPage from '@/pages/myPage';
import Support from '@/pages/support';
import Privacy from '@/pages/privacy';
import Term from '@/pages/term';
import RecordManagement from '@/pages/recordManagement';
import RecordUpload from '@/pages/recordManagement/upload';
import RecordDetail from '@/pages/recordManagement/detail';
import InterviewResult from '@/pages/interviewPractice/interviewResult';
import QuestionsList from '@/pages/recordManagement/detail/questionsList';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/privacy",
        element: <Privacy />,
      },
      {
        path: "/term",
        element: <Term />,
      },
      {
        path: "auth",
        element: <AuthPage />,
      },
      {
        path: "auth/find-password",
        element: <FindPasswordPage />,
      },
      {
        path: "guide",
        element: <Guide />,
      },
      {
        path: "question",
        element: <CreateQuestions />,
      },
      {
        path: "question/loading",
        element: <LoadingQuestions />,
      },
      {
        path: "question/show",
        element: <ShowQuestions />,
      },
      {
        path: "question/storage",
        element: <SaveQuestions />,
      },
      {
        path: "interview/practice",
        element: <InterviewPractice />,
      },
      {
        path: "interview/result",
        element: <InterviewResult />,
      },
      {
        path: 'record_management',
        element: <RecordManagement />
      },
      {
        path: 'record_management/upload',
        element: <RecordUpload />
      },
      {
        path: 'record_management/:id',
        element: <RecordDetail />
      },
      {
        path: 'record_detail/:id/question_list',
        element: <QuestionsList />
      },
      {
        path: "mypage",
        element: <MyPage />,
      },
      {
        path: "support",
        element: <Support />,
      },
    ],
  },
]);

export default router;
