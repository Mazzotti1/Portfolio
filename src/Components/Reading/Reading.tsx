import { useMemo, useState } from 'react';

import { SectionTab } from '../../styles/SectionTab';
import { ShowMoreButton } from '../../styles/ShowMoreButton';
import { Chip } from '../../styles/Chip';
import {
  ContainerReading,
  SubtitleReading,
  ReadingCard,
  KindBadge,
  ReadingLink,
  ReadingThumb,
  EmptyReading,
} from './ReadingStyle';

import { readings, ReadingKind } from './ReadingData';
import { pt, en } from './LanguageReading';

interface Props {
  language: string;
}

type Filter = 'all' | ReadingKind;

/** Quantos cards aparecem antes de clicar em "mostrar mais" */
const INITIAL_COUNT = 4;

export const Reading: React.FC<Props> = ({ language }) => {
  const lang = (language === 'pt' ? 'pt' : 'en') as 'pt' | 'en';
  const t = lang === 'pt' ? pt : en;

  const [filter, setFilter] = useState<Filter>('all');
  const [expanded, setExpanded] = useState(false);

  const filters: { label: string; value: Filter }[] = [
    { label: t.FilterAll, value: 'all' },
    { label: t.FilterBooks, value: 'book' },
    { label: t.FilterPapers, value: 'paper' },
  ];

  const visible = useMemo(
    () => (filter === 'all' ? readings : readings.filter(item => item.kind === filter)),
    [filter],
  );

  const shown = expanded ? visible : visible.slice(0, INITIAL_COUNT);
  const hasMore = visible.length > INITIAL_COUNT;

  const changeFilter = (value: Filter) => {
    setFilter(value);
    setExpanded(false);
  };

  return (
    <ContainerReading>
      <div id="reading" className="readingSection">
        <h1 className="readingTittle text-center text-fonteVerde text-5xl">{t.Tittle}</h1>
        <SubtitleReading className="mt-3">{t.Subtitle}</SubtitleReading>

        <div className="readingFilters flex flex-wrap justify-center gap-4 mt-10">
          {filters.map(item => (
            <SectionTab
              key={item.value}
              $active={filter === item.value}
              onClick={() => changeFilter(item.value)}
              className="readingTab"
            >
              {item.label}
            </SectionTab>
          ))}
        </div>

        {shown.length === 0 ? (
          <EmptyReading className="mt-12">—</EmptyReading>
        ) : (
          <div className="readingGrid m-auto w-4/6 mt-12 grid gap-8 grid-cols-2">
            {shown.map(item => (
              <ReadingCard key={`${item.title}-${item.year}`}>
                <KindBadge $paper={item.kind === 'paper'}>
                  {item.kind === 'paper' ? t.KindPaper : t.KindBook}
                </KindBadge>

                <div className="readingHead flex gap-4 items-start">
                  {item.thumb && (
                    <ReadingThumb src={item.thumb} alt={item.title} loading="lazy" />
                  )}

                  <div className="flex flex-col gap-2">
                    <h3>{item.title}</h3>

                    {/* campos vazios sao descartados pra nao sobrar " · · " */}
                    <p className="meta">
                      {[item.author, item.source, item.year].filter(Boolean).join(' · ')}
                    </p>
                  </div>
                </div>

                <p className="note">{item.note[lang]}</p>

                <div className="readingTags flex flex-wrap gap-2">
                  {item.tags[lang].map(tag => (
                    <Chip key={tag}>{tag}</Chip>
                  ))}
                </div>

                {item.link && (
                  <ReadingLink href={item.link} target="_blank" rel="noreferrer">
                    {t.OpenLink} →
                  </ReadingLink>
                )}
              </ReadingCard>
            ))}
          </div>
        )}

        {hasMore && (
          <div className="flex justify-center mt-10">
            <ShowMoreButton onClick={() => setExpanded(!expanded)}>
              {expanded ? t.ShowLess : t.ShowMore}
            </ShowMoreButton>
          </div>
        )}
      </div>
    </ContainerReading>
  );
};

export default Reading;
