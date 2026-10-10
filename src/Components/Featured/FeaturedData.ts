import sapiensVideo from '../../assets/sapiens.mp4';

import nextjs from '../../assets/nextjs.png';
import react from '../../assets/react-original.png';
import node from '../../assets/nodejs-original.png';
import nginx from '../../assets/nginx.png';
import postgres from '../../assets/postgres.png';
import redis from '../../assets/redis.png';
import docker from '../../assets/docker.png';
import firebase from '../../assets/firebase.png';

export interface Metric {
  /** Numero cru. A formatacao (1.473 em pt, 1,473 em en) e feita no componente. */
  value: number;
  /** Sufixo opcional colado no numero. Ex: "+", "%". */
  suffix?: string;
  label: { pt: string; en: string };
}

export interface FeaturedProject {
  title: string;
  subtitle: { pt: string; en: string };
  description: { pt: string; en: string };
  video?: string;
  /** Screenshots. Vazio por enquanto -- a galeria so renderiza se tiver item. */
  images: string[];
  metrics: Metric[];
  techs: string[];
  link?: string;
}

export const featured: FeaturedProject = {
  title: 'App Sapiens',
  subtitle: {
    pt: 'Universidade La Salle · 2026',
    en: 'Universidade La Salle · 2026',
  },
  description: {
    pt: 'Plataforma de gamificação construída para o evento Sapiens. Rankings por aluno e por curso, raspadinhas resgatáveis por código, registro de presença nas atividades e mapa 3D do campus.',
    en: 'Gamification platform built for the Sapiens event. Student and course leaderboards, code-redeemable scratch cards, activity check-in and a 3D campus map.',
  },
  video: sapiensVideo,
  images: [],
  metrics: [
    { value: 11500, suffix: '+', label: { pt: 'matriculados', en: 'enrolled' } },
    { value: 3700, suffix: '+', label: { pt: 'participantes ativos', en: 'active attendees' } },
    { value: 920881, label: { pt: 'pontos distribuídos', en: 'points awarded' } },
    { value: 124788, label: { pt: 'notificações push enviadas', en: 'push notifications sent' } },
    { value: 21327, label: { pt: 'scans de QR code pelo campus', en: 'QR code scans across campus' } },
    { value: 1516, label: { pt: 'missões diárias concluídas', en: 'daily missions completed' } },
    { value: 1473, label: { pt: 'raspadinhas resgatadas', en: 'scratch cards redeemed' } },
    { value: 1223, label: { pt: 'mistérios desvendados', en: 'mysteries solved' } },
    { value: 36, label: { pt: 'tickets de suporte abertos', en: 'support tickets opened' } },
    {
      value: 1,
      label: {
        pt: 'máquina (8 vCPU · 16 GB) rodando toda a stack, sem gargalo',
        en: 'machine (8 vCPU · 16 GB) running the whole stack, no bottleneck',
      },
    },
  ],
  techs: [nextjs, react, node, nginx, postgres, redis, docker, firebase],
  link: 'http://appsapiens.unilasalle.edu.br/',
};
