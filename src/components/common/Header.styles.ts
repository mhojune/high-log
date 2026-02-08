import styled from "styled-components";

export const HeaderContainer = styled.div`
    display: flex;
    width: 100%;
    min-width: 1440px;
    padding: 24px 120px;
    justify-content: space-between;
    align-items: center;
    border-bottom: 2px solid ${({theme}) => theme.colors.secondary["08"]};
    background-color : ${({theme}) => theme.colors.grayScale["11"]};
`;

export const LogoNavWrapper = styled.div`
    display: flex;
    width: 663px;
    align-items: center;
    gap: 73px;
    flex-shrink: 0;
`;

export const NavBox = styled.div`
    display: flex;
    align-items: center;
    gap: 24px;
`;

export const NavItemWrapper = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
`;

export const PopupPositioner = styled.div`
    position: absolute;
    top: 65px;
    left: 50%;
    transform: translateX(-50%);
    z-index: 100;
    min-width: max-content;
`;

export const NavTitle = styled.p<{$activeTab: boolean}>`
    ${({theme, $activeTab}) => $activeTab ? theme.typography.body.L2 : theme.typography.body.L1};
    color: ${({theme, $activeTab}) => $activeTab ? theme.colors.primary["00"] : theme.colors.grayScale["00"]};
    cursor: pointer;
    white-space: nowrap;
`;

export const UnLoggedInWrapper = styled.div`
    display: flex;
    padding: 8px 16px;
    justify-content: center;
    align-items: center;
    border-radius: 999px;
    background-color: ${({theme}) => theme.colors.primary["00"]};
    cursor: pointer;
`;

export const UnLoggedInBox = styled.div`
    display: flex;
    align-items: center;
    gap: 2px;
`;

export const UnLoggedInTitle = styled.p`
    ${({theme}) => theme.typography.body.XS2};
    color: ${({theme}) => theme.colors.grayScale["11"]};
`;

export const LoggedInWrapper = styled.div`
    display: inline-flex;
    align-items: center;
    gap: 8px;
    cursor: pointer;
`;

export const LoggedInTitle = styled.p`
    ${({theme}) => theme.typography.body.S1};
    color: ${({theme}) => theme.colors.grayScale["03"]};
`;
