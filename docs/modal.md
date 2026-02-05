# Modal & Toast 사용 가이드

## Modal 컴포넌트

### 사용 방법

```typescript
import { useState } from "react";
import Modal from "@/components/common/Modal";

function MyComponent() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <button onClick={() => setIsModalOpen(true)}>모달 열기</button>
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        mainTitle="모달 제목"
        subTitle="모달 부제목 (선택사항)"
        leftButtonText="취소"
        rightButtonText="확인"
        onLeftButtonClick={() => setIsModalOpen(false)}
        onRightButtonClick={() => {
          // 확인 버튼 클릭 시 실행할 로직
          setIsModalOpen(false);
        }}
      />
    </>
  );
}
```

### Props

- `isOpen`: Modal 표시 여부 (boolean)
- `onClose`: Modal 닫기 핸들러 (dim 배경 클릭 시 호출)
- `mainTitle`: 큰 제목 텍스트 (string)
- `subTitle`: 작은 제목 텍스트 (string, 선택사항)
- `leftButtonText`: 왼쪽 버튼 텍스트 (string)
- `rightButtonText`: 오른쪽 버튼 텍스트 (string)
- `onLeftButtonClick`: 왼쪽 버튼 클릭 핸들러
- `onRightButtonClick`: 오른쪽 버튼 클릭 핸들러

## Toast 컴포넌트

### 사용 방법

```typescript
import { useState } from "react";
import Toast from "@/components/common/Toast";

function MyComponent() {
  const [isToastOpen, setIsToastOpen] = useState(false);

  return (
    <>
      <button onClick={() => setIsToastOpen(true)}>Toast 표시</button>
      <Toast
        message="알림 메시지입니다"
        isOpen={isToastOpen}
        onClose={() => setIsToastOpen(false)}
      />
    </>
  );
}
```

### Props

- `message`: 표시할 메시지 텍스트 (string)
- `isOpen`: Toast 표시 여부 (boolean)
- `onClose`: Toast 닫기 핸들러 (dim 배경 또는 닫기 버튼 클릭 시 호출)
