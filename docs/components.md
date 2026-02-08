# UI 컴포넌트 가이드

이 문서는 프로젝트에서 사용되는 공용 UI 컴포넌트들의 사용법과 Props를 설명합니다.

## 목차
1. [Modal](#modal)
2. [Toast](#toast)
3. [Button](#button)
4. [Acodian](#acodian)
5. [Favorite](#favorite)
6. [Tab](#tab)
7. [Label](#label)
8. [Footer](#footer)
9. [Header](#header)
10. [ListFilter](#list-filter)
11. [SearchFilter](#search-filter)
12. [ListPopUp](#list-popup)
13. [CheckBox](#checkbox)
14. [DefaultInput](#default-input)
15. [DropDown](#dropdown)
16. [RadioBox](#radiobox)

---

## Modal <a name="modal"></a>

### 사용 방법

```typescript
import { useState } from "react";
import Modal from "@/components/modal/Modal";

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

| Prop 이름 | 타입 | 설명 | 필수 여부 |
| --- | --- | --- | --- |
| `isOpen` | `boolean` | Modal 표시 여부 | Yes |
| `onClose` | `() => void` | Modal 닫기 핸들러 (dim 배경 클릭 시 호출) | Yes |
| `mainTitle` | `string` | 큰 제목 텍스트 | Yes |
| `subTitle` | `string` | 작은 제목 텍스트 | No |
| `leftButtonText` | `string` | 왼쪽 버튼 텍스트 | Yes |
| `rightButtonText` | `string` | 오른쪽 버튼 텍스트 | Yes |
| `onLeftButtonClick` | `() => void` | 왼쪽 버튼 클릭 핸들러 | Yes |
| `onRightButtonClick` | `() => void` | 오른쪽 버튼 클릭 핸들러 | Yes |

---

## Toast <a name="toast"></a>

### 사용 방법

```typescript
import { useState } from "react";
import Toast from "@/components/toast/Toast";

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

| Prop 이름 | 타입 | 설명 | 필수 여부 |
| --- | --- | --- | --- |
| `message` | `string` | 표시할 메시지 텍스트 | Yes |
| `isOpen` | `boolean` | Toast 표시 여부 | Yes |
| `onClose` | `() => void` | Toast 닫기 핸들러 | Yes |

---

## Button <a name="button"></a>

`Button` 컴포넌트는 `DefaultButton`과 `UnderBarButton` 두 가지를 제공합니다.

```typescript
import { DefaultButton, UnderBarButton } from "@/components/button/Button";
```

### 1. DefaultButton

기본적인 버튼 컴포넌트입니다.

#### 사용 방법

```typescript
<DefaultButton 
  width={200} 
  type="primary" 
  text="확인" 
  onClick={() => console.log('Clicked')} 
/>
```

#### Props

| Prop 이름 | 타입 | 설명 | 필수 여부 |
| --- | --- | --- | --- |
| `width` | `number` | 버튼의 너비 (px) | Yes |
| `type` | `"primary" \| "secondary" \| "disabled"` | 버튼 스타일 타입 | Yes |
| `text` | `string` | 버튼 내부 텍스트 | Yes |
| `onClick` | `() => void` | 클릭 이벤트 핸들러 | No |

### 2. UnderBarButton

하단에 밑줄이 있는 텍스트 형태의 버튼입니다.

#### 사용 방법

```typescript
<UnderBarButton 
  text="로그인" 
  onClick={() => console.log('Login')} 
/>
```

#### Props

| Prop 이름 | 타입 | 설명 | 필수 여부 |
| --- | --- | --- | --- |
| `text` | `string` | 버튼 텍스트 | Yes |
| `onClick` | `() => void` | 클릭 이벤트 핸들러 | No |

---

## Acodian <a name="acodian"></a>

아코디언 아이콘 컴포넌트입니다.

### 사용 방법

```typescript
import Acodian from "@/components/acodian/Acodian";

<Acodian 
  type="someType" 
  onClick={() => console.log('Acodian clicked')} 
/>
```

### Props

| Prop 이름 | 타입 | 설명 | 필수 여부 |
| --- | --- | --- | --- |
| `type` | `string` | 아코디언 타입 (스타일링 용도) | Yes |
| `onClick` | `() => void` | 클릭 이벤트 핸들러 | Yes |

---

## Favorite <a name="favorite"></a>

즐겨찾기(하트) 아이콘 컴포넌트입니다. `default` 상태와 `select` 상태를 가집니다.

### 사용 방법

```typescript
import Favorite from "@/components/favorite/Favorite";

// type은 "default" 또는 "select"
<Favorite 
  type="default" 
  onClick={() => console.log('Toggle favorite')} 
/>
```

### Props

| Prop 이름 | 타입 | 설명 | 필수 여부 |
| --- | --- | --- | --- |
| `type` | `string` | 아이콘 상태 (`"default"` \| `"select"`) | Yes |
| `onClick` | `() => void` | 클릭 이벤트 핸들러 | Yes |

---

## Tab <a name="tab"></a>

로그인/회원가입 상태를 전환하는 탭 컴포넌트입니다.

### 사용 방법

```typescript
import { useState } from "react";
import Tab from "@/components/tab/Tab";

function MyComponent() {
  const [activeTab, setActiveTab] = useState<"login" | "signup">("login");

  return (
    <Tab 
      activeTab={activeTab} 
      onTabChange={setActiveTab} 
    />
  );
}
```

### Props

| Prop 이름 | 타입 | 설명 | 필수 여부 |
| --- | --- | --- | --- |
| `activeTab` | `"login" \| "signup"` | 현재 활성화된 탭 | Yes |
| `onTabChange` | `(tab: "login" \| "signup") => void` | 탭 변경 핸들러 | Yes |

---

## Label <a name="label"></a>

상태나 레벨을 표시하는 라벨 컴포넌트입니다. 다양한 타입에 따라 색상이 자동으로 적용됩니다.

### 사용 방법

```typescript
import Label from "@/components/label/Label";

// API에서 받은 영어 값 사용 (자동으로 한글로 변환)
<Label type="basic" />
<Label type="intermediate" />
<Label type="advanced" />
<Label type="good" />
<Label type="normal" />
<Label type="improve" />
```

### Props

| Prop 이름 | 타입 | 설명 | 필수 여부 |
| --- | --- | --- | --- |
| `type` | `"basic" \| "intermediate" \| "advanced" \| "good" \| "normal" \| "improve"` | 라벨 타입 (영어, API에서 받은 값 사용 가능) | Yes |

---

## Footer <a name="footer"></a>

페이지 하단에 위치하는 푸터 컴포넌트입니다. Props를 받지 않습니다.

### 사용 방법

```typescript
import Footer from "@/components/common/Footer";

function Layout() {
  return (
    <div>
      {/* Content */}
      <Footer />
    </div>
  );
}
```

---

## Header <a name="header"></a>

애플리케이션의 전역 헤더 컴포넌트입니다. 로고, 네비게이션 메뉴, 로그인 상태에 따른 UI를 포함합니다.

| Prop 이름 | 타입 | 설명 | 필수 여부 |
| --- | --- | --- | --- |
| _없음_ | | Header 컴포넌트는 현재 직접적인 Props를 받지 않습니다. 내부 상태 및 전역 상태(예: 로그인 여부)에 따라 동작합니다. | |

### 사용 방법

```typescript
import Header from "@/components/common/Header";

function App() {
  return (
    <div>
      <Header />
      {/* 나머지 페이지 콘텐츠 */}
    </div>
```

## ListFilter <a name="list-filter"></a>

필터 아이콘, 입력 필드, 그리고 목록 팝업을 포함하는 복합 필터 컴포넌트입니다. 
입력 필드에 텍스트를 입력하고 엔터를 누르면 목록에 추가되며, 화살표 아이콘을 통해 목록을 토글할 수 있습니다.

### 사용 방법

```typescript
import { useState } from "react";
import ListFilter from "@/components/filter/ListFilter";

function MyComponent() {
  const [filterText, setFilterText] = useState("");

  return (
    <ListFilter
      text={filterText}
      setText={setFilterText}
      placeholder="필터 검색..."
      onClick={() => console.log("Filter icon clicked")}
    />
  );
}
```

### Props

| Prop 이름 | 타입 | 설명 | 필수 여부 |
| --- | --- | --- | --- |
| `text` | `string` | 입력 필드의 현재 값 | Yes |
| `setText` | `(text: string) => void` | 입력 값 변경 핸들러 | Yes |
| `placeholder` | `string` | 입력 필드 플레이스홀더 | Yes |
| `onClick` | `() => void` | 필터 아이콘 클릭 핸들러 | Yes |
| `fileId` | `number` | 파일 ID (선택 사항) | No |

---

## SearchFilter <a name="search-filter"></a>

검색 아이콘과 입력 필드를 포함하는 단순 검색 필터 컴포넌트입니다.

### 사용 방법

```typescript
import { useState } from "react";
import SearchFilter from "@/components/filter/SearchFilter";

function MyComponent() {
  const [searchText, setSearchText] = useState("");

  return (
    <SearchFilter
      text={searchText}
      setText={setSearchText}
      placeholder="검색어 입력..."
      onClick={() => console.log("Search icon clicked")}
    />
  );
}
```

### Props

| Prop 이름 | 타입 | 설명 | 필수 여부 |
| --- | --- | --- | --- |
| `text` | `string` | 입력 필드의 현재 값 | Yes |
| `setText` | `(text: string) => void` | 입력 값 변경 핸들러 | Yes |
| `placeholder` | `string` | 입력 필드 플레이스홀더 | Yes |
| `onClick` | `() => void` | 검색 아이콘 클릭 핸들러 | Yes |

---

## ListPopUp <a name="list-popup"></a>

데이터 목록을 표시하고 선택할 수 있는 팝업 컴포넌트입니다. 주로 `ListFilter` 내부에서 사용됩니다.

### 사용 방법

```typescript
import ListPopUp from "@/components/filter/ListPopUp";

const data = [
  { fileId: 1, fileName: "File 1" },
  { fileId: 2, fileName: "File 2" }
];

<ListPopUp
  data={data}
  onSelect={(fileName) => console.log(fileName)}
  isLoading={false}
/>
```

### Props

| Prop 이름 | 타입 | 설명 | 필수 여부 |
| --- | --- | --- | --- |
| `data` | `{ fileId: number; fileName: string; }[]` | 표시할 데이터 목록 | Yes |
| `onSelect` | `(fileName: string) => void` | 항목 선택 핸들러 | Yes |
| `isLoading` | `boolean` | 로딩 상태 표시 여부 | No |

---

## CheckBox <a name="checkbox"></a>

체크박스 컴포넌트입니다.

### 사용 방법

```typescript
import { useState } from "react";
import CheckBox from "@/components/input/CheckBox";

function MyComponent() {
  const [isChecked, setIsChecked] = useState(false);

  return (
    <CheckBox
      isChecked={isChecked}
      onClick={() => setIsChecked(!isChecked)}
    />
  );
}
```

### Props

| Prop 이름 | 타입 | 설명 | 필수 여부 |
| --- | --- | --- | --- |
| `isChecked` | `boolean` | 체크 여부 | Yes |
| `onClick` | `() => void` | 클릭 핸들러 | Yes |

---

## DefaultInput <a name="default-input"></a>

기본적인 텍스트 입력 컴포넌트입니다. 우측의 X 버튼을 통해 내용을 초기화할 수 있습니다.

### 사용 방법

```typescript
import { useState } from "react";
import DefaultInput from "@/components/input/DefaultInput";

function MyComponent() {
  const [text, setText] = useState("");

  return (
    <DefaultInput
      text={text}
      setText={setText}
      placeholder="텍스트를 입력하세요"
      onClick={() => {}} // 필수 prop이지만 현재 내부 구현에서는 사용되지 않음
    />
  );
}
```

### Props

| Prop 이름 | 타입 | 설명 | 필수 여부 |
| --- | --- | --- | --- |
| `text` | `string` | 입력된 텍스트 값 | Yes |
| `setText` | `(text: string) => void` | 텍스트 변경 핸들러 | Yes |
| `placeholder` | `string` | 플레이스홀더 텍스트 | Yes |
| `onClick` | `() => void` | 클릭 핸들러 (현재 미사용) | Yes |

---

## DropDown <a name="dropdown"></a>

드롭다운 선택 컴포넌트입니다. 검색 기능(isEditable)을 지원합니다.

### 사용 방법

```typescript
import { useState } from "react";
import DropDown from "@/components/input/DropDown";

function MyComponent() {
  const [value, setValue] = useState("");
  const options = ["Option 1", "Option 2", "Option 3"];

  return (
    <DropDown
      width="300px"
      options={options}
      value={value}
      setValue={setValue}
      placeholder="옵션을 선택하세요"
      isEditable={false}
    />
  );
}
```

### Props

| Prop 이름 | 타입 | 설명 | 필수 여부 |
| --- | --- | --- | --- |
| `width` | `string` | 컴포넌트 너비 (기본값: "907px") | No |
| `options` | `string[]` | 선택 가능한 옵션 목록 | Yes |
| `value` | `string` | 현재 선택된 값 | Yes |
| `setValue` | `(value: string) => void` | 값 변경 핸들러 | Yes |
| `placeholder` | `string` | 플레이스홀더 텍스트 (기본값: "Select an option") | No |
| `isEditable` | `boolean` | 텍스트 입력 및 필터링 가능 여부 (기본값: false) | No |

---

## RadioBox <a name="radiobox"></a>

라디오 버튼 컴포넌트입니다.

### 사용 방법

```typescript
import { useState } from "react";
import RadioBox from "@/components/input/RadioBox";

function MyComponent() {
  const [isChecked, setIsChecked] = useState(false);

  return (
    <RadioBox
      isChecked={isChecked}
      onClick={() => setIsChecked(!isChecked)}
    />
  );
}
```

### Props

| Prop 이름 | 타입 | 설명 | 필수 여부 |
| --- | --- | --- | --- |
| `isChecked` | `boolean` | 선택 여부 | Yes |
| `onClick` | `() => void` | 클릭 핸들러 | Yes |
