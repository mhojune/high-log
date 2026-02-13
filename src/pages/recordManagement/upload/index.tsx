import { DefaultButton } from "@/components/button/Button"
import CheckBox from "@/components/input/CheckBox"
import DefaultInput from "@/components/input/DefaultInput"
import Title from "@/components/title/Title"
import FileUpload from "@/features/recordManagement/FileUpload"
import { useFileUpload } from "@/hooks/useFileUpload"
import * as S from "@/pages/recordManagement/upload/RecordUpload.styles"
import { useState } from "react"
import { useNavigate } from "react-router-dom"

export default function RecordUpload() {
    const navigate = useNavigate();
    const [text, setText] = useState<string>("");
    const [isChecked, setIsChecked] = useState<boolean>(false);
    
    const {
        file,
        status,
        progress,
        handleFileSelect,
        handleRemoveFile
    } = useFileUpload();

    return (
        <S.RecordUploadContainer>
            <S.RecordUploadWrapper>
                <Title text="생기부 업로드"/>
                <S.UploadBox>
                    <S.UploadSubmitWrapper>
                        <S.TitleUploadBox>
                            <S.TitleTermBox>
                                <S.Title>면접을 준비할 생기부를 업로드해 주세요</S.Title>
                                <S.InputTitleBox>
                                    <S.InputTitle>
                                        <S.Lable>제목</S.Lable>
                                        <DefaultInput text={text} setText={setText} placeholder="업로드할 생기부 제목을 설정해 주세요 ex) 000의 생기부" />
                                    </S.InputTitle>
                                    <S.Caption>제목은 최대 28자까지 입력할 수 있어요</S.Caption>
                                </S.InputTitleBox>
                                <S.TermBox>
                                    <S.Lable>약관 동의</S.Lable>
                                    <S.CheckTextBox>
                                        <S.CheckBox>
                                            <CheckBox isChecked={isChecked} onClick={() => setIsChecked(!isChecked)}/>
                                            <S.CheckTitle>개인정보 수집 및 이용 동의</S.CheckTitle>
                                        </S.CheckBox>
                                        <S.CheckSubTitle>[필수] 본인은 위 내용을 충분히 숙지하였으며, 해당 사항에 동의하고 이에 따른 모든 책임은 본인에게 있음을 확인합니다.</S.CheckSubTitle>
                                    </S.CheckTextBox>
                                </S.TermBox>
                            </S.TitleTermBox>
                            <FileUpload 
                                text="이곳에 파일을 업로드해주세요" 
                                subText="HTML, PDF 파일만 업로드 할 수 있어요"
                                status={status}
                                progress={progress}
                                fileName={file?.name}
                                onFileSelect={handleFileSelect}
                                onRemove={handleRemoveFile}
                            />
                        </S.TitleUploadBox>
                    </S.UploadSubmitWrapper>
                    <DefaultButton width={174} type="primary" text=" 저장하기" onClick={() => {
                        if (file?.name) {
                            navigate("/record_management");
                        }
                    }}/>
                </S.UploadBox>
            </S.RecordUploadWrapper>
        </S.RecordUploadContainer>
    )
}