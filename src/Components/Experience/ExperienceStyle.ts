import styled from 'styled-components';

export const ContainerExperience = styled.div`
  padding: 60px 0;
  position: relative;
  z-index: 10;
`;

export const ExperienceInner = styled.div`
  background: ${props => props.theme.title === 'dark'
    ? 'rgba(0, 0, 0, 0.85)'
    : 'rgba(255, 255, 255, 0.85)'};
  border-radius: 12px;
  padding: 40px;
`;

export const TabButton = styled.button<{ $active: boolean }>`
  background: none;
  border: none;
  border-left: 3px solid ${props => props.$active ? '#1F9114' : 'transparent'};
  color: ${props => props.$active ? '#1F9114' : props.theme.colors.text};
  padding: 14px 24px;
  text-align: left;
  cursor: pointer;
  transition: all 0.3s ease;
  font-family: "JetBrains MONO";
  font-size: 0.95rem;
  width: 100%;
  opacity: ${props => props.$active ? 1 : 0.5};

  &:hover {
    color: #1F9114;
    opacity: 1;
    border-left-color: #1F9114;
  }
`;

export const DetailContainer = styled.div`
  color: ${props => props.theme.colors.text};
  transition: color 0.5s ease-in-out;
  font-family: "JetBrains MONO";

  h3 {
    font-size: 1.3rem;
    font-weight: 700;
  }

  .date {
    font-size: 0.85rem;
    opacity: 0.5;
    margin-top: 6px;
  }

  ul {
    margin-top: 24px;
    list-style: none;
    padding: 0;
  }

  li {
    position: relative;
    padding-left: 20px;
    margin-bottom: 14px;
    line-height: 1.7;
    font-size: 0.9rem;
    opacity: 0.8;

    &::before {
      content: '>';
      position: absolute;
      left: 0;
      color: #1F9114;
      font-weight: bold;
    }
  }
`;
