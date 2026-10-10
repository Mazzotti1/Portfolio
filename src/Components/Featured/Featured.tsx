import {
  ContainerFeatured,
  FeaturedLabel,
  FeaturedPanel,
  FeaturedMedia,
  FeaturedShot,
  MetricBox,
  FeaturedLink,
} from './FeaturedStyle';

import { featured } from './FeaturedData';
import { pt, en } from './LanguageFeatured';

interface Props {
  language: string;
}

export const Featured: React.FC<Props> = ({ language }) => {
  const lang = (language === 'pt' ? 'pt' : 'en') as 'pt' | 'en';
  const t = lang === 'pt' ? pt : en;

  // metrica sem numero valido nao entra
  const metrics = featured.metrics.filter(metric => Number.isFinite(metric.value));

  // 1.473 em pt-BR, 1,473 em en-US
  const formatValue = (value: number) => value.toLocaleString(lang === 'pt' ? 'pt-BR' : 'en-US');

  return (
    <ContainerFeatured>
      <div id="featured" className="featuredSection">
        <FeaturedLabel>{t.Label}</FeaturedLabel>
        <h1 className="featuredTittle text-center text-fonteVerde text-5xl mt-2">{t.Tittle}</h1>

        <FeaturedPanel className="featuredPanel m-auto w-4/6 mt-10">
          <div className="featuredLayout flex gap-10 items-center">
            {featured.video && (
              <div className="featuredMediaCol">
                <FeaturedMedia
                  src={featured.video}
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="metadata"
                  aria-label={featured.title}
                />
              </div>
            )}

            <div className="featuredInfo flex-1">
              <h2>{featured.title}</h2>
              <p className="subtitle">{featured.subtitle[lang]}</p>
              <p className="description">{featured.description[lang]}</p>

              {metrics.length > 0 && (
                <div className="featuredMetrics grid grid-cols-2 gap-5 mt-7">
                  {metrics.map(metric => (
                    <MetricBox key={metric.label.en}>
                      <span className="value">{formatValue(metric.value)}{metric.suffix}</span>
                      <span className="label">{metric.label[lang]}</span>
                    </MetricBox>
                  ))}
                </div>
              )}

              <div className="featuredTechs flex flex-wrap items-center gap-4 mt-7">
                {featured.techs.map(tech => (
                  <img key={tech} src={tech} width={28} alt="" aria-hidden="true" />
                ))}
              </div>

              {featured.images.length > 0 && (
                <div className="featuredShots flex flex-wrap gap-3 mt-6">
                  {featured.images.map(shot => (
                    <FeaturedShot key={shot} src={shot} alt={featured.title} loading="lazy" />
                  ))}
                </div>
              )}

              {featured.link && (
                <div className="mt-7">
                  <FeaturedLink href={featured.link} target="_blank" rel="noreferrer">
                    {t.OpenLink} →
                  </FeaturedLink>
                </div>
              )}
            </div>
          </div>
        </FeaturedPanel>
      </div>
    </ContainerFeatured>
  );
};

export default Featured;
