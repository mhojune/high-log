import styled, { keyframes } from "styled-components";

const slideUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(75px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const ForStudentSectionContainer =styled.section`
    width: 100%;
    height: 845px;
    background: linear-gradient(180deg, #D9DEFF 0%, #AFB8F2 100%);
    display: flex;
    justify-content: center;
    padding-top : 120px;
    overflow: hidden;
`;

export const TextImgWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 42px;
`;

export const TextBox = styled.div`
    padding-left: 32px;
`;

export const TextSub = styled.p`
    ${({theme}) => theme.typography.body.XL};
    color: ${({theme}) => theme.colors.primary["00"]};
`;

export const TextMain = styled.p`
    ${({theme}) => theme.typography.head.H2};
    color: #000;
    white-space: pre-wrap;
`;

export const ImgButtonBox = styled.div`
    display: flex;
    flex-direction: column;
    width: 1134px;
    height: 775px;
`;

export const ButtonBox = styled.div`
    display: flex;
    padding-left: 40px;
`;

export const ClickButton = styled.button<{$active: boolean}>`
    display: flex;
    height: 49px;
    padding: 8px 44px;
    justify-content: center;
    align-items: center;
    border: none;
    border-radius: 12px 12px 0 0;
    border-top: ${({$active}) => $active ? "1px solid #FAF9FF" : "none"};
    border-right: ${({$active}) => $active ? "1px solid #FAF9FF" :"0.5px solid #A3A4F1"};
    background: ${({$active}) => $active ? "#EFF3FF" : "#C3C9DB"};
    cursor: pointer;

    ${({theme}) => theme.typography.body.L2};
    color: ${({$active}) => $active ? "#1B1EC8" : "#8B8CA5"};
`;

export const SampleImageWrapper = styled.div`
    width: 100%;
    height: 100%;
    position: relative;
`;

export const SampleImage = styled.img<{$active: boolean}>`
    width: 100%;
    height: 100%;
    display: ${({$active}) => $active ? "block" : "none"};
`;

export const DescriptionBox = styled.div`
    position: absolute;
    top: 220px;
    right: -32px;
    gap: 8px;
    padding: 12px 32px;
    border-radius: 16px 16px 0 16px;
    border: 0.5px solid ${({theme}) => theme.colors.secondary["06"]};
    background-color: ${({theme}) => theme.colors.primary["00"]};
    box-shadow: 2px 3px 2px 0 rgba(7, 2, 30, 0.25);
    animation: ${slideUp} 0.5s ease-out forwards;
`;

export const DescriptionText = styled.p`
    ${({theme}) => theme.typography.body.L2};
    color: ${({theme}) => theme.colors.grayScale["10"]};
`;