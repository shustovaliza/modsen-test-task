import {
  FooterContainer,
  FooterContentWrap,
  FooterLogoWrap,
  ModsenLogoWrap,
} from './styled';
import Logo from '@/assets/icons/logo.svg?react';
import ModsenLogo from '@/assets/icons/modsen.svg?react';

export const Footer = () => {
  return (
    <FooterContainer>
      <FooterContentWrap>
        <FooterLogoWrap>
          <Logo />
        </FooterLogoWrap>
        <ModsenLogoWrap>
          <ModsenLogo />
        </ModsenLogoWrap>
      </FooterContentWrap>
    </FooterContainer>
  );
};
