import styled from 'styled-components';

export const ContainerKnowledge = styled.div`

background: ${props => props.theme.colors.gradient};
transition: background 0.7s ease-in-out;
opacity: 1;
`;

export const SubContainerKnowledge = styled.div`
background: ${props => props.theme.colors.primary};
transition: background 0.7s ease-in-out;
opacity: 1;
`

export const Text = styled.div`
color:${props => props.theme.colors.secundary};

`