import styled from 'styled-components';

export const ContainerReading = styled.div`
  background: ${props => props.theme.colors.gradient};
  transition: background 0.7s ease-in-out;
  opacity: 1;
  padding: 72px 0;
`;

export const SubtitleReading = styled.p`
  color: ${props => props.theme.colors.text};
  transition: color 0.5s ease-in-out;
  opacity: 0.6;
  font-size: clamp(0.82rem, 2.8vw, 1rem);
  text-align: center;
`;

/* Mesma linguagem visual do painel de Experiencia */
export const ReadingCard = styled.article`
  background: ${props =>
    props.theme.title === 'dark' ? 'rgba(0, 0, 0, 0.85)' : 'rgba(255, 255, 255, 0.85)'};
  color: ${props => props.theme.colors.text};
  border: 1px solid ${props => (props.theme.title === 'dark' ? '#27272a' : '#d4d4d8')};
  border-left: 3px solid #1f9114;
  border-radius: 12px;
  padding: 24px;
  display: flex;
  flex-direction: column;
  gap: 12px;
  height: 100%;
  transition: background 0.5s ease-in-out, color 0.5s ease-in-out, transform 0.4s ease,
    box-shadow 0.4s ease;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.35);
  }

  h3 {
    font-size: clamp(0.98rem, 3.4vw, 1.15rem);
    font-weight: 700;
    line-height: 1.35;
  }

  .meta {
    font-size: clamp(0.72rem, 2.6vw, 0.82rem);
    opacity: 0.55;
    line-height: 1.5;
  }

  .note {
    font-size: clamp(0.8rem, 2.9vw, 0.9rem);
    line-height: 1.7;
    opacity: 0.85;
  }
`;

/* Etiqueta de tipo: Livro (verde preenchido) x Artigo (contorno) */
export const KindBadge = styled.span<{ $paper: boolean }>`
  align-self: flex-start;
  display: inline-flex;
  align-items: center;
  border-radius: 999px;
  padding: 3px 10px;
  font-size: 0.68rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  border: 1px solid #1f9114;
  background: ${props => (props.$paper ? 'transparent' : '#1f9114')};
  color: ${props => (props.$paper ? '#1f9114' : '#ffffff')};
`;

/* Capas tem proporcoes diferentes (0.79 e 0.92), entao fixa a largura
   e deixa a altura livre: nenhuma distorce. */
export const ReadingThumb = styled.img`
  width: 84px;
  flex: 0 0 84px;
  height: auto;
  border-radius: 6px;
  object-fit: contain;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.4);

  /* breakpoints aqui dentro pelo mesmo motivo do SectionTab */
  @media (max-width: 820px) {
    width: 68px;
    flex-basis: 68px;
  }

  @media (max-width: 640px) {
    width: 58px;
    flex-basis: 58px;
  }
`;

export const ReadingLink = styled.a`
  align-self: flex-start;
  margin-top: 4px;
  font-size: 0.78rem;
  color: #1f9114;
  border-bottom: 1px solid transparent;
  transition: border-color 0.3s ease;

  &:hover {
    border-bottom-color: #1f9114;
  }
`;

export const EmptyReading = styled.p`
  color: ${props => props.theme.colors.text};
  opacity: 0.5;
  text-align: center;
  font-size: 0.9rem;
`;
