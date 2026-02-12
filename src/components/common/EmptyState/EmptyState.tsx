import * as S from "./EmptyState.styles";
import { ReactNode } from "react";

interface EmptyStateProps {
    icon: ReactNode;
    title: string;
    subtitle: string;
    children?: ReactNode; // For optional button
}

export default function EmptyState({ icon, title, subtitle, children }: EmptyStateProps) {
    return (
        <S.EmptyStateBox>
            <S.EmptyStateIconBox>
                {icon}
            </S.EmptyStateIconBox>
            <S.EmptyStateTextBox>
                <S.EmptyStateTitle>{title}</S.EmptyStateTitle>
                <S.EmptyStateSub>{subtitle}</S.EmptyStateSub>
            </S.EmptyStateTextBox>
            {children}
        </S.EmptyStateBox>
    );
}
