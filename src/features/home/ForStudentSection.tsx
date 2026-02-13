import * as S from "@/features/home/ForStudentSection.styles"
import { useState } from "react"
import QUESTION from "@/assets/images/sample_question_create.png"
import PRACTICE from "@/assets/images/sample_practice.png"
import RESULT from "@/assets/images/sample_result.png"

const BUTTON_LIST = [
    {
        title: "질문 생성",
        img: QUESTION,
        description: "대입 5개 영역 맞춤 질문 생성",
    },
    {
        title: "면접 연습",
        img: PRACTICE,
        description: "1:1 맞춤 연습으로 실전 대비",
    },
    {
        title: "면접 결과",
        img: RESULT,
        description: "점수로 확인하는 나의 면접 실력",
    }
]

export default function ForStudentSection()  {
    const [activeIndex, setActiveIndex] = useState<number>(0);
    return(
        <S.ForStudentSectionContainer>
            <S.TextImgWrapper>
                <S.TextBox>
                    <S.TextSub>for student</S.TextSub>
                    <S.TextMain>{`가장 가까운 면접 메이트,\n나의 생기부에 맞는 질문으로 시작하는 면접 준비`}</S.TextMain>
                </S.TextBox>
                <S.ImgButtonBox>
                    <S.ButtonBox role="tablist">
                        {BUTTON_LIST.map((item,idx) => (
                            <S.ClickButton 
                                key={idx} 
                                role="tab"
                                aria-selected={activeIndex === idx}
                                $active={activeIndex === idx} 
                                onClick={() => setActiveIndex(idx)}
                            >
                                {item.title}
                            </S.ClickButton>
                        ))}
                    </S.ButtonBox>
                    <S.SampleImageWrapper>
                        {BUTTON_LIST.map((item, idx) => (
                            <S.SampleImage 
                                key={idx} 
                                src={item.img} 
                                alt={item.title} 
                                $active={activeIndex === idx} 
                            />
                        ))}
                        <S.DescriptionBox key={activeIndex}>
                            <S.DescriptionText>{BUTTON_LIST[activeIndex].description}</S.DescriptionText>
                        </S.DescriptionBox>
                    </S.SampleImageWrapper>
                </S.ImgButtonBox>
            </S.TextImgWrapper>
        </S.ForStudentSectionContainer>
    )
}