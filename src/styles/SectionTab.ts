import styled from 'styled-components';

/* Aba de filtro usada em Conhecimentos e Leituras. Mantem o visual
   original (branco, borda verde, hover preto) e marca a aba ativa em
   verde -- antes nao havia estado ativo nenhum. */
export const SectionTab = styled.button<{ $active: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.75rem;
  border-radius: 0.375rem;
  border: 1px solid #1f9114;
  background: ${props => (props.$active ? '#1f9114' : '#ffffff')};
  color: ${props => (props.$active ? '#ffffff' : '#000000')};
  font-family: inherit;
  cursor: pointer;
  white-space: nowrap;
  transition: all 0.7s ease;

  &:hover {
    background: ${props => (props.$active ? '#1f9114' : '#000000')};
    color: #ffffff;
    text-decoration: none;
    filter: none;
  }

  /* Estes breakpoints TEM que morar aqui, nao em medias.css: o CSS de
     styled-components e injetado em runtime no <head>, depois do <link>
     do bundle, entao com especificidade igual ele sempre vence. */
  @media (max-width: 640px) {
    font-size: 0.8rem;
    padding: 10px 14px;
  }

  @media (max-width: 400px) {
    font-size: 0.72rem;
    padding: 9px 10px;
  }
`;
