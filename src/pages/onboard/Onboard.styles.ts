import styled from "styled-components";

export const Container = styled.main`
  width: 100%;
  min-width: 1440px;
  min-height: 100vh;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  margin-top: -80px;
  padding: 0;
  background-color: ${({ theme }) => theme.colors.grayScale["10"]};
`;

export const Content = styled.section`
  width: 100%;
`;

export const HeaderRow = styled.div`
  margin-top: 20px;
  display: flex;
  align-items: center;
`;

export const BackIconButton = styled.button`
  margin-left: 24px;
  padding: 0;
  border: 0;
  background: transparent;
  display: flex;
  align-items: center;
  cursor: pointer;
`;

export const LogoWrapper = styled.div<{ $isFirstStep: boolean }>`
  margin-top: 0;
  margin-left: ${({ $isFirstStep }) => ($isFirstStep ? "32px" : "8px")};
  cursor: pointer;

  svg {
    width: 93px;
    height: 28px;
  }
`;

export const StepContent = styled.div`
  display: flex;
  justify-content: center;
`;

export const Step1Content = styled.div`
  margin-top: 228px;
  width: fit-content;
`;

export const Step2Content = styled.div`
  margin-top: 228px;
  width: fit-content;
`;

export const Step3Content = styled.div`
  margin-top: 206px;
  width: fit-content;
`;

export const Step4Content = styled.div`
  margin-top: 168px;
  width: 100%;
  max-width: 1200px;
  margin-left: auto;
  margin-right: auto;
  box-sizing: border-box;
`;

/** 로딩 전용: Step4 업로드와 달리 max-width 없이 StepContent 폭 사용 */
export const Step4LoadingOuter = styled.div`
  margin-top: 96px;
  width: 100%;
  padding: 0 120px;
  box-sizing: border-box;
`;

export const Step4LoadingInner = styled.div`
  width: 100%;
  min-width: 1200px;
  margin: 0 auto;
  box-sizing: border-box;
`;

export const Step5Content = styled.div`
  margin-top: 96px;
  width: 100%;
  padding: 0 120px;
  box-sizing: border-box;
`;

export const Step5Inner = styled.div`
  width: 100%;
  min-width: 1200px;
  margin: 0 auto;
  box-sizing: border-box;
`;
