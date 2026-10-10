import styled from 'styled-components';

export const ContainerFeatured = styled.div`
  background: ${props => props.theme.colors.gradient};
  transition: background 0.7s ease-in-out;
  padding: 72px 0 24px;
`;

/* Etiqueta pequena acima do titulo: diz que este e o projeto mais recente */
export const FeaturedLabel = styled.p`
  color: #1f9114;
  font-size: 0.72rem;
  letter-spacing: 0.26em;
  text-transform: uppercase;
  text-align: center;
`;

export const FeaturedPanel = styled.div`
  background: ${props =>
    props.theme.title === 'dark' ? 'rgba(0, 0, 0, 0.85)' : 'rgba(255, 255, 255, 0.85)'};
  color: ${props => props.theme.colors.text};
  border: 1px solid ${props => (props.theme.title === 'dark' ? '#27272a' : '#d4d4d8')};
  border-radius: 14px;
  padding: 32px;
  transition: background 0.5s ease-in-out, color 0.5s ease-in-out;

  h2 {
    font-size: clamp(1.4rem, 5vw, 2rem);
    font-weight: 700;
    line-height: 1.2;
  }

  .subtitle {
    font-size: clamp(0.72rem, 2.6vw, 0.84rem);
    opacity: 0.5;
    margin-top: 6px;
  }

  .description {
    font-size: clamp(0.85rem, 3vw, 0.98rem);
    line-height: 1.75;
    opacity: 0.85;
    margin-top: 18px;
  }

  @media (max-width: 820px) {
    padding: 22px 16px;
  }
`;

/* O video e retrato (384x832). Largura fixa e altura livre, com teto,
   pra ele nao esticar o painel inteiro. */
export const FeaturedMedia = styled.video`
  width: 100%;
  max-width: 260px;
  max-height: 460px;
  height: auto;
  border-radius: 10px;
  display: block;
  margin: 0 auto;
  box-shadow: 0 6px 24px rgba(0, 0, 0, 0.45);

  @media (max-width: 820px) {
    max-width: 210px;
    max-height: 380px;
  }
`;

export const FeaturedShot = styled.img`
  width: 100%;
  max-width: 120px;
  height: auto;
  border-radius: 8px;
  object-fit: cover;
`;

/* Bloco de metrica: numero grande, rotulo pequeno embaixo */
export const MetricBox = styled.div`
  border-left: 2px solid #1f9114;
  padding-left: 12px;

  .value {
    display: block;
    font-size: clamp(1.25rem, 5vw, 1.7rem);
    font-weight: 700;
    color: #1f9114;
    line-height: 1.1;
  }

  .label {
    display: block;
    font-size: clamp(0.66rem, 2.5vw, 0.76rem);
    opacity: 0.6;
    margin-top: 4px;
    line-height: 1.3;
  }
`;

export const FeaturedLink = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 10px 22px;
  border: 1px solid #1f9114;
  border-radius: 0.375rem;
  color: #1f9114;
  font-size: 0.84rem;
  transition: all 0.4s ease;

  &:hover {
    background: #1f9114;
    color: #ffffff;
    text-decoration: none;
    filter: none;
  }
`;
