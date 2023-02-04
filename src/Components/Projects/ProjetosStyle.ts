import styled from 'styled-components';

export const ContainerProjetos = styled.div`

background: ${props => props.theme.colors.gradient};
transition: background 0.7s ease-in-out;
opacity: 1;
`;

export const BorderProjetos = styled.div`
  border:  1px solid ${props => props.theme.colors.secundary};
  transition: background 0.5s ease-in-out, color 0.5s ease-in-out;
  opacity: 1;

  &:hover {
    background: ${props => props.theme.colors.secundary};
   color:${props => props.theme.colors.primary};

  }
`

