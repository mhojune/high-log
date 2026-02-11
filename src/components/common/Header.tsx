import * as S from "@/components/common/Header.styles"
import Logo from "@/assets/images/logo.svg?react"
import ArrowRight from "@/assets/icons/arrow_right.svg?react"
import User from "@/assets/icons/circle_user.svg?react"
import { NAV_LIST } from "@/constants/header/NAV_LIST"
import { useState } from "react"
import { Link, useLocation, useNavigate } from "react-router-dom"
import NavPopUp from "./NavPopUp"

export default function Header() {
    const isLoggedIn = 0 // 임시 로그인 로직 
    const [openDropdownId, setOpenDropdownId] = useState<number | null>(null);
    const location = useLocation();
    const navigate = useNavigate();

    const handleNavClick = (id: number, path: string, hasSubList: boolean) => {
        if (hasSubList) {
            setOpenDropdownId(prev => prev === id ? null : id);
        } else {
            navigate(path);
            setOpenDropdownId(null);
        }
    };

    const isTabActive = (path: string, subList?: { path: string }[]) => {
        if (location.pathname === path) return true;
        if (subList) {
            return subList.some(sub => location.pathname === sub.path);
        }
        return location.pathname.startsWith(path) && path !== "/";
    };

    return (
        <S.HeaderContainer>
            <S.LogoNavWrapper>
                <Link to="/"><Logo /></Link>
                <S.NavBox>
                    {NAV_LIST.map((item) => {
                        const active = isTabActive(item.path, item.sub_list);
                        return (
                            <S.NavItemWrapper key={item.id}>
                                <S.NavTitle 
                                    $activeTab={active} 
                                    onClick={() => handleNavClick(item.id, item.path, !!item.sub_list)}
                                >
                                    {item.title}
                                </S.NavTitle>
                                {item.sub_list && openDropdownId === item.id && (
                                    <S.PopupPositioner>
                                        <NavPopUp 
                                            sub_list={item.sub_list} 
                                            onClose={() => setOpenDropdownId(null)}
                                        />
                                    </S.PopupPositioner>
                                )}
                            </S.NavItemWrapper>
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