import { useState } from 'react';
import { ContainerExperience, ExperienceInner, TabButton, DetailContainer } from './ExperienceStyle';
import { experiences } from './ExperienceData';

interface Props {
  language: string;
}

const labels = {
  pt: 'Minhas experiências:',
  en: 'My experience:',
};

export const Experience: React.FC<Props> = ({ language }) => {
  const [activeTab, setActiveTab] = useState(0);
  const lang = (language === 'pt' ? 'pt' : 'en') as 'pt' | 'en';
  const active = experiences[activeTab];

  return (
    <ContainerExperience>
      <div className="experienceWrapper w-4/6 m-auto">
        <ExperienceInner>
        <h1 className="text-fonteVerde text-4xl mb-12 font-bold">{labels[lang]}</h1>

        <div className="experienceLayout flex gap-12">
          <div className="experienceTabs flex flex-col" style={{ minWidth: '220px' }}>
            {experiences.map((exp, i) => (
              <TabButton
                key={exp.company}
                $active={i === activeTab}
                onClick={() => setActiveTab(i)}
              >
                {exp.company}
              </TabButton>
            ))}
          </div>

          <DetailContainer className="flex-1">
            <h3>
              {active.role[lang]} <span className="text-fonteVerde">@ {active.company}</span>
            </h3>
            <p className="date">{active.date[lang]}</p>
            <ul>
              {active.bullets[lang].map((bullet, i) => (
                <li key={i}>{bullet}</li>
              ))}
            </ul>
          </DetailContainer>
        </div>
        </ExperienceInner>
      </div>
    </ContainerExperience>
  );
};
