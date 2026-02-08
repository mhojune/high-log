import styled from "styled-components";

export const NavPopUpContainer = styled.div`
    display: inline-flex;
    padding: 30px 20px;
    flex-direction: column;
    align-items: flex-start;
    gap: 10px;
    border-radius: 16px;
    border: 0.5px solid ${({theme}) => theme.colors.secondary["08"]};
    opacity: 0.8;
    background-color: ${({theme}) => theme.colors.grayScale["11"]};
`;

export const SubNavWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;
`;

export const SubNavTitle = styled.p<{ $isActive: boolean }>`
    ${({theme}) => theme.typography.body.L1};
    color: ${({theme, $isActive}) => $isActive ? theme.colors.primary["00"] : theme.colors.grayScale["00"]};
    text-align: center;
    cursor: pointer;
`;

export const Line = styled.div`
    width: 100%;
    height: 1px;
    background-color: ${({theme}) => theme.colors.secondary["07"]};
`;