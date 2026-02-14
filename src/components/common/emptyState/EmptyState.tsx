import type { ReactNode  } from "react";
import * as S from "@/components/common/emptyState/EmptyState.styles";

interface EmptyStateProps {
    icon: ReactNode;
    title?: string;
    subtitle?: string;
    children?: ReactNode; 
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
