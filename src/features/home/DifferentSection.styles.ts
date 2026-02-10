import styled from "styled-components";

export const DifferentSectionContainer = styled.section`
    width: 100%;
    height: 707px;
    background: linear-gradient(180deg, #EDF5FF 0%, #DBE0FF 104.65%);
    display: flex;
    justify-content: center;
    position: relative;
    padding-top: 236px;
`;

export const MainTitle = styled.p`
    ${({theme}) => theme.typography.head.H1};
    color: ${({theme}) => theme.colors.grayScale["00"]};
    white-space: pre-wrap;
    position: absolute;
    left: 184px;
    top: 80px;
`;

export const MainTitleBlue = styled.span`
    ${({theme}) => theme.typography.head.H1};
    color: ${({theme}) => theme.colors.secondary["03"]};
`;

export const DifferentWrapper = styled.div`
    display: flex;
    gap: 52px;
    align-items: center;
`;

export const BeforeBox = styled.div`
    display: flex;
    width: 324px;
    flex-direction: column;
    align-items: center;
    gap: 24px;
`;

export const BeforeText = styled.p`
    ${({theme}) => theme.typography.body.L2};
    color: #6C6DCB;
`;

export const BeforeCardBox = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 16px;
    align-self: stretch;
`;

export const BeforeCard = styled.div`
    display: flex;
    flex-direction: column;
    height: 80px;
    padding: 8px 32px;
    justify-content: center;
    align-items: center;
    align-self: stretch;
    border-radius: 8px;
    border: 2px solid #BFBCF0;
    background-color: rgba(246, 246, 251, 0.30);
`;

export const BeforeCardText = styled.p`
    ${({theme}) => theme.typography.body.L2};
    color: #363574;
`;

export const BeforeCardTextSub = styled.p`
    ${({theme}) => theme.typography.body.L0};
    color: #363574;
`;

export const PolygonBox = styled.div`
    display: flex;
    flex-direction: column;
    gap: 73px;
    padding-top: 50px;
`;

export const AfterBox = styled.div`
    display: flex;
    width: 324px;
    flex-direction: column;
    align-items: center;
    gap: 24px;
    margin-bottom: 62px;
`;

export const AfterTextBox = styled.div`
    display: flex;
    flex-direction: column;
    padding: 8px 16px;
    justify-content: center;
    align-items: center;
    border-radius: 20px 20px 0 20px;
    background-color: ${({theme}) => theme.colors.grayScale["11"]};
    box-shadow: 1px 2px 2px 0 rgba(3, 14, 160, 0.35);
`;

export const AfterText = styled.p`
    ${({theme}) => theme.typography.head.H4};
    color: #000;
`;

export const AfterTextSub = styled.span`
    ${({theme}) => theme.typography.body.XL};
    color: #000;
`;

export const AfterCardBox = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 16px;
    align-self: stretch;
`;

export const AfterCard = styled.div<{$color:string}>`
    display: flex;
    flex-direction: column;
    height: 80px;
    padding: 8px 32px;
    justify-content: center;
    align-items: center;
    align-self: stretch;
    border-radius: 8px;
    background-color: ${({$color}) => $color};
`;

export const AfterCardText = styled.p`
    ${({theme}) => theme.typography.body.L2};
    color: ${({theme}) => theme.colors.secondary["09"]};
`;

export const AfterCardTextSub = styled.p`
    ${({theme}) => theme.typography.body.L0};
    color: ${({theme}) => theme.colors.secondary["09"]};
`;