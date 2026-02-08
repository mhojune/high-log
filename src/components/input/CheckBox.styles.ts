import styled from "styled-components";

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
`;

export const Container = styled.div`
    display: flex;
    align-items: center;
    cursor: pointer;
    gap: 8px;
    width: fit-content;
`;

export const Box = styled.div<{ $isChecked: boolean }>`
    width: 20px;
    height: 20px;
    border-radius: 4px;
    border: 0.5px solid ${({theme}) => theme.colors.grayScale["08"]};
    background-color: ${({theme}) => theme.colors.grayScale["09"]};
    
    display: flex;
    justify-content: center;
    align-items: center;
    flex-shrink: 0;
    transition: all 0.2s ease-in-out;

    & > svg {
        width: 20px;
        height: 20px;
        path {
            stroke: ${({theme}) => theme.colors.primary["00"]};
            stroke-width: 3px;
        }
    }
`;
