import ddia from '../../assets/readings/design_data_intensive_app.png';
import paralela from '../../assets/readings/programacao_paralela_distribuida.png';

export type ReadingKind = 'book' | 'paper';

export interface Reading {
  kind: ReadingKind;
  title: string;
  /** Vazio e aceito: a linha de metadados pula os campos em branco. */
  author: string;
  /** Editora (livro) ou veiculo/conferencia/universidade (artigo) */
  source: string;
  year: string;
  /** Capa. Opcional: sem thumb o card fica so com texto. */
  thumb?: string;
  /** DOI, arXiv, pagina da editora. Opcional: sem link o card nao mostra botao. */
  link?: string;
  /** O que TU tirou da leitura. Escreve em primeira pessoa. */
  note: { pt: string; en: string };
  tags: { pt: string[]; en: string[] };
}

/* ============================================================
   As `note` abaixo sao DESCRICAO NEUTRA da obra, nao a tua opiniao.
   Reescreve em primeira pessoa dizendo o que TU tirou de cada uma --
   e isso que diferencia a secao de uma lista de titulos qualquer.

   Dois campos precisam de conferencia tua, estao marcados com TODO.
   ============================================================ */
export const readings: Reading[] = [
  {
    kind: 'book',
    title: 'Designing Data-Intensive Applications',
    author: 'Martin Kleppmann',
    source: "O'Reilly Media",
    year: '2017',
    thumb: ddia,
    note: {
      pt: 'Trata dos trade-offs entre replicação, particionamento e consistência em sistemas distribuídos, e de como escolher o modelo de dados a partir do padrão de acesso.',
      en: 'Covers the trade-offs between replication, partitioning and consistency in distributed systems, and how to pick a data model from the access pattern.',
    },
    tags: {
      pt: ['Sistemas Distribuídos', 'Bancos de Dados', 'Arquitetura'],
      en: ['Distributed Systems', 'Databases', 'Architecture'],
    },
  },
  {
    kind: 'book',
    title: 'Programação Paralela e Distribuída',
    // TODO: preencher autor, editora e ano -- nao achei a edicao exata
    author: '',
    source: '',
    year: '',
    thumb: paralela,
    note: {
      pt: 'Modelos de paralelismo, troca de mensagens e coordenação entre processos, base para raciocinar sobre concorrência e processamento assíncrono.',
      en: 'Parallelism models, message passing and process coordination — the groundwork for reasoning about concurrency and asynchronous processing.',
    },
    tags: {
      pt: ['Computação Paralela', 'Concorrência', 'Sistemas Distribuídos'],
      en: ['Parallel Computing', 'Concurrency', 'Distributed Systems'],
    },
  },
  {
    kind: 'paper',
    title: 'Testing IoT Security: The Case Study of an IP Camera',
    author: 'Peshraw Ahmed Abdalla, Cihan Varol',
    source: 'ISDFS (8th Int. Symposium on Digital Forensics and Security), IEEE',
    year: '2020',
    link: 'https://doi.org/10.1109/ISDFS49300.2020.9116392',
    note: {
      pt: 'Estudo de caso de teste de segurança em uma câmera IP, mapeando a superfície de ataque do dispositivo e as falhas encontradas no firmware e na comunicação.',
      en: 'A security testing case study on an IP camera, mapping the device attack surface and the flaws found in its firmware and communication.',
    },
    tags: {
      pt: ['Segurança IoT', 'Câmeras IP', 'Pentest'],
      en: ['IoT Security', 'IP Cameras', 'Pentesting'],
    },
  },
  {
    kind: 'paper',
    title: 'Cybersecurity and Forensic Analysis of IP-Cameras Used in Saudi Arabia',
    author: 'Istabraq M. Alsenaifi, Lujain A. Alharbi, Sandaresan Ramachandran, Kyounggon Kim',
    source: 'Journal of Information Security and Cybercrimes Research (JISCR), Riyadh',
    year: '2024',
    link: 'https://journals.nauss.edu.sa/index.php/JISCR/article/view/2929',
    note: {
      pt: 'Análise forense e de segurança de câmeras IP comerciais, incluindo extração de artefatos e avaliação das proteções de fábrica dos dispositivos.',
      en: 'Forensic and security analysis of commercial IP cameras, including artifact extraction and assessment of the devices default protections.',
    },
    tags: {
      pt: ['Segurança IoT', 'Forense Digital', 'Câmeras IP'],
      en: ['IoT Security', 'Digital Forensics', 'IP Cameras'],
    },
  },
  {
    kind: 'paper',
    title: 'Demonstration of Cyber Security Through Penetration Testing on IP Camera',
    author: 'Muhammad Ahmar Hassan',
    source: 'Teesside University, Middlesbrough — dissertação (orient. Jie Li)',
    year: '2023',
    link: 'https://www.researchgate.net/publication/368608725_Demonstration_of_cyber_security_through_Penetration_testing_on_IP_camera',
    note: {
      pt: 'Conduz um pentest completo em câmera IP, do reconhecimento à exploração, demonstrando na prática o impacto de credenciais padrão e serviços expostos.',
      en: 'Runs a full penetration test on an IP camera, from reconnaissance to exploitation, demonstrating in practice the impact of default credentials and exposed services.',
    },
    tags: {
      pt: ['Pentest', 'Câmeras IP', 'Segurança IoT'],
      en: ['Pentesting', 'IP Cameras', 'IoT Security'],
    },
  },
  {
    kind: 'paper',
    title: 'Software Architecture: The Next Step',
    // TODO: confirmar a autoria no link da Springer antes de publicar
    author: 'Jan Bosch',
    source: 'EWSA (European Workshop on Software Architecture), Springer LNCS',
    year: '2004',
    link: 'https://link.springer.com/chapter/10.1007/978-3-540-24769-2_14',
    note: {
      pt: 'Argumenta que arquitetura precisa deixar de ser documento estático e passar a ser tratada como decisão explícita e rastreável ao longo da vida do sistema.',
      en: 'Argues that architecture must stop being a static document and instead be treated as an explicit, traceable decision throughout the system lifetime.',
    },
    tags: {
      pt: ['Arquitetura', 'Engenharia de Software'],
      en: ['Architecture', 'Software Engineering'],
    },
  },
  {
    kind: 'paper',
    title: 'Software Architecture and Software Design',
    author: 'Manishaben Jaiswal',
    source: 'IRJET, v. 6, n. 11, p. 2452-2454 — University of the Cumberlands',
    year: '2019',
    link: 'https://www.irjet.net/archives/V6/i11/IRJET-V6I11303.pdf',
    note: {
      pt: 'Separa arquitetura (design estratégico, requisitos globais) de design funcional (design tático, requisitos locais) e discute a relação entre os dois níveis.',
      en: 'Separates architecture (strategic design, global requirements) from functional design (tactical design, local requirements) and discusses how the two levels relate.',
    },
    tags: {
      pt: ['Arquitetura', 'Design de Software', 'Padrões'],
      en: ['Architecture', 'Software Design', 'Patterns'],
    },
  },
];
