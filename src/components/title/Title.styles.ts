import styled from "styled-components";

export const TitleContainer = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    gap: 16px;
    align-self: stretch;
`;

export const Quote = styled.div`
    width: 8px;
    height: 32px;
    border-radius: 999px;
    background-color: ${({theme}) => theme.colors.primary["00"]};
`;

export const Title = styled.p`
    ${({theme}) => theme.typography.head.H0};
    color: ${({theme}) => theme.colors.grayScale["00"]};
`;