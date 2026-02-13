import styled, { css } from "styled-components";

export const RoundBox = styled.div`
    display: flex;
    width: 100px;
    height: 100px;
    padding: 26px;
    justify-content: center;
    align-items: center;
    aspect-ratio: 1/1;
    border-radius: 999px;
    background-color: ${({theme}) => theme.colors.secondary["09"]};
`;

export const TextBox = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    align-self: stretch;
`;

export const TextTitle = styled.p`
    ${({theme}) => theme.typography.body.M1};
    color: ${({theme}) => theme.colors.grayScale["01"]};
    transition: color 0.2s ease;
`;

export const TextSub = styled.p`
    ${({theme}) => theme.typography.body.S0};
    color: ${({theme}) => theme.colors.grayScale["02"]};
`;

export const FileUploadWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 20px;
    align-self: stretch;
    width: 100%;
`;

export const FileUploadContainer = styled.div<{ $status: 'idle' | 'uploading' | 'completed' | 'disabled' }>`
    display: flex;
    width: 1056px;
    height: 290px;
    padding: 60px 372px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 12px;
    border: 1px dashed ${({theme}) => theme.colors.grayScale["08"]};
    background: ${({theme}) => theme.colors.grayScale["10"]};
    cursor: ${({ $status }) => ($status === 'idle' ? 'pointer' : 'default')};
    transition: all 0.2s ease;

    ${({ $status, theme }) => 
        $status === 'idle' && 
        css`
            &:hover {
                border: 1px dashed ${theme.colors.secondary["05"]};
                background: rgba(165, 184, 241, 0.30);

                ${RoundBox} {
                    background-color: ${theme.colors.secondary["07"]};

                    svg {
                        stroke: ${theme.colors.primary["00"]};
                    }
                }

                ${TextTitle} {
                    color: ${theme.colors.secondary["01"]};
                }
            }
        `
    }
`;

export const UploadingBox = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 20px;
    align-self: stretch;
`;

export const ProgressText = styled.span`
    ${({theme}) => theme.typography.head.H3};
    color: ${({theme}) => theme.colors.primary["00"]};
`;

export const CompletedBox = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 20px;
    align-self: stretch;
`;

export const CompleteRoundBox = styled.div`
    display: flex;
    width: 100px;
    height: 100px;
    padding: 26px;
    justify-content: center;
    align-items: center;
    aspect-ratio: 1/1;
    border-radius: 999px;
    background-color: ${({theme}) => theme.colors.secondary["07"]};
`;

export const CompleteTextBox = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 8px;
`;

export const FileName = styled.p`
    ${({theme}) => theme.typography.body.M2};
    color: ${({theme}) => theme.colors.grayScale["01"]};
    text-decoration-line: underline;
    text-decoration-style: solid;
    text-decoration-skip-ink: auto;
    text-decoration-thickness: auto;
    text-underline-offset: auto;
`;

export const RemoveButton = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    background: transparent;
    border: none;
    cursor: pointer;
    padding: 0;
    
    &:hover svg {
        opacity: 0.8;
    }
`;

export const DisabledBox = styled.div`
    display: flex;
    width: 312px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 20px;
`;

export const DisabledTextBox = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 4px;
    align-self: stretch;
`;

export const DisabledTextTitle = styled.p`
    ${({theme}) => theme.typography.body.M2};
    color: ${({theme}) => theme.colors.grayScale["01"]};
`;

export const DisabledTextSub = styled.p`
    ${({theme}) => theme.typography.body.S0};
    color: ${({theme}) => theme.colors.grayScale["02"]};
    text-align: center;
`;
