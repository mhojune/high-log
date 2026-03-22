import styled from "styled-components";

export const CreateFormBox = styled.div`
  width: 100%;
  padding: 48px 72px;
  background-color: ${({ theme }) => theme.colors.grayScale["11"]};
  border: 0.5px solid ${({ theme }) => theme.colors.secondary["07"]};
  border-radius: 16px;
  box-sizing: border-box;
  margin-top: 24px;
`;

export const FormBoxTitle = styled.h2`
  color: ${({ theme }) => theme.colors.grayScale["01"]};
  ${({ theme }) => theme.typography.head.H4};
  margin: 0 0 32px;
`;

export const FormBoxSubTitleRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  width: 100%;
  margin: 95px 0 32px;
`;

export const FormBoxSubTitle = styled(FormBoxTitle)`
  margin: 0;
`;

export const SchoolRecordHintWrapper = styled.div`
  position: relative;
  width: fit-content;
  flex-shrink: 0;
`;

/** 팝오버 + 아래쪽 삼각형(말풍선) — 너비는 팝오버 박스와 동일(351px), 삼각형은 박스 아래 가운데 */
export const SchoolRecordHintPopoverCluster = styled.div<{ $open: boolean }>`
  position: absolute;
  right: 0;
  bottom: calc(100% + 3px);
  display: flex;
  flex-direction: column;
  align-items: stretch;
  width: 351px;
  box-sizing: border-box;
  z-index: 30;
  visibility: ${({ $open }) => ($open ? "visible" : "hidden")};
  opacity: ${({ $open }) => ($open ? 1 : 0)};
  pointer-events: ${({ $open }) => ($open ? "auto" : "none")};
  transition: opacity 0.15s ease;
`;

export const SchoolRecordHintPopover = styled.div`
  width: 351px;
  padding: 24px 16px;
  box-sizing: border-box;
  background-color: ${({ theme }) => theme.colors.grayScale["03"]};
  border-radius: 12px;
  flex-shrink: 0;
`;

/** 팝오버 윗줄 — body XS2, grayscale 10 */
export const SchoolRecordHintPopoverLead = styled.p`
  margin: 0;
  ${({ theme }) => theme.typography.body.XS2};
  color: ${({ theme }) => theme.colors.grayScale["10"]};
`;

/** 팝오버 아랫줄 — body XS1(regular), 같은 14px/21px에 weight만 400 */
export const SchoolRecordHintPopoverSub = styled.p`
  margin: 0;
  ${({ theme }) => theme.typography.body.XS1};
  color: ${({ theme }) => theme.colors.grayScale["10"]};
`;

/** 팝오버 본문 아래 secondary 버튼 행 — 글과 16px 간격, 버튼은 오른쪽 끝 */
export const SchoolRecordHintPopoverButtonRow = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
  margin-top: 16px;
`;

/** DefaultButton(secondary) 고정 크기 108×26 — 기본 패딩·타이포 오버라이드 */
export const SchoolRecordHintPopoverButtonWrap = styled.div`
  flex-shrink: 0;

  && > button {
    width: 108px;
    height: 26px;
    min-height: 26px;
    max-height: 26px;
    padding: 0 4px;
    box-sizing: border-box;
  }

  && > button p {
    margin: 0;
    font-size: 11px;
    font-weight: 600;
    line-height: 1;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;

/** 삼각형: 351px 행 기준 왼쪽 166px · 오른쪽 165px (가운데보다 1px 오른쪽) */
export const SchoolRecordHintPopoverArrowRow = styled.div`
  display: flex;
  justify-content: flex-start;
  width: 100%;
  flex-shrink: 0;
`;

/** 아래를 향하는 뾰족한 부분 (너비 20, 높이 16, grayscale 03) — 꼭짓점 중심이 176px(166+10) */
export const SchoolRecordHintPopoverArrow = styled.div`
  width: 0;
  height: 0;
  margin-top: -1px;
  margin-left: 176px;
  border-left: 10px solid transparent;
  border-right: 10px solid transparent;
  border-top: 16px solid ${({ theme }) => theme.colors.grayScale["03"]};
  border-bottom: none;
  flex-shrink: 0;
