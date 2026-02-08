import * as S from "@/components/common/Header.styles"
import Logo from "@/assets/images/logo.svg?react"
import ArrowRight from "@/assets/icons/arrow_right.svg?react"
import User from "@/assets/icons/circle_user.svg?react"
import { NAV_LIST } from "@/constants/Header/NAV_LIST"
import { useState } from "react"

export default function Header() {
    const isLoggedIn = 0 // 임시 로그인 로직 
    const [activeTab, setActiveTab] = useState<number>(0);

    const handlerTab = (id: number) => {
        if (activeTab != id) {
            setActiveTab(id)
        }
    }

    return (
        <S.HeaderContainer>
            <S.LogoNavWrapper>
                <Logo />
                <S.NavBox>
                    {NAV_LIST.map((item) => {
                        return (
                            <S.NavTitle $activeTab={activeTab == item.id} onClick={() => {handlerTab(item.id)}}>{item.title}</S.NavTitle>
                        )
                    })}
                </S.NavBox>
            </S.LogoNavWrapper>
            {isLoggedIn ? 
            (
                <S.LoggedInWrapper onClick={() => {}}>
                    <User width={24} height={24} fill="none" stroke="#394ECA" />
                    <S.LoggedInTitle>마이페이지</S.LoggedInTitle>
                </S.LoggedInWrapper>
            ) : 
            (
                <S.UnLoggedInWrapper onClick={() => {}}>
                    <S.UnLoggedInBox>
                        <S.UnLoggedInTitle>시작하기</S.UnLoggedInTitle>
                        <ArrowRight width={16} height={16} stroke="#F0F0F3" />
                    </S.UnLoggedInBox>
                </S.UnLoggedInWrapper>
            )}
            
        </S.HeaderContainer>
    )
}