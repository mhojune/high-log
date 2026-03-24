import styled from "styled-components";

export const Step1Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 48px;
`;

export const TitleBox = styled.div`
    display: flex;
    width: 1200px;
    justify-content: space-between;
    align-items: center;
`;

export const ResultWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 32px;
    width: 1200px;
    padding: 48px 72px;
    justify-content: center;
    align-items: flex-start;
    border-radius: 12px;
    background-color: ${({theme}) => theme.colors.grayScale["11"]};
`;

export const SubjectText = styled.p`
    ${({theme}) => theme.typography.head.H3};
    color: ${({theme}) => theme.colors.grayScale["00"]};
`;

export const ScoreBox = styled.div`
    display: flex;
    flex-direction: column;
    gap: 7px;
`;

export const Score = styled.p`
    ${({theme}) => theme.typography.body.L2};
    color: ${({theme}) => theme.colors.grayScale["00"]};
`;

export const ScoreDescription = styled.p`
    ${({theme}) => theme.typography.body.XS1};
    color: ${({theme}) => theme.colors.grayScale["05"]};
`;

export const SpecifyScoreBox = styled.div`
    display: flex;
    flex-direction: column;
    gap: 8px;
`;

export const Title = styled.p`
    ${({theme}) => theme.typography.head.H4};
    color: ${({theme}) => theme.colors.grayScale["00"]};
`;

export const SpecifyBox = styled.div`
    display: flex;
    width: 636px;
    height: 40px;
    padding: 8px 15px;
    align-items: center;
    gap: 8px;
`;

export const SpecifySubject = styled.p`
    width: 150px;
    ${({theme}) => theme.typography.body.S2};
    color: ${({theme}) => theme.colors.grayScale["00"]};
`;

export const ProgressContainer = styled.div`
    width: 400px;
    height: 16px;
    background-color: ${({theme}) => theme.colors.grayScale["08"]};
    border-radius: 99px;
    overflow: hidden;
`;

export const ProgressBar = styled.div<{ width: string }>`
    width: ${({ width }) => width};
    height: 100%;
    background-color: ${({theme}) => theme.colors.secondary["04"]};
    border-radius: 99px;
`;

export const SpecifyScore = styled.p`
    ${({theme}) => theme.typography.body.XS1};
    color: ${({theme}) => theme.colors.grayScale["05"]};
`;

export const ProsconsBox = styled.div`
    display: flex;
    flex-direction: column;
    gap: 16px;
`;

export const ProsBox = styled.div`
    display: flex;
    padding-left: 13px;
    gap: 8px;
`;

export const Pros = styled.div`
    display: flex;
    padding: 9px 12px;
    justify-content: center;
    align-items: center;
    gap: 10px;
    border-radius: 12px;
    background-color: ${({theme}) => theme.colors.secondary["06"]};
`;

export const ProsText = styled.p`
    ${({theme}) => theme.typography.body.XS2};
    color: ${({theme}) => theme.colors.secondary["01"]};
`;

export const ConsBox = styled.div`
    display: flex;
    padding-left: 13px;
    gap: 8px;
`;

export const Cons = styled.div`
    display: flex;
    padding: 9px 12px;
    justify-content: center;
    align-items: center;
    gap: 10px;
    border-radius: 12px;
    background-color: ${({theme}) => theme.colors.labelColor["08"]};
`;

export const ConsText = styled.p`
    ${({theme}) => theme.typography.body.XS2};
    color: ${({theme}) => theme.colors.labelColor["06"]};
`;

export const AnalyzeBox = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 16px;
    align-self: stretch;
`;

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    border: 1px solid ${({theme}) => theme.colors.secondary["07"]};
    border-radius: 12px;
`;

export const LableBox = styled.div`
    display: flex;
    width: 1056px;
    height: 54px;
    padding: 12px 44px 12px 32px;
    justify-content: space-between;
    align-items: center;
    align-self: stretch;
    background-color: ${({theme}) => theme.colors.secondary["09"]};
    border-radius: 12px 12px 0 0;
`;

export const Column = styled.p`
    ${({theme}) => theme.typography.body.L1};
    color: ${({theme}) => theme.colors.grayScale["00"]};
`;

export const RightBox = styled.div`
    display: flex;
    width: 320px;
    justify-content: space-between;
    align-items: center;
`;

export const SetBox = styled.div`
    display: flex;
    flex-direction: column;
    border-top: 1px solid ${({theme}) => theme.colors.secondary["06"]};
`;

export const QuestionBox = styled.div`
    display: flex;
    width: 1056px;
    height: 78px;
    padding: 16px 32px;
    justify-content: space-between;
    align-items: center;
    align-self: stretch;
`;

export const QuestionText = styled.p`
    ${({theme}) => theme.typography.body.L2};
    color: ${({theme}) => theme.colors.grayScale["00"]};
`;

export const Time = styled.p`
    ${({theme}) => theme.typography.body.L0};
    color: ${({theme}) => theme.colors.grayScale["00"]}; 
`;

export const PointBox = styled.div`
    display: flex;
    flex-direction: column;
    padding: 12px 32px;
    flex-direction: column;
    align-items: flex-start;
    gap: 4px;
    align-self: stretch;
    border-top: 1px solid ${({theme}) => theme.colors.secondary["07"]};
`;

export const ImproveBox = styled.div`
    display: flex;
    align-items: center;
    gap: 16px;
    align-self: stretch;
`;

export const BlueText = styled.p`
    ${({theme}) => theme.typography.body.S2};
    color: ${({theme}) => theme.colors.primary["00"]};
`;

export const SuggestText = styled.p`
    ${({theme}) => theme.typography.body.S0};
    color: ${({theme}) => theme.colors.grayScale["00"]};
`;

export const ComplementBox = styled.div`
    display: flex;
    align-items: center;
    gap: 29px;
    align-self: stretch;
`;