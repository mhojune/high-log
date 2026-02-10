import styled from "styled-components";
import Hooking_img from "@/assets/images/hooking.png";
import { Link } from "react-router-dom";

export const HookingSectionContainer = styled.section`
    width: 100%;
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

export const HookingTextSubBox = styled.div`
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

export const HookingCardWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 39px;
`;

export const HookingCardStatBox = styled.div`
    display: flex;
    width: 306px;
    flex-direction: column;
    align-items: flex-start;
    gap: 8px;
    border-radius: 16px;
    background-color: #F8F8FA;
`;

export const HookingCardStat = styled.div`
    height: 99px;
    align-self: stretch;
    border-radius: 16px;
    background: linear-gradient(169deg, #CDD5F4 17.2%, #FAFAFA 93.94%);
    position: relative;
    overflow: hidden;
`;

export const HookingCardStatTextBox = styled.div`
    position: absolute;
    left: 24px;
    top: 21.5px;
    display: flex;
    flex-direction: column;
`;

export const HookingCardStatTextMain = styled.p`
    ${({theme}) => theme.typography.body.XS2};
    color: ${({theme}) => theme.colors.secondary["00"]};
`;

export const HookingCardStatTextSub = styled.p`
    ${({theme}) => theme.typography.head.H4};
    color: ${({theme}) => theme.colors.grayScale["00"]};
`;

export const HookingCardStatImg = styled.img`
    width: 127px;
    height: 127px;
    position: absolute;
    left: 154px;
    top: -30px;
`;

export const HookingEventCard = styled(Link)`
    display: flex;
    width: 306px;
    height: 105px;
    border-radius: 12px;
    background-color: ${({theme}) => theme.colors.primary["00"]};
    padding-left: 19px;
    align-items: center;
    overflow: hidden;
    cursor: pointer;
    text-decoration: none;
`;

export const HookingEventText = styled.p`
    ${({theme}) => theme.typography.body.M2};
    color: ${({theme}) => theme.colors.grayScale["11"]};
`;

export const HookingEventTextSub = styled.span`
    ${({theme}) => theme.typography.body.M1};
    color: ${({theme}) => theme.colors.grayScale["11"]};
    white-space: pre-wrap;
`;

export const HookingEventImg = styled.img`
    width: 125px;
    height: 90px;
    margin-top: 15px;
`;