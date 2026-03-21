export interface Experience {
  company: string;
  role: { pt: string; en: string };
  date: { pt: string; en: string };
  bullets: { pt: string[]; en: string[] };
}

export const experiences: Experience[] = [
  {
    company: 'DBC - Grupo Lebes',
    role: { pt: 'Software Engineer', en: 'Software Engineer' },
    date: { pt: 'SEP 2025 - --', en: 'MAR 2024 - --' },
    bullets: {
     pt: [
        'Atuei como desenvolvedor full-stack na DBC Company, alocado em projetos para a Lojas Lebes por meio de parceria de outsourcing, desenvolvendo aplicações mobile com React Native e web com ReactJS, integradas a serviços back-end em Java e Spring Boot.',
        'Criei e mantive APIs RESTful, realizando integrações com sistemas internos da Lebes, além de participar no desenho da arquitetura de sistemas, garantindo escalabilidade, qualidade de código e boas práticas de segurança.',
        'Otimizei queries e serviços de back-end para busca de produtos em catálogos de alto volume, reduzindo significativamente a latência e melhorando a experiência do usuário final.',
        'Refatorei o portal de pagamentos, aprimorando a confiabilidade e a performance do fluxo de transações para clientes e parceiros.',
        'Desenvolvi serviços de workers para processamento assíncrono de tarefas e criei gateways SQL para centralizar e otimizar o acesso a dados entre diferentes serviços.',
        'Construí sistemas de backoffice para gerenciamento de campanhas e notificações, além de controle geral do sistema, fornecendo às equipes internas ferramentas eficientes para operações e monitoramento.',
      ],
      en: [
        'Worked as a full-stack developer at DBC Company, allocated to projects for Lojas Lebes through an outsourcing partnership, developing mobile applications with React Native and web applications with ReactJS, integrated with back-end services in Java and Spring Boot.',
        'Built and maintained RESTful APIs, integrating with Lebes internal systems, while participating in system architecture design, ensuring scalability, code quality, and security best practices.',
        'Optimized queries and back-end services for product search across high-volume catalogs, significantly reducing latency and improving the end-user experience.',
        'Refactored the payment portal, enhancing the reliability and performance of the transaction flow for customers and partners.',
        'Developed worker services for asynchronous task processing and created SQL gateways to centralize and optimize data access across different services.',
        'Built backoffice systems for campaign and notification management, as well as overall system control, providing internal teams with efficient tools for operations and monitoring.',
      ],
    },
  },
  {
    company: 'Diário Escola',
    role: { pt: 'Desenvolvedor Fullstack', en: 'Fullstack Developer' },
    date: { pt: 'NOV 2023 - SET 2025', en: 'NOV 2023 - SEP 2025' },
    bullets: {
      pt: [
        'Como desenvolvedor full-stack, utilizei habilidades avançadas em Java, PHP e JavaScript para criar soluções escaláveis e de alta qualidade. Possuo ampla experiência em tecnologias front-end e back-end, garantindo sistemas robustos, eficientes e seguros.',
        'Liderei um projeto de reconhecimento facial, utilizando tecnologia de ponta para aprimorar a segurança dos usuários e melhorar a experiência geral. Este projeto incorporou aprendizado de máquina e autenticação biométrica para oferecer uma solução integrada e segura.',
        'Contribuí no desenvolvimento de um sistema de pagamento digital, otimizando e simplificando processos de pagamento. Esta solução aprimorou a conveniência dos usuários, tornando as transações mais rápidas e seguras tanto para clientes quanto para empresas.',
        'Com foco em cibersegurança, atuei ativamente na proteção de dados sensíveis e sistemas. Implementando boas práticas e medidas avançadas de segurança, contribuí para a criação de plataformas seguras e resilientes contra potenciais ameaças.',
        'Desenvolvi uma integração com câmeras de segurança escolares para os pais, permitindo o monitoramento remoto de seus filhos. Esta solução reforçou a segurança e proporcionou tranquilidade aos pais, garantindo a proteção do ambiente escolar.',
      ],
      en: [
        'As a full-stack developer, I leverage advanced skills in Java, PHP, and JavaScript to create high-quality, scalable solutions. I have extensive experience in both front-end and back-end technologies, ensuring robust, efficient, and secure systems.',
        'I lead a facial recognition project, utilizing cutting-edge technology to enhance user security and improve the overall user experience. This project incorporates machine learning and biometric authentication to provide a seamless and secure solution.',
        'I contribute to the development of a digital payment system, optimizing and streamlining payment processes. This solution enhances user convenience, making transactions faster and more secure for both customers and businesses.',
        'With a focus on cybersecurity, I actively work to ensure the protection of sensitive data and systems. By implementing best practices and advanced security measures, I contribute to creating secure and resilient platforms that safeguard against potential threats.',
        'I developed a integration to school security cameras for the parents, allowing them to monitor their children remotely. This solution enhances safety and provides peace of mind for parents while ensuring the security of the school environment.',
      ],
    },
  },
  {
    company: 'Freelance',
    role: { pt: 'Desenvolvedor Developer', en: 'Fullstack Developer' },
    date: { pt: 'DEZ 2022 - NOV 2023', en: 'DEC 2022 - NOV 2023' },
    bullets: {
      pt: [
        'Como profissional independente, sou especializado no desenvolvimento e manutenção de aplicativos móveis, utilizando tecnologias híbridas e nativas para criar apps de alta performance e fáceis de usar.',
        'Ofereço serviços abrangentes de cibersegurança para aplicativos móveis, protegendo dados de usuários e garantindo a segurança de informações sensíveis.',
        'Com experiência em programas de bug bounty, identifico e corrijo vulnerabilidades em aplicativos móveis, ajudando clientes a proteger seus apps de forma proativa.',
      ],
      en: [
        'As an independent professional, I specialize in the development and maintenance of mobile applications, utilizing both hybrid and native technologies to create high-performance, user-friendly apps.',
        'I provide comprehensive cybersecurity services for mobile applications, safeguarding user data and ensuring the protection of sensitive information.',
        'With experience in bug bounty programs, I identify and address vulnerabilities in mobile applications, helping clients proactively secure their apps.',
      ],
    },
  },
];
