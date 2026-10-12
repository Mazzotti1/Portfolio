/* ============================================================
   CONFERIR APP POR APP.

   Cada bloco tem que bater EXATAMENTE com o formulario "Data safety"
   da ficha do app na Play Store. Divergencia entre os dois e motivo
   de reprovacao na revisao.

   Preenchi com o que da pra inferir da stack de cada projeto. Onde eu
   nao tinha como saber, marquei com TODO. Apaga o que nao se aplica.
   ============================================================ */

export interface AppPolicy {
  name: string;
  packageId: string;
  /** Categorias de dados que ESTE app coleta. Vazio = nao coleta nada. */
  collects: { pt: string[]; en: string[] };
}

export const apps: AppPolicy[] = [
  {
    name: 'Guess The Flag',
    packageId: 'com.guess_the_flag_app',
    collects: {
      pt: ['Dados de cadastro', 'Progresso e pontuação', 'Token de notificação'],
      en: ['Account data', 'Progress and score', 'Notification token'],
    },
  },
  {
    name: 'Hatlas',
    packageId: 'com.hatlas',
    collects: {
      // TODO: Hatlas e mapa de calor. Confirma se a localizacao e enviada
      // ao servidor ou processada so no aparelho -- muda o Data safety.
      pt: ['Dados de cadastro', 'Localização precisa', 'Token de notificação'],
      en: ['Account data', 'Precise location', 'Notification token'],
    },
  },
  {
    name: 'Gameaily',
    packageId: 'com.whatsthegame',
    collects: {
      pt: ['Dados de cadastro', 'Progresso e pontuação', 'Token de notificação'],
      en: ['Account data', 'Progress and score', 'Notification token'],
    },
  },
  {
    name: 'Musclemate',
    packageId: 'com.musclemate',
    collects: {
      // TODO: app de treino. Se registra peso, medidas ou saude, isso pode
      // contar como dado sensivel -- confirma e ajusta o texto principal.
      pt: ['Dados de cadastro', 'Dados de treino inseridos por você', 'Token de notificação'],
      en: ['Account data', 'Workout data you enter', 'Notification token'],
    },
  },
];

export const appsLabel = {
  pt: {
    heading: 'Por aplicativo',
    intro: 'Dados tratados por cada aplicativo coberto por esta política:',
    packageLabel: 'Pacote',
    collectsLabel: 'Coleta',
  },
  en: {
    heading: 'Per application',
    intro: 'Data processed by each application covered by this policy:',
    packageLabel: 'Package',
    collectsLabel: 'Collects',
  },
};
