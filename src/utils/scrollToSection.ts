import { scroller } from 'react-scroll';

export type SectionId =
  | 'home'
  | 'About'
  | 'projects'
  | 'knowledges'
  | 'reading'
  | 'contact';

/**
 * Rola ate a secao pelo id do elemento.
 * Antes o projeto usava offsets fixos (948 * n), que so batiam na altura
 * de desktop e erravam o alvo em qualquer viewport mobile.
 */
export function scrollToSection(section: SectionId) {
  scroller.scrollTo(section, {
    duration: 700,
    smooth: 'easeInOutQuart',
  });
}
