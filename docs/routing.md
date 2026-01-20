# 라우팅 가이드 (Routing Guide)
이 프로젝트는 페이지 탐색을 위해 React Router를 사용합니다. 이 문서는 라우터 설정 방법과 새 경로를 추가하는 방법에 대해 설명합니다.

## 라우터 설정 (Router Setup)
라우터는 `src/router/Router.tsx`에 설정되어 있습니다. `createBrowserRouter`를 사용하여 경로 배열을 생성합니다. 각 경로는 `path`와 렌더링할 `element`를 가집니다.

```tsx
import { createBrowserRouter } from 'react-router-dom';
import Home from '../pages/Home';
// ... other page imports

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  // ... other routes
]);

export default router;
```

## 새 경로 추가하기 (Adding a New Route)
1.  **페이지 컴포넌트 생성**: `src/pages` 디렉토리 안에 새 페이지를 위한 폴더와 `index.tsx` 파일을 생성합니다.
2.  **라우터에 경로 추가**: `src/router/Router.tsx` 파일을 열고, 생성한 페이지 컴포넌트를 import 한 뒤, `router` 배열에 새 경로 객체를 추가합니다.

    ```tsx
    // 1. Import the new page component
    import NewPage from '../pages/NewPage';

    const router = createBrowserRouter([
      // ... existing routes
      {
        path: '/new-page', // 2. Add the new path
        element: <NewPage />, // 3. Add the new element
      },
    ]);
    ```

## 페이지 구조 (Page Structure)
모든 페이지 컴포넌트는 `src/pages` 디렉토리 내에 자체 폴더를 가집니다. 이는 각 페이지와 관련된 스타일, 하위 컴포넌트 또는 로직을 함께 구성하는 데 도움이 됩니다.

```
src/pages/
├───Home/
│   └───index.tsx
├───Login/
│   └───index.tsx
└───SignUp/
    └───index.tsx
```
