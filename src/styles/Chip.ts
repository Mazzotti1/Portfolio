import styled from 'styled-components';

/* Pill de texto usada nas secoes de Conhecimentos (stack sem icone)
   e de Leituras (tags). Cor vem do tema, funciona em light e dark. */
export const Chip = styled.span`
  display: inline-flex;
  align-items: center;
  border: 1px solid #1f9114;
  border-radius: 999px;
  padding: 5px 12px;
  font-size: 0.78rem;
  line-height: 1.2;
  white-space: nowrap;
  color: ${props => props.theme.colors.secundary};
  background: ${props =>
    props.theme.title === 'dark' ? 'rgba(31, 145, 20, 0.12)' : 'rgba(31, 145, 20, 0.1)'};
  transition: background 0.5s ease-in-out, color 0.5s ease-in-out;
`;
