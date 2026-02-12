import styled from "styled-components";

export const StudentReportContainer = styled.div`
    display: flex;
    width: 1200px;
    flex-direction: column;
    align-items: flex-start;
    gap: 48px;
`;

export const SearchListWrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    align-items: flex-start;
    gap: 24px;
`;

export const SearchBlock = styled.div`
    display: flex;
    padding-left: 8px;
    justify-content: space-between;
    align-items: flex-start;
    align-self: stretch;
`;

export const TotalCount = styled.p`
    ${({theme}) => theme.typography.head.H4};
    color: ${({theme}) => theme.colors.grayScale["05"]};
`;

export const SearchBox = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    gap: 16px;
`;

export const ListBox = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 16px;
    align-self: stretch;
`;

export const EmptyListWrapper = styled.div`
    display: flex;
    width: 100%;
    height: 630px;
    padding: 218px 0;
    justify-content: center;
    align-items: center;
`;

export const EmptyReportWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 1200px;
    height: 630px;
`;