import { useState, useEffect } from "react";
import AuthDescription from "@/features/auth/AuthDescription";
import LoginForm from "@/features/auth/LoginForm";
import SignUpForm from "@/features/auth/SignUpForm";
import Tab from "@/components/tab/Tab";
import Modal from "@/components/modal/Modal";
import * as S from "@/pages/authPage/AuthPage.styles";
import { useRequestEmailVerify, useConfirmEmail, useSignUp } from "@/api/auth/useAuthApi";
import { useAuth } from "@/contexts/AuthContext";
import { parseApiError, ApiErrorException } from "@/api/client";
import { isValidPassword } from "@/constants/auth";

type AuthMode = "login" | "signup";

export default function AuthPage() {
  const [activeTab, setActiveTab] = useState<AuthMode>("login");
  const [isEmailVerified, setIsEmailVerified] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [modalMessage, setModalMessage] = useState({ main: "", sub: "" });
  const [modalButtons, setModalButtons] = useState({
    left: "닫기",
    right: "확인",
  });
  const [switchToLoginOnClose, setSwitchToLoginOnClose] = useState(false);

  const { login } = useAuth();
  const { mutateAsync: requestEmailVerify } = useRequestEmailVerify();
  const { mutateAsync: confirmEmail } = useConfirmEmail();
  const { mutateAsync: signUp } = useSignUp();

  useEffect(() => {
    if (activeTab === "login") setIsEmailVerified(false);
  }, [activeTab]);

  const showModal = (
    main: string,
    sub?: string,
    buttons?: { left?: string; right?: string },
  ) => {
    setModalMessage({ main, sub: sub ?? "" });
    setModalButtons({
      left: buttons?.left ?? "닫기",
      right: buttons?.right ?? "확인",
    });
    setModalOpen(true);
  };

  const handleLoginSubmit = async (data: {
    email: string;
    password: string;
    keepLogin: boolean;
  }) => {
    try {
      await login({ ...data });
      // login 성공 시 AuthContext에서 navigate("/") 처리
    } catch (err) {
      if (err instanceof ApiErrorException && err.status === 401) {
        showModal(
          "로그인 실패",
          "이메일 또는 비밀번호가 일치하지 않습니다.",
          { right: "다시 입력" }
        );
      } else {
        const { message } = parseApiError(err);
        showModal("로그인 실패", message, { right: "다시 시도" });
      }
    }
  };

  const handleSendVerificationCode = async (email: string) => {
    try {
      await requestEmailVerify({ email });
      showModal("인증번호가 발송되었습니다.", "이메일을 확인해주세요.");
    } catch (err) {
      const { message } = parseApiError(err);
      showModal("인증번호 발송 실패", message, { right: "다시 시도" });
    }
  };

  const handleVerifyCode = async (email: string, code: string) => {
    try {
      const res = await confirmEmail({ email, code });
      if (res.verified) {
        setIsEmailVerified(true);
        showModal("이메일 인증이 완료되었습니다.");
      } else {
        showModal("이메일 인증이 잘못됬어요", "메일 인증을 다시 시도해주세요.", {
          right: "인증메일 재발송",
        });
      }
    } catch (err) {
      const { message } = parseApiError(err);
      showModal("인증 실패", message, { right: "다시 시도" });
    }
  };

  const handleSignUpSubmit = async (data: {
    name: string;
    email: string;
    verificationCode: string;
    password: string;
    passwordConfirm: string;
    agreements: {
      이용약관: boolean;
      개인정보처리방침: boolean;
      만14세이상: boolean;
    };
  }) => {
    const allAgreed =
      data.agreements.이용약관 &&
      data.agreements.개인정보처리방침 &&
      data.agreements.만14세이상;
    if (!allAgreed) {
      showModal("필수 항목에 모두 동의해주세요.");
      return;
    }

    if (!isEmailVerified) {
      showModal("이메일 인증이 필요해요", "메일에서 인증 후 다시 시도해주세요", {
        right: "인증메일 재발송",
      });
      return;
    }

    if (data.password !== data.passwordConfirm) {
      showModal(
        "비밀번호가 일치하지 않습니다.",
        "비밀번호와 비밀번호 확인을 다시 입력해주세요.",
        { right: "다시 입력" },
      );
      return;
    }

    if (!isValidPassword(data.password)) {
      showModal("비밀번호를 다시 확인해 주세요", "조건에 맞게 다시 입력해 주세요.", {
        right: "다시 입력",
      });
      return;
    }

    try {
      await signUp({
        email: data.email,
        password: data.password,
        name: data.name,
        marketingAgreement: false,
      });
      setSwitchToLoginOnClose(true);
      showModal(
        "회원가입이 완료되었습니다.",
        "확인을 누르면 로그인 화면으로 이동합니다.",
        { right: "로그인하기" },
      );
    } catch (err) {
      if (err instanceof ApiErrorException && err.status === 400) {
        showModal("비밀번호를 다시 확인해 주세요", "조건에 맞게 다시 입력해 주세요.", {
          right: "다시 입력",
        });
      } else {
        const { message } = parseApiError(err);
        showModal("회원가입 실패", message, { right: "다시 시도" });
      }
    }
  };

  const closeModal = () => {
    setModalOpen(false);
    if (switchToLoginOnClose) {
      setSwitchToLoginOnClose(false);
      setActiveTab("login");
    }
  };

  return (
    <S.Container>
      <S.ContentWrapper>
        <S.LeftFrame>
          <AuthDescription />
        </S.LeftFrame>
        <S.FormFrame>
          <S.FormFrameContent>
            <S.TabWrapper>
              <Tab activeTab={activeTab} onTabChange={setActiveTab} />
            </S.TabWrapper>
            {activeTab === "login" ? (
              <LoginForm onSubmit={handleLoginSubmit} />
            ) : (
              <SignUpForm
                onSendVerificationCode={handleSendVerificationCode}
                onVerifyCode={handleVerifyCode}
                onSubmit={handleSignUpSubmit}
              />
            )}
          </S.FormFrameContent>
        </S.FormFrame>
      </S.ContentWrapper>
      <Modal
        isOpen={modalOpen}
        onClose={closeModal}
        mainTitle={modalMessage.main}
        subTitle={modalMessage.sub || undefined}
        leftButtonText={modalButtons.left}
        rightButtonText={modalButtons.right}
        onLeftButtonClick={closeModal}
        onRightButtonClick={closeModal}
      />
    </S.Container>
  );
}
