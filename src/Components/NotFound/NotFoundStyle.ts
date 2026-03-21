import styled from 'styled-components';

export const ContainerNotFound = styled.div`
  background: ${props => props.theme.colors.gradient};
  color: ${props => props.theme.colors.text};
  transition: background 0.7s ease-in-out, color 0.5s ease-in-out;
`;

export const BorderNotFound = styled.div`
  border: 1px solid ${props => props.theme.colors.secundary};
  transition: background 0.5s ease-in-out, color 0.5s ease-in-out;

  &:hover {
    background: ${props => props.theme.colors.secundary};
    color: ${props => props.theme.colors.primary};
  }
`;

export const CodeBlock = styled.div`
  border: 1px solid ${props => props.theme.colors.secundary};
  color: ${props => props.theme.colors.text};
  opacity: 0.5;
`;
