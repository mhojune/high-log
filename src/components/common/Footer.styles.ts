import styled from "styled-components";
import { Link as RouterLink } from "react-router-dom";

export const FooterContainer = styled.footer`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.secondary["03"]};
`;

export const FooterContent = styled.div`
  margin: 0 auto;
  padding: 81px 121px 97px 119px;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
`;

export const LeftSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

export const LogoWrapper = styled.div`
  margin-bottom: 4px;
`;

export const TextParagraph = styled.p`
  ${({ theme }) => theme.typography.body.S0}
  color: ${({ theme }) => theme.colors.grayScale["07"]};
  margin: 0;
`;

export const Link = styled(RouterLink)`
  ${({ theme }) => theme.typography.body.S0}
  color: ${({ theme }) => theme.colors.grayScale["07"]};
  text-decoration: underline;
`;

export const RightSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 16px;
`;

export const SocialIcons = styled.div`
  display: flex;
  gap: 8px;
`;

export const IconButton = styled.button`
  background: none;
  border: none;
  padding: 0;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Copyright = styled.p`
  ${({ theme }) => theme.typography.body.S0}
  color: ${({ theme }) => theme.colors.grayScale["07"]};
  margin: 0;
`;
