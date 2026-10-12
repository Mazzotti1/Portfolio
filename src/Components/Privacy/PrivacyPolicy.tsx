import { useState } from 'react';
import { Link } from 'react-router-dom';

import { SectionTab } from '../../styles/SectionTab';
import {
  ContainerPrivacy,
  PrivacyDoc,
  PrivacyMeta,
  AppBlock,
  BackLink,
} from './PrivacyStyle';

import { pt, en, LAST_UPDATED, PolicySection } from './LanguagePrivacy';
import { apps, appsLabel } from './PrivacyApps';

/** Item que comeca com "- " vira bullet; o resto vira paragrafo. */
const renderBody = (body: string[], keyPrefix: string) => {
  const blocks: JSX.Element[] = [];
  let bullets: string[] = [];

  const flush = () => {
    if (bullets.length === 0) return;
    blocks.push(
      <ul key={`${keyPrefix}-ul-${blocks.length}`}>
        {bullets.map((item, i) => (
          <li key={i}>{item.slice(2)}</li>
        ))}
      </ul>,
    );
    bullets = [];
  };

  body.forEach((line, i) => {
    if (line.startsWith('- ')) {
      bullets.push(line);
      return;
    }
    flush();
    blocks.push(<p key={`${keyPrefix}-p-${i}`}>{line}</p>);
  });

  flush();
  return blocks;
};

export const PrivacyPolicy = () => {
  // pagina isolada da home, entao carrega o proprio seletor de idioma
  const [lang, setLang] = useState<'pt' | 'en'>('pt');
  const t = lang === 'pt' ? pt : en;
  const appsT = appsLabel[lang];

  const formattedDate = new Date(`${LAST_UPDATED}T00:00:00`).toLocaleDateString(
    lang === 'pt' ? 'pt-BR' : 'en-US',
    { day: '2-digit', month: 'long', year: 'numeric' },
  );

  return (
    <ContainerPrivacy>
      <PrivacyDoc>
        <div className="flex justify-end gap-2 mb-8">
          <SectionTab $active={lang === 'pt'} onClick={() => setLang('pt')}>
            PT
          </SectionTab>
          <SectionTab $active={lang === 'en'} onClick={() => setLang('en')}>
            EN
          </SectionTab>
        </div>

        <h1>{t.Title}</h1>
        <PrivacyMeta>
          {t.LastUpdatedLabel}: {formattedDate}
        </PrivacyMeta>

        <p className="mt-6">{t.Intro}</p>

        {t.sections.map((section: PolicySection, i: number) => (
          <section key={section.heading}>
            <h2>{section.heading}</h2>
            {renderBody(section.body, `s${i}`)}
          </section>
        ))}

        <section>
          <h2>{appsT.heading}</h2>
          <p>{appsT.intro}</p>
          {apps.map(app => (
            <AppBlock key={app.packageId}>
              <p className="name">{app.name}</p>
              <p className="pkg">
                {appsT.packageLabel}: {app.packageId}
              </p>
              <p className="collects">
                {appsT.collectsLabel}: {app.collects[lang].join(' · ')}
              </p>
            </AppBlock>
          ))}
        </section>

        <div className="mt-12">
          <Link to="/">
            <BackLink as="span">← {t.BackHome}</BackLink>
          </Link>
        </div>
      </PrivacyDoc>
    </ContainerPrivacy>
  );
};

export default PrivacyPolicy;
