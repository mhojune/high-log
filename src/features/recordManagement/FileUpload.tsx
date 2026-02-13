import * as S from "@/features/recordManagement/FileUpload.styles"
import FILE_UPLOAD from "@/assets/icons/file_plus.svg?react"
import FILE from "@/assets/icons/file.svg?react"
import CIRCLE_X from "@/assets/icons/circle_x.svg?react"
import HOURGLASS from "@/assets/icons/hourglass.svg?react"
import { useRef, type ChangeEvent } from "react"

export interface FileUploadProps {
    text: string;
    subText?: string;
    status?: 'idle' | 'uploading' | 'completed' | 'disabled';
    progress?: number;
    fileName?: string;
    onFileSelect?: (file: File) => void;
    onRemove?: () => void;
}

export default function FileUpload({
    text, 
    subText, 
    status = 'idle', 
    progress = 0, 
    fileName,
    onFileSelect,
    onRemove
}: FileUploadProps) {
    const fileInputRef = useRef<HTMLInputElement>(null);

    const handleClick = () => {
        if (status === 'idle') {
            fileInputRef.current?.click();
        }
    };

    const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file && onFileSelect) {
            onFileSelect(file);
        }
        if (fileInputRef.current) {
            fileInputRef.current.value = '';
        }
    };

    const handleRemove = (e: React.MouseEvent) => {
        e.stopPropagation();
        if (onRemove) onRemove();
    };

    return (
        <S.FileUploadContainer onClick={handleClick} $status={status}>
            <input 
                type="file" 
                ref={fileInputRef} 
                style={{display: 'none'}} 
                accept=".pdf" 
                onChange={handleFileChange}
                disabled={status !== 'idle'}
            />
            
            <S.FileUploadWrapper>
                {status === 'uploading' ? (
                    <S.UploadingBox>
                        <S.RoundBox>
                            <HOURGLASS width={48} height={48} />
                        </S.RoundBox>
                        <S.TextTitle>파일 업로드 중... {Math.round(progress)}%</S.TextTitle>
                    </S.UploadingBox>
                ) : status === 'completed' ? (
                    <S.CompletedBox>
                        <S.CompleteRoundBox>
                            <FILE width={48} height={48} />
                        </S.CompleteRoundBox>
                        <S.CompleteTextBox>
                            <S.FileName>{fileName}</S.FileName>
                            <S.RemoveButton onClick={handleRemove}>
                                <CIRCLE_X width={24} height={24}/>
                            </S.RemoveButton>
                        </S.CompleteTextBox>
                    </S.CompletedBox>
                ) : status === 'disabled' ? (
                    <S.DisabledBox>
                        <S.CompleteRoundBox>
                            <FILE width={48} height={48} />
                        </S.CompleteRoundBox>
                        <S.DisabledTextBox>
                            <S.DisabledTextTitle>{fileName}</S.DisabledTextTitle>
                            <S.DisabledTextSub>질문이 생성된 생기부는 파일을 변경할 수 없어요</S.DisabledTextSub>
                        </S.DisabledTextBox>
                    </S.DisabledBox>
                ) : (
                    <>
                        <S.RoundBox>
                            <FILE_UPLOAD width={48} height={48} stroke="#A5B8F1"/>
                        </S.RoundBox>
                        <S.TextBox>
                            <S.TextTitle>{text}</S.TextTitle>
                            {subText && <S.TextSub>{subText}</S.TextSub>}
                        </S.TextBox>
                    </>
                )}
            </S.FileUploadWrapper>
        </S.FileUploadContainer>
    )
}