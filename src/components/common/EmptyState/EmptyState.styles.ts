import styled from "styled-components";

export const EmptyStateBox = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 30px;
`;

export const EmptyStateIconBox = styled.div`
    display: flex;
    width: 100px;
    height: 100px;
    padding: 26px;
    justify-content: center;
    align-items: center;
    aspect-ratio: 1/1;
    border-radius: 999px;
    background-color: ${({theme}) => theme.colors.grayScale["09"]};
`;

export const EmptyStateTextBox = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 4px;
`;

export const EmptyStateTitle = styled.p`
    ${({ theme }) => theme.typography.body.L2};
    color: ${({ theme }) => theme.colors.grayScale["00"]};
    text-align: center;
`;

export const EmptyStateSub = styled.p`
    ${({ theme }) => theme.typography.body.L0};
    color: ${({ theme }) => theme.colors.grayScale["02"]};
    text-align: center;
`;
