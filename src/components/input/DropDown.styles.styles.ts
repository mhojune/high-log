import styled from "styled-components";

export const Container = styled.div<{ width: string }>`
    display: flex;
    flex-direction: column;
    width: ${({ width }) => width};
    border-radius: 8px;
    padding: 8px 16px;
    background-color: ${({theme}) => theme.colors.grayScale["09"]};
    transition: all 0.2s ease-in-out;
`;

export const InputWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    cursor: pointer;
`;

export const Input = styled.input`
    ${({theme}) => theme.typography.body.M0};
    border: none;
    outline: none;
    background-color: transparent;
    color: ${({theme}) => theme.colors.grayScale["00"]};
    cursor: inherit;

    &:read-only {
        cursor: pointer;
    }
`;

export const IconWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    width: 24px;
    height: 24px;
`;

export const Line = styled.div`
    margin-top: 8px;
    width: 100%;
    height: 1px;
    background-color: ${({theme}) => theme.colors.grayScale["07"]};
`;

export const List = styled.ul`
    display: flex;
    max-height: 400px;
    flex-direction: column;
    list-style: none;
    width: 100%;
    overflow-y: auto;
    scrollbar-width: none; 
    &::-webkit-scrollbar {
        display: none; 
    }
`;

export const ListItem = styled.li`
    ${({theme}) => theme.typography.body.M0};
    margin-top: 10px;
    color: ${({theme}) => theme.colors.grayScale["06"]};
    cursor: pointer;
`;
