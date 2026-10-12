export interface PolicySection {
  heading: string;
  /** Cada item vira um paragrafo. Itens que comecam com "- " viram bullet. */
  body: string[];
}

export const CONTACT_EMAIL = 'gmazzottidesouza@gmail.com';
export const LAST_UPDATED = '2026-10-10';

/* ============================================================
   REVISAR ANTES DE PUBLICAR.

   Isto e um modelo, nao aconselhamento juridico. Dois pontos que
   o Google verifica e que SO TU pode confirmar:

   1. O que cada app realmente coleta tem que bater com o formulario
      "Data safety" da ficha na Play Store. Divergencia reprova.
   2. Se um app tem login, o Google exige um caminho de exclusao de
      conta e dados. O texto abaixo aponta pro e-mail -- se tu tiver
      um fluxo dentro do app, descreve ele aqui.

   A secao "Por aplicativo" esta preenchida com o que da pra inferir
   da stack (Firebase Auth, FCM, PostgreSQL). Confere item por item.
   ============================================================ */

export const pt = {
  Title: 'Política de Privacidade',
  Intro:
    'Esta política descreve como os aplicativos desenvolvidos e publicados por Gabriel Mazzotti de Souza tratam dados pessoais.',
  LastUpdatedLabel: 'Última atualização',
  BackHome: 'Voltar ao início',
  LangLabel: 'Idioma',

  sections: [
    {
      heading: 'Quem é o responsável',
      body: [
        `O controlador dos dados é Gabriel Mazzotti de Souza, desenvolvedor independente, contactável em ${CONTACT_EMAIL}.`,
        'Esta política se aplica aos aplicativos listados na seção "Por aplicativo". Aplicativos desenvolvidos sob contrato para terceiros, em que a instituição contratante é a controladora dos dados, não são cobertos por este documento e possuem política própria.',
      ],
    },
    {
      heading: 'Dados que coletamos',
      body: [
        'A coleta varia por aplicativo. De modo geral, podem ser tratados:',
        '- Dados de cadastro: nome, e-mail e foto de perfil, quando você cria uma conta ou entra com um provedor externo.',
        '- Identificadores técnicos: identificador de instalação e token de notificação, usados para entregar mensagens push e distinguir dispositivos.',
        '- Dados de uso: ações dentro do aplicativo, como progresso, pontuação e preferências, necessários para o funcionamento das suas funcionalidades.',
        '- Dados de diagnóstico: registros de erro e falha, usados para corrigir problemas.',
        '- Localização: apenas em aplicativos cuja funcionalidade depende disso, sempre mediante permissão explícita do sistema operacional, revogável a qualquer momento nas configurações do aparelho.',
        'Não coletamos dados sensíveis conforme definidos no art. 5º, II da LGPD, não vendemos dados pessoais e não os compartilhamos com corretores de dados ou anunciantes.',
      ],
    },
    {
      heading: 'Por que tratamos esses dados',
      body: [
        '- Para fornecer as funcionalidades do aplicativo, o que caracteriza execução de contrato.',
        '- Para enviar notificações relacionadas ao serviço, com base no seu consentimento, que pode ser retirado desativando as notificações.',
        '- Para manter a segurança e corrigir defeitos, com base no legítimo interesse de operar um serviço estável.',
      ],
    },
    {
      heading: 'Serviços de terceiros',
      body: [
        'Os aplicativos utilizam serviços que podem tratar dados em nossa conta e sob nossas instruções:',
        '- Google Firebase (Authentication, Cloud Messaging e Crashlytics quando aplicável), operado por Google LLC.',
        '- Google Play Services, exigido para distribuição e funcionamento em Android.',
        'Esses provedores podem armazenar dados fora do Brasil. A transferência internacional ocorre com base nas garantias contratuais oferecidas pelos próprios provedores.',
      ],
    },
    {
      heading: 'Por quanto tempo guardamos',
      body: [
        'Dados de conta são mantidos enquanto a conta existir. Após o pedido de exclusão, são removidos em até 30 dias, exceto registros que a lei obrigue a conservar por prazo maior.',
        'Registros de diagnóstico são descartados em até 90 dias.',
      ],
    },
    {
      heading: 'Exclusão de conta e de dados',
      body: [
        `Para apagar sua conta e os dados associados, envie um pedido para ${CONTACT_EMAIL} a partir do e-mail cadastrado no aplicativo, informando o nome do aplicativo.`,
        'A solicitação é confirmada e executada em até 30 dias. A exclusão da conta remove os dados de cadastro, progresso e preferências. Dados já anonimizados, que não permitem identificar você, podem ser mantidos para fins estatísticos.',
      ],
    },
    {
      heading: 'Seus direitos',
      body: [
        'A Lei Geral de Proteção de Dados (Lei nº 13.709/2018) garante a você o direito de confirmar a existência de tratamento, acessar seus dados, corrigir dados incompletos ou desatualizados, solicitar anonimização ou eliminação, obter portabilidade, revogar consentimento e se opor a tratamentos feitos com base em legítimo interesse.',
        `Para exercer qualquer um desses direitos, escreva para ${CONTACT_EMAIL}. Respondemos em até 15 dias.`,
        'Você também pode apresentar reclamação à Autoridade Nacional de Proteção de Dados (ANPD).',
      ],
    },
    {
      heading: 'Crianças e adolescentes',
      body: [
        'Os aplicativos não são direcionados a menores de 13 anos e não coletamos conscientemente dados dessa faixa etária. Se tomarmos conhecimento de que uma conta pertence a uma criança sem o consentimento de um responsável, ela será removida.',
      ],
    },
    {
      heading: 'Segurança',
      body: [
        'O tráfego entre aplicativo e servidor é cifrado com TLS. O acesso aos bancos de dados é restrito e autenticado. Nenhum sistema é totalmente imune, mas aplicamos as medidas técnicas e administrativas adequadas ao risco.',
      ],
    },
    {
      heading: 'Mudanças nesta política',
      body: [
        'Alterações relevantes serão publicadas nesta página, com atualização da data no topo. Mudanças que ampliem o tratamento de dados serão comunicadas dentro do aplicativo antes de entrarem em vigor.',
      ],
    },
    {
      heading: 'Contato',
      body: [
        `Dúvidas sobre esta política ou sobre o tratamento dos seus dados: ${CONTACT_EMAIL}.`,
      ],
    },
  ] as PolicySection[],
};

