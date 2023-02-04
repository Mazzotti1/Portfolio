import styled from 'styled-components';

export const ContainerContact = styled.div`

background: ${props => props.theme.colors.gradient};
color:${props => props.theme.colors.text};
transition: background 2s ease-in-out;
opacity: 1;


`;

export const BorderContact = styled.div`
  border:  1px solid ${props => props.theme.colors.secundary};
  transition: background 0.5s ease-in-out, color 0.5s ease-in-out;
  opacity: 1;

  &:hover {
    background: ${props => props.theme.colors.secundary};
   color:${props => props.theme.colors.primary};

  }
`

