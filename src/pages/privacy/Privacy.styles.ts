import styled from "styled-components";

export const PrivacyContainer = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
    padding-top: 91px;
    padding-bottom: 91px;
    background-color: ${({theme}) => theme.colors.grayScale["10"]};
`;

export const PrivacyWrapper = styled.div`
    display: flex;
    width: 1200px;
    padding: 40px 100px;
    flex-direction: column;
    align-items: center;
    gap: 40px;
    border-radius: 20px;
    background: #FFF;
`;

export const TitleBox = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 10px;
    align-self: stretch;
`;

export const MainTitle = styled.p`
    ${({theme}) => theme.typography.head.H1};
    color: #000;
`;

export const Line = styled.div`
    width: 100%;
    height: 1px;
    background-color: ${({theme}) => theme.colors.grayScale["07"]};
`;

export const InfoBox = styled.div`
    ${({theme}) => theme.typography.body.S0};
    color: #000;
    white-space: pre-wrap;
`;

export const BodyBox = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 30px;
    align-self: stretch;
`;

export const BodyTitle = styled.p`
    ${({theme}) => theme.typography.head.H3};
    color: #000;
`;

export const BodyText = styled.p`
    ${({theme}) => theme.typography.body.S0};
    color: #000;
    white-space: pre-wrap;
`;