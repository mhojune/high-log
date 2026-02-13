import styled from "styled-components";

export const RecordUploadContainer = styled.div`
    width: 100%;
    min-width: 1440px;
    height: 100%;
    display: flex;
    justify-content: center;
    padding-top: 96px;
    padding-bottom: 96px;
`;

export const RecordUploadWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 48px;
`;

export const UploadBox = styled.div`
    display: flex;
    width: 1200px;
    padding: 48px 72px;
    flex-direction: column;
    align-items: center;
    gap: 48px;
    border-radius: 16px;
    border: 0.5px solid ${({theme}) => theme.colors.secondary["07"]};
    background-color: ${({theme}) => theme.colors.grayScale["11"]};
`;

export const UploadSubmitWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 48px;
    align-self: stretch;
`;

export const TitleUploadBox = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 32px;
    align-self: stretch;
`;

export const TitleTermBox = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 32px;
    align-self: stretch;
`;

export const TitleBox = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 48px;
    align-self: stretch;
`;

export const Title = styled.p`
    ${({theme}) => theme.typography.head.H4};
    color: ${({theme}) => theme.colors.grayScale["01"]};
`;

export const InputTitleBox = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 4px;
    align-self: stretch;
`;

export const InputTitle = styled.div`
    display: flex;
    align-items: center;
    gap: 114px;
    align-self: stretch;
`;

export const Lable = styled.p`
    ${({theme}) => theme.typography.body.L2};
    color: ${({theme}) => theme.colors.grayScale["03"]};
`;

export const Caption = styled.p`
    ${({theme}) => theme.typography.caption.C0};
    color: ${({theme}) => theme.colors.grayScale["04"]};  
    margin-left: 158px;
`;

export const TermBox = styled.div`
    display: flex;
    align-items: flex-start;
    gap: 75px;
`;

export const CheckTextBox = styled.div`
    display: flex;
    width: 744px;
    flex-direction: column;
    align-items: flex-start;
    gap: 10px;
`;

export const CheckBox = styled.div`
    display: flex;
    align-items: center;
    gap: 11px;
`;

export const CheckTitle = styled.p`
    ${({theme}) => theme.typography.body.M2};
    color: ${({theme}) => theme.colors.grayScale["01"]};
    text-decoration-line: underline;
    text-decoration-style: solid;
    text-decoration-skip-ink: none;
    text-decoration-thickness: auto;
    text-underline-offset: auto;
`;

export const CheckSubTitle = styled.p`
    ${({theme}) => theme.typography.body.S0};
    color: ${({theme}) => theme.colors.grayScale["02"]};
`;