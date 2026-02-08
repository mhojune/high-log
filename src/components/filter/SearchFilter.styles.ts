import styled from "styled-components";

export const SearchFilterContainer = styled.div`
    display: flex;
    width: 360px;
    padding: 8px 16px;
    align-items: center;
    gap: 24px;
    border-radius: 999px;
    border: 0.5px solid ${({theme}) => theme.colors.grayScale["08"]};
    background-color: ${({theme}) => theme.colors.grayScale["09"]};
`;

export const TitleIconWrap = styled.div`
    display: flex;
    width: 280px;
    justify-content: space-between;
    align-items: center;
    flex-shrink: 0;
`;

export const Title = styled.input`
    ${({theme}) => theme.typography.body.M0};
    border: none;
    outline: none;
    background-color: ${({theme}) => theme.colors.grayScale["09"]};;
    color: ${({theme}) => theme.colors.grayScale["00"]};
    max-width: 240px;
`;