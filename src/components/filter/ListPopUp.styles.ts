import styled, { keyframes } from "styled-components";

const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

export const ListPopUpContainer = styled.div`
    position: absolute;
    top: calc(100% + 8px);
    left: 50%;
    transform: translateX(-50%);
    z-index: 10;
    display: flex;
    width: 378px;
    padding: 8px 16px;
    flex-direction: column;
    align-items: flex-start;
    gap: 4px;
    border-radius: 12px;
    border: 0.5px solid ${({theme}) => theme.colors.grayScale["08"]};
    background-color: ${({theme}) => theme.colors.grayScale["09"]};
    max-height: 198px;
    overflow-y: auto;

    &::-webkit-scrollbar {
        display: none;
    }
    
    -ms-overflow-style: none;
    scrollbar-width: none;
`;

export const LoaderWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    padding: 10px 0;
    
    & > svg {
        animation: ${spin} 1s linear infinite;
    }
`;

export const TitleWrapper = styled.div`
    display: flex;
    padding: 4px 2px;
    flex-direction: column;
    align-items: flex-start;
    align-self: stretch;
    cursor: pointer;
    border-radius: 4px;

    &:hover {
        background-color: ${({theme}) => theme.colors.grayScale["08"]};
    }
`;

export const Title = styled.p`
    ${({theme}) => theme.typography.body.M0};
    color: ${({theme}) => theme.colors.grayScale["04"]};
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
`;

export const Line = styled.div`
    width: 100%;
    height: 1px;
    min-height: 1px;
    flex-shrink: 0;
    background-color: ${({theme}) => theme.colors.grayScale["06"]};
    align-self: stretch;
`;