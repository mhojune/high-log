import styled from "styled-components";

export const PaginationWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 72px;
    width: 100%;
`;

export const PageButtonBox = styled.div`
    display: flex;
    gap: 24px;
`;

export const PageButton = styled.button<{ $active?: boolean }>`
    display: flex;
    width: 13px;
    height: 30px;
    justify-content: center;
    align-items: center;
    background-color: transparent;
    border: none;
    border-radius: 4px;
    ${({theme}) => theme.typography.body.M1}
    color: ${({ $active, theme }) => 
        $active ? theme.colors.primary["00"] : theme.colors.grayScale["04"]};
    cursor: pointer;
`;

export const ArrouButtonBox = styled.div`
    display: flex;
    padding: 0px;
`;

export const ArrowButton = styled.button`
    display: flex;
    width: 24px;
    height: 24px;
    justify-content: center;
    align-items: center;
    border: none;
    background: transparent;
    cursor: pointer;
    color: ${({ theme }) => theme.colors.grayScale["05"]};
    padding : 0px;

    svg {
        width: 100%;
        height: 100%;
    }

    &:disabled {
        opacity: 0.6;
        cursor: not-allowed;
    }
`;