export const en = {
  Title: 'Privacy Policy',
  Intro:
    'This policy describes how the applications developed and published by Gabriel Mazzotti de Souza handle personal data.',
  LastUpdatedLabel: 'Last updated',
  BackHome: 'Back to home',
  LangLabel: 'Language',

  sections: [
    {
      heading: 'Who is responsible',
      body: [
        `The data controller is Gabriel Mazzotti de Souza, an independent developer, reachable at ${CONTACT_EMAIL}.`,
        'This policy covers the applications listed under "Per application". Apps developed under contract for third parties, where the contracting institution is the data controller, are not covered here and have their own policy.',
      ],
    },
    {
      heading: 'Data we collect',
      body: [
        'Collection varies per application. In general, the following may be processed:',
        '- Account data: name, email and profile picture, when you create an account or sign in with an external provider.',
        '- Technical identifiers: installation identifier and notification token, used to deliver push messages and distinguish devices.',
        '- Usage data: in-app actions such as progress, score and preferences, required for the features to work.',
        '- Diagnostic data: error and crash logs, used to fix problems.',
        '- Location: only in applications whose functionality depends on it, always subject to explicit operating system permission, revocable at any time in device settings.',
        'We do not collect sensitive data as defined by Brazilian LGPD art. 5, II, we do not sell personal data, and we do not share it with data brokers or advertisers.',
      ],
    },
    {
      heading: 'Why we process it',
      body: [
        '- To provide the application features, which constitutes performance of a contract.',
        '- To send service-related notifications, based on your consent, which can be withdrawn by disabling notifications.',
        '- To maintain security and fix defects, based on the legitimate interest in operating a stable service.',
      ],
    },
    {
      heading: 'Third-party services',
      body: [
        'The applications use services that may process data on our account and under our instructions:',
        '- Google Firebase (Authentication, Cloud Messaging and Crashlytics where applicable), operated by Google LLC.',
        '- Google Play Services, required for distribution and operation on Android.',
        'These providers may store data outside Brazil. International transfers rely on the contractual safeguards offered by the providers themselves.',
      ],
    },
    {
      heading: 'How long we keep it',
      body: [
        'Account data is kept while the account exists. After a deletion request, it is removed within 30 days, except records the law requires us to keep longer.',
        'Diagnostic logs are discarded within 90 days.',
      ],
    },
    {
      heading: 'Account and data deletion',
      body: [
        `To delete your account and associated data, send a request to ${CONTACT_EMAIL} from the email registered in the application, stating the application name.`,
        'The request is confirmed and carried out within 30 days. Deleting the account removes account data, progress and preferences. Already anonymised data, which cannot identify you, may be retained for statistical purposes.',
      ],
    },
    {
      heading: 'Your rights',
      body: [
        'The Brazilian General Data Protection Law (Law 13.709/2018) grants you the right to confirm whether processing exists, access your data, correct incomplete or outdated data, request anonymisation or deletion, obtain portability, withdraw consent and object to processing based on legitimate interest.',
        `To exercise any of these rights, write to ${CONTACT_EMAIL}. We respond within 15 days.`,
        'You may also lodge a complaint with the Brazilian data protection authority (ANPD).',
      ],
    },
    {
      heading: 'Children',
      body: [
        'The applications are not directed at children under 13 and we do not knowingly collect data from that age group. If we learn that an account belongs to a child without a guardian consent, it will be removed.',
      ],
    },
    {
      heading: 'Security',
      body: [
        'Traffic between application and server is encrypted with TLS. Database access is restricted and authenticated. No system is fully immune, but we apply technical and administrative measures appropriate to the risk.',
      ],
    },
    {
      heading: 'Changes to this policy',
      body: [
        'Material changes will be published on this page, with the date at the top updated. Changes that expand data processing will be announced inside the application before taking effect.',
      ],
    },
    {
      heading: 'Contact',
      body: [`Questions about this policy or about how your data is handled: ${CONTACT_EMAIL}.`],
    },
  ] as PolicySection[],
};
