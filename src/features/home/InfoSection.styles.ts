import styled from "styled-components";

export const InfoSectionContainer = styled.section`
    display: flex;
    width: 100%;
    padding: 77px 490px;
    justify-content: center;
    align-items: center;
    background: radial-gradient(167.57% 167.57% at 50% 50%, #6668FF 0%, #3F41F2 100%);
`;

export const IconTitleWrapper = styled.div`
    display: flex;
    width: 460px;
    flex-direction: column;
    align-items: center;
    gap: 24px;
    flex-shrink: 0;
`;

export const IconBox = styled.div`
    display: flex;
    width: 54px;
    height: 54px;
    padding: 12px 16px 13px 16px;
    justify-content: center;
    align-items: center;
    aspect-ratio: 1/1;
    border-radius: var(--00, 999px);
    background: var(--Secondary-08, #E5E8FA);
    box-shadow: 0 1px 2px 1px rgba(226, 229, 255, 0.40);
`;

export const Icon = styled.img`
    width: 22px;
    height: 29px;
    flex-shrink: 0;
    aspect-ratio: 22/29;
`;

export const TitleBox = styled.div`
    display: flex;
    flex-direction: column;
`;

export const Title = styled.p`
    ${({theme}) => theme.typography.head.H0};
    color: #fff;
    text-align: center;
    white-space: nowrap;
`;