import styled from "styled-components";
import Hooking_img from "@/assets/images/hooking.png";

export const HookingSectionContainer = styled.div`
    width: 1440px;
    height: 644px;
    display: flex;
    gap: 27px;
    align-items: center;
`;

export const HookingTextWrapper = styled.div`
    display: inline-flex;
    align-items: center;
    border-radius: 0 20px 20px 0;
    position: relative;
    width: 987px; 
    height: 457px; 
    background-image: url(${Hooking_img}); 
    background-size: cover;
    overflow: hidden;
`;

export const HookingTextBox = styled.div`
    position: absolute;
    display: flex;
    width: 513px;
    flex-direction: column;
    align-items: flex-start;
    gap: 4px;
    top: 58px;
    left : 120px;

`;

export const HookingTextMain = styled.p`
    ${({theme}) => theme.typography.head.H2};
    color: ${({theme}) => theme.colors.secondary["09"]};
    white-space: pre-wrap;
`;

export const HookingTextSubBox = styled.p`
    display: flex;
    flex-direction: column;
`;

export const HookingTextSub = styled.p`
    ${({theme}) => theme.typography.body.L0};
    color: ${({theme}) => theme.colors.secondary["07"]};
    white-space: nowrap;
`;

export const HookingTextSubBold = styled.span`
    ${({theme}) => theme.typography.body.L1};
    color: ${({theme}) => theme.colors.secondary["08"]};
`;