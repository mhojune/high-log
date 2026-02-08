import styled from "styled-components";

export const DefaultInputContainer = styled.div`
    display: flex;
    width: 832px;
    padding: 8px 16px;
    align-items: center;
    gap: 75px;
    border-radius: 8px;
    background-color: ${({theme}) => theme.colors.grayScale["09"]};
`;

export const Title = styled.input`
    ${({theme}) => theme.typography.body.M0};
    border: none;
    outline: none;
    background-color: ${({theme}) => theme.colors.grayScale["09"]};;
    color: ${({theme}) => theme.colors.grayScale["00"]};
    width: 701px;
`;