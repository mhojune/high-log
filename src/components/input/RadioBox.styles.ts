import styled from "styled-components";

export const RadioBoxContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 20px;
    height: 20px;
    border-radius: 999px;
    border: 0.5px solid ${({theme}) => theme.colors.grayScale["08"]};
    background-color: ${({theme}) => theme.colors.grayScale["08"]};
    cursor: pointer;
`;

export const RadioBoxBlue = styled.div`
    width: 12px;
    height: 12px;
    flex-shrink: 0;
    aspect-ratio: 1/1;
    border-radius: 999px;
    background-color: ${({theme}) => theme.colors.primary["00"]};
`;