`;

export const SchoolRecordHint = styled.button.attrs({ type: "button" })`
  display: flex;
  align-items: center;
  gap: 4px;
  flex-shrink: 0;
  margin: 0;
  padding: 0;
  border: none;
  background: none;
  cursor: pointer;
  font: inherit;
  text-align: left;
`;

export const SchoolRecordHintIcon = styled.span`
  display: block;
  width: 16px;
  height: 16px;
  flex-shrink: 0;
  color: ${({ theme }) => theme.colors.grayScale["05"]};

  svg {
    width: 100%;
    height: 100%;
    display: block;
  }

  path {
    stroke: currentColor;
  }
`;

export const SchoolRecordHintText = styled.span`
  ${({ theme }) => theme.typography.body.S0};
  color: ${({ theme }) => theme.colors.grayScale["05"]};
  text-decoration: underline;
  text-underline-offset: 2px;
`;

export const SchoolRecordRow = styled.div`
  display: flex;
  align-items: center;
  gap: 57px;
  width: 100%;
`;

export const SchoolRecordDropDownWrapper = styled.div`
  flex: 1;
  min-width: 0;

  & > div {
    position: relative;
  }
  & > div > ul {
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    margin-top: 4px;
    padding: 8px 16px;
    border-radius: 8px;
    background-color: ${({ theme }) => theme.colors.grayScale["09"]};
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    z-index: 10;
    box-sizing: border-box;
  }
`;

export const FormFieldGroups = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
`;

export const FormFieldGroup = styled.div``;

const FormField = styled.div`
  margin-bottom: 24px;
  width: 100%;

  &:last-of-type {
    margin-bottom: 0;
  }
`;

export const FormInput = styled.input`
  width: 100%;
  padding: 8px 16px;
  ${({ theme }) => theme.typography.body.M0};
  border: none;
  outline: none;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.colors.grayScale["09"]};
  color: ${({ theme }) => theme.colors.grayScale["00"]};
  box-sizing: border-box;

  &::placeholder {
    color: ${({ theme }) => theme.colors.grayScale["05"]};
  }
`;

export const FormFieldRow = styled(FormField)`
  display: flex;
  align-items: flex-start;
  gap: 114px;
`;

export const FormFieldRowContent = styled.div`
  flex: 1;
  min-width: 0;
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

export const TitleInputWrapper = styled.div`
  display: flex;
  flex: 1;
  min-width: 0;
  padding: 8px 16px;
  align-items: center;
  gap: 75px;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.colors.grayScale["09"]};
  box-sizing: border-box;
`;

export const TitleInputField = styled.input`
  flex: 1;
  min-width: 0;
  ${({ theme }) => theme.typography.body.M0};
  border: none;
  outline: none;
  background-color: ${({ theme }) => theme.colors.grayScale["09"]};
  color: ${({ theme }) => theme.colors.grayScale["00"]};

  &::placeholder {
    color: ${({ theme }) => theme.colors.grayScale["05"]};
  }
`;

export const TitleInputCaption = styled.span`
  color: ${({ theme }) => theme.colors.grayScale["04"]};
  ${({ theme }) => theme.typography.caption.C0};
  padding-left: 9px;
`;

export const FormFieldRowInput = styled(FormInput)`
  flex: 1;
  min-width: 0;
`;

export const FormFieldRowLabel = styled.span`
  flex-shrink: 0;
  color: ${({ theme }) => theme.colors.grayScale["03"]};
  ${({ theme }) => theme.typography.body.L2};
`;

export const SchoolDepartmentRow = styled(FormField)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

export const DropDownGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 40px;

  & > div {
    position: relative;
  }
  & > div > ul {
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    margin-top: 4px;
    padding: 8px 16px;
    border-radius: 8px;
    background-color: ${({ theme }) => theme.colors.grayScale["09"]};
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    z-index: 10;
    box-sizing: border-box;
  }
`;

export const ApplicationTypeSection = styled(FormField)`
  display: flex;
  align-items: flex-start;
  gap: 75px;
`;

export const ApplicationTypeContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const ApplicationTypeRow = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;

export const ApplicationTypeOption = styled.label`
  display: flex;
  align-items: center;
  gap: 10px;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.grayScale["00"]};
  ${({ theme }) => theme.typography.body.L0};
`;

export const FormFieldButton = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 48px;
  width: 100%;
`;
