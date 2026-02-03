# 스타일 가이드 (Styling Guide)

본 프로젝트는 스타일링을 위해 `styled-components`를 사용합니다. 이 문서는 프로젝트 내에서 정의된 디자인 토큰(색상, 타이포그래피, 아이콘)과 이를 사용하는 방법에 대한 가이드를 제공합니다.

## 기본 사용법 (Basic Usage)

스타일이 적용된 컴포넌트를 만들려면 `styled-components`에서 `styled` 함수를 가져와 사용합니다. `src/styles/theme.ts`에 정의된 테마 변수는 `props.theme`을 통해 접근할 수 있습니다.

```typescript
import styled from 'styled-components';

const Title = styled.h1`
  // 테마의 타이포그래피 적용
  ${({ theme }) => theme.typography.head.H1};
  
  // 테마의 색상 적용
  color: ${({ theme }) => theme.colors.primary['00']};
  text-align: center;
`;

const Button = styled.button`
  background-color: ${({ theme }) => theme.colors.secondary['05']};
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
`;
```

## 디자인 토큰 (Design Tokens)

### 1. 색상 (Colors)

#### Primary
| Name | Hex Code |
| :--- | :--- |
| 00 | #5A5CF5 |

#### Secondary
| Name | Hex Code |
| :--- | :--- |
| 00 | #031786 |
| 01 | #0A209E |
| 02 | #2135A8 |
| 03 | #29219C |
| 04 | #394ECA |
| 05 | #3D57E9 |
| 06 | #A5B8F1 |
| 07 | #D4D9F9 |
| 08 | #E5E8FA |
| 09 | #F6F6FB |

#### GrayScale
| Name | Hex Code |
| :--- | :--- |
| 00 | #0A0A0A |
| 01 | #262630 |
| 02 | #4C4C54 |
| 03 | #525252 |
| 04 | #737373 |
| 05 | #8A8D92 |
| 06 | #A3A3A3 |
| 07 | #BABABA |
| 08 | #DBDEE6 |
| 09 | #F0F0F3 |
| 10 | #FAFAFA |
| 11 | #FDFDFD |

#### LabelColor
| Name | Hex Code |
| :--- | :--- |
| 00 | #028B92 |
| 01 | #1FD0BC |
| 02 | #DEF7F4 |
| 03 | #E06412 |
| 04 | #F18219 |
| 05 | #FBF6D8 |
| 06 | #DE2225 |
| 07 | #F78387 |
| 08 | #FFDCDC |

### 2. 타이포그래피 (Typography)

#### Display
| Name | Font Size | Font Weight | Line Height |
| :--- | :--- | :--- | :--- |
| D0 | 40px | 700 | 60px |

#### Head
| Name | Font Size | Font Weight | Line Height |
| :--- | :--- | :--- | :--- |
| H0 | 36px | 800 | 54px |
| H1 | 36px | 700 | 36px |
| H2 | 32px | 700 | 48px |
| H3 | 28px | 600 | 42px |
| H4 | 24px | 600 | 36px |

#### Body
| Name | Font Size | Font Weight | Line Height |
| :--- | :--- | :--- | :--- |
| XL | 24px | 400 | 36px |
| L0 | 20px | 400 | 30px |
| L1 | 20px | 500 | 30px |
| L2 | 20px | 700 | 30px |
| M0 | 16px | 400 | 24px |
| M1 | 14px | 400 | 21px |
| M2 | 14px | 700 | 21px |
| S0 | 16px | 400 | 24px |
| S1 | 16px | 500 | 24px |
| S2 | 16px | 600 | 24px |
| XS1 | 14px | 400 | 21px |
| XS2 | 14px | 600 | 21px |

#### Caption
| Name | Font Size | Font Weight | Line Height |
| :--- | :--- | :--- | :--- |
| C0 | 12px | 500 | 18px |

### 3. 아이콘 (Icons)

`src/assets/icons` 디렉토리에 있는 SVG 아이콘 파일 목록입니다.

| Icon Name | File Name |
| :--- | :--- |
| alarm_clock_check | alarm_clock_check.svg |
| alarm_clock_minus | alarm_clock_minus.svg |
| alarm_clock_off | alarm_clock_off.svg |
| alarm_clock_plus | alarm_clock_plus.svg |
| album | album.svg |
| arrow_left | arrow_left.svg |
| arrow_right | arrow_right.svg |
| arrow_up | arrow_up.svg |
| award | award.svg |
| book_mark | book_mark.svg |
| book_open | book_open.svg |
| chart_bar | chart_bar.svg |
| check | check.svg |
| chevron_down | chevron_down.svg |
| chevron_left | chevron_left.svg |
| chevron_right | chevron_right.svg |
| chevron_up | chevron_up.svg |
| chevrons_left | chevrons_left.svg |
| chevrons_right | chevrons_right.svg |
| circle_alert | circle_alert.svg |
| circle_arrow_left | circle_arrow_left.svg |
| circle_arrow_right | circle_arrow_right.svg |
| circle_chevron_down | circle_chevron_down.svg |
| circle_chevron_left | circle_chevron_left.svg |
| circle_chevron_right | circle_chevron_right.svg |
| circle_eclipse | circle_eclipse.svg |
| circle_question_mark | circle_question_mark.svg |
| circle_user | circle_user.svg |
| circle_x | circle_x.svg |
| clock_alert | clock_alert.svg |
| clock_check | clock_check.svg |
| copyright | copyright.svg |
| creative_common | creative_common.svg |
| file_plus | file_plus.svg |
| filter | filter.svg |
| folder_open | folder_open.svg |
| message | message.svg |
| mic_off | mic_off.svg |
| mic_on | mic_on.svg |
| pencil | pencil.svg |
| search | search.svg |
| sign | sign.svg |
| upload | upload.svg |
| user_pen | user_pen.svg |
| wand | wand.svg |
| x | x.svg |

## 전역 스타일 (Global Styles)

전역 스타일은 `src/styles/GlobalStyle.ts`에 정의되어 있으며, `createGlobalStyle`을 통해 reset CSS 및 기본 폰트 설정 등이 적용됩니다.
