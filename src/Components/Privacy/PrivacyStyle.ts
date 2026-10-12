import styled from 'styled-components';

export const ContainerPrivacy = styled.div`
  background: ${props => props.theme.colors.gradient};
  color: ${props => props.theme.colors.text};
  transition: background 0.7s ease-in-out, color 0.5s ease-in-out;
  min-height: 100vh;
  padding: 56px 20px 72px;

  @media (max-width: 640px) {
    padding: 32px 16px 48px;
  }
`;

/* Largura de leitura: linha longa demais cansa num documento de texto */
export const PrivacyDoc = styled.article`
  max-width: 760px;
  margin: 0 auto;

  h1 {
    font-size: clamp(1.6rem, 6vw, 2.4rem);
    font-weight: 700;
    color: #1f9114;
    line-height: 1.2;
  }

  h2 {
    font-size: clamp(1.02rem, 3.6vw, 1.2rem);
    font-weight: 700;
    margin-top: 40px;
    margin-bottom: 12px;
    line-height: 1.3;
  }

  p {
    font-size: clamp(0.88rem, 3vw, 0.97rem);
    line-height: 1.8;
    opacity: 0.85;
    margin-bottom: 12px;
  }

  li {
    font-size: clamp(0.88rem, 3vw, 0.97rem);
    line-height: 1.8;
    opacity: 0.85;
    margin-bottom: 8px;
    padding-left: 18px;
    position: relative;
    list-style: none;

    &::before {
      content: '>';
      position: absolute;
      left: 0;
      color: #1f9114;
      font-weight: bold;
    }
  }

  a {
    color: #1f9114;
    border-bottom: 1px solid transparent;
    overflow-wrap: anywhere;

    &:hover {
      border-bottom-color: #1f9114;
    }
  }
`;

export const PrivacyMeta = styled.p`
  font-size: 0.76rem;
  opacity: 0.5;
  margin-top: 10px;
`;

export const AppBlock = styled.div`
  border-left: 3px solid #1f9114;
  padding: 2px 0 2px 14px;
  margin-bottom: 22px;

  .name {
    font-weight: 700;
    font-size: 0.98rem;
  }

  .pkg {
    font-size: 0.74rem;
    opacity: 0.45;
    margin-top: 2px;
    overflow-wrap: anywhere;
  }

  .collects {
    font-size: 0.86rem;
    opacity: 0.8;
    line-height: 1.7;
    margin-top: 8px;
  }
`;

export const BackLink = styled.a`
  display: inline-flex;
  align-items: center;
  padding: 9px 18px;
  border: 1px solid #1f9114;
  border-radius: 0.375rem;
  color: #1f9114;
  font-size: 0.82rem;
  transition: all 0.4s ease;

  &:hover {
    background: #1f9114;
    color: #ffffff;
    text-decoration: none;
    filter: none;
  }
`;
