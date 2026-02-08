import * as S from "./NavPopUp.styles";
import { Link, useLocation } from "react-router-dom";
import React from "react";

interface NavPopUpProps {
    sub_list: {
        title: string;
        path: string;
    }[];
    onClose: () => void;
}

export default function NavPopUp({ sub_list, onClose }: NavPopUpProps) {
    const location = useLocation();

    return (
        <S.NavPopUpContainer>
            <S.SubNavWrapper>
                {sub_list.map((item, index) => {
                    const isActive = location.pathname === item.path;
                    return (
                        <React.Fragment key={item.path}>
                            <Link to={item.path} style={{ textDecoration: 'none' }} onClick={onClose}>
                                <S.SubNavTitle $isActive={isActive}>{item.title}</S.SubNavTitle>
                            </Link>
                            {index < sub_list.length - 1 && <S.Line />}
                        </React.Fragment>
                    )
                })}
            </S.SubNavWrapper>
        </S.NavPopUpContainer>
    )
}