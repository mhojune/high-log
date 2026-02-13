import styled from "styled-components";
import Hooking_img from "@/assets/images/hooking.png";
import { Link } from "react-router-dom";

export const HookingSectionContainer = styled.section`
    width: 100%;
    height: max(644px, 44.72vw);
    display: flex;
    gap: max(27px, 1.875vw);
    align-items: center;
`;

export const HookingTextWrapper = styled.div`
    display: inline-flex;
    align-items: center;
    border-radius: 0 max(20px, 1.39vw) max(20px, 1.39vw) 0;
    position: relative;
    width: max(987px, 68.54vw); 
    height: max(457px, 31.74vw); 
    background-image: url(${Hooking_img}); 
    background-size: cover;
    overflow: hidden;
`;

export const HookingTextBox = styled.div`
    position: absolute;
    display: flex;
    width: max(513px, 35.625vw);
    flex-direction: column;
    align-items: flex-start;
    gap: max(4px, 0.28vw);
    top: max(58px, 4.03vw);
    left: max(120px, 8.33vw);
`;

export const HookingTextMain = styled.p`
    ${({theme}) => theme.typography.head.H2};
    font-size: max(32px, 2.22vw);
    line-height: max(48px, 3.33vw);
    color: ${({theme}) => theme.colors.secondary["09"]};
    white-space: pre-wrap;
`;

export const HookingTextSubBox = styled.div`
    display: flex;
    flex-direction: column;
`;

export const HookingTextSub = styled.p`
    ${({theme}) => theme.typography.body.L0};
    font-size: max(20px, 1.39vw);
    line-height: max(30px, 2.08vw);
    color: ${({theme}) => theme.colors.secondary["07"]};
    white-space: nowrap;
`;

export const HookingTextSubBold = styled.span`
    ${({theme}) => theme.typography.body.L1};
    font-size: max(20px, 1.39vw);
    line-height: max(30px, 2.08vw);
    color: ${({theme}) => theme.colors.secondary["08"]};
`;

export const HookingCardWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: max(39px, 2.71vw);
`;

export const HookingCardStatBox = styled.div`
    display: flex;
    width: max(306px, 21.25vw);
    flex-direction: column;
    align-items: flex-start;
    gap: max(8px, 0.56vw);
    border-radius: max(16px, 1.11vw);
`;

export const HookingCardStat = styled.div`
    height: max(99px, 6.875vw);
    align-self: stretch;
    border-radius: max(16px, 1.11vw);
    background: linear-gradient(169deg, #CDD5F4 17.2%, #FAFAFA 93.94%);
    position: relative;
    overflow: hidden;
`;

export const HookingCardStatTextBox = styled.div`
    position: absolute;
    left: max(24px, 1.67vw);
    top: max(21.5px, 1.49vw);
    display: flex;
    flex-direction: column;
`;

export const HookingCardStatTextMain = styled.p`
    ${({theme}) => theme.typography.body.XS2};
    font-size: max(14px, 0.97vw);
    line-height: max(21px, 1.46vw);
    color: ${({theme}) => theme.colors.secondary["00"]};
`;

export const HookingCardStatTextSub = styled.p`
    ${({theme}) => theme.typography.head.H4};
    font-size: max(24px, 1.67vw);
    line-height: max(36px, 2.5vw);
    color: ${({theme}) => theme.colors.grayScale["00"]};
`;

export const HookingCardStatImg = styled.img`
    width: max(127px, 8.82vw);
    height: max(127px, 8.82vw);
    position: absolute;
    left: max(154px, 10.69vw);
    top: calc(max(30px, 2.08vw) * -1);
`;

export const HookingEventCard = styled(Link)`
    display: flex;
    width: max(306px, 21.25vw);
    height: max(105px, 7.29vw);
    border-radius: max(12px, 0.83vw);
    background-color: ${({theme}) => theme.colors.primary["00"]};
    padding-left: max(19px, 1.32vw);
    align-items: center;
    overflow: hidden;
    cursor: pointer;
    text-decoration: none;
`;

export const HookingEventText = styled.p`
    ${({theme}) => theme.typography.body.M2};
    font-size: max(18px, 1.25vw);
    line-height: max(27px, 1.875vw);
    color: ${({theme}) => theme.colors.grayScale["11"]};
`;

export const HookingEventTextSub = styled.span`
    ${({theme}) => theme.typography.body.M1};
    font-size: max(18px, 1.25vw);
    line-height: max(27px, 1.875vw);
    color: ${({theme}) => theme.colors.grayScale["11"]};
    white-space: pre-wrap;
`;

export const HookingEventImg = styled.img`
    width: max(125px, 8.68vw);
    height: max(90px, 6.25vw);
    margin-top: max(15px, 1.04vw);
`;