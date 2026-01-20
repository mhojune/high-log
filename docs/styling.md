스타일 가이드 (Styling Guide)
본 프로젝트는 스타일링을 위해 styled-components를 사용합니다. 이 문서는 프로젝트 내에서 이를 사용하는 방법에 대한 간략한 개요를 제공합니다.

기본 사용법 (Basic Usage)
스타일이 적용된 컴포넌트를 만들려면 styled-components에서 styled 함수를 가져와 사용합니다.

TypeScript
```
import styled from 'styled-components';

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: ${props => props.theme.colors.primary};
`;

const MyComponent = () => {
  return <Title>Hello World!</Title>;
}
```

테마 적용 (Theming)
src/styles/theme.ts에 기본 테마가 설정되어 있습니다. 스타일 컴포넌트 내에서 props.theme을 통해 테마 변수에 접근할 수 있습니다.

사용 예시:

TypeScript

const Button = styled.button`
  background-color: ${props => props.theme.colors.primary};
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
`;

테마 변수를 추가하거나 수정하려면 src/styles/theme.ts 파일을 편집하세요.

전역 스타일 (Global Styles)

전역 스타일은 src/styles/GlobalStyle.ts에 정의되어 있습니다. 이 파일은 styled-components의 createGlobalStyle을 사용하여 body 및 기타 전역 요소에 스타일을 적용합니다. 전역 스타일을 추가해야 할 경우 이 파일을 수정하면 됩니다.