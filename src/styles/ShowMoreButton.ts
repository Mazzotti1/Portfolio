import styled from 'styled-components';

/* Botao "mostrar mais" compartilhado (Sobre mim e Conhecimentos).
   Existe so no mobile: a regra .showMoreRow em medias/medias.css
   esconde a linha inteira em telas largas. */
export const ShowMoreButton = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  padding: 8px 18px;
  border: 1px solid #1f9114;
  border-radius: 0.375rem;
  background: transparent;
  color: #1f9114;
  font-family: inherit;
  font-size: 0.8rem;
  cursor: pointer;
  transition: all 0.4s ease;

  &:hover {
    background: #1f9114;
    color: #ffffff;
    text-decoration: none;
    filter: none;
  }
`;
