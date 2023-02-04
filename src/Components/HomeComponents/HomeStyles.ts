import styled from 'styled-components';

export const Container = styled.div`

background: ${props => props.theme.colors.gradient};
transition: background 0.7s ease-in-out;
opacity: 1;
color:${props => props.theme.colors.text};
transition: color 0.5s ease-in-out;


`;

export const BorderHome = styled.div`
  border:  1px solid ${props => props.theme.colors.secundary};
  transition: background 0.5s ease-in-out, color 0.5s ease-in-out;
  opacity: 1;

  &:hover {
    background: ${props => props.theme.colors.secundary};
   color:${props => props.theme.colors.primary};

  }
`
export const TextHome = styled.div`
color:${props => props.theme.colors.text};
transition: color 0.5s ease-in-out;
opacity: 1;

&:hover {
  color: ${props => props.theme.colors.secundary};

}
`

