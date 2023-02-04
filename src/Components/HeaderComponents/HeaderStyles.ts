import styled from 'styled-components';

export const ContainerHeader = styled.div`

background:"0b0c0b";

`;

export const TextHeader = styled.div`
color:${props => props.theme.colors.text};

`
export const HeaderButtonPlus = styled.div`

color:${props => props.theme.colors.text};

`;

export const HoverHeader = styled.div`

transition: background 0.5s ease-in-out, color 0.5s ease-in-out;
opacity: 1;

&:hover {
  background: ${props => props.theme.colors.primary};
 color:${props => props.theme.colors.primary};

}
`
export const SubContainerHeader = styled.div`

background:${props => props.theme.colors.secundary};


`;