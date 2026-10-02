import { getCollection, type CollectionEntry } from 'astro:content';

const byDateDesc = (a: { data: { date: Date } }, b: { data: { date: Date } }) =>
  b.data.date.getTime() - a.data.date.getTime();

export async function getNews() {
  return (await getCollection('news')).sort(byDateDesc);
}

export async function getArticles() {
  return (await getCollection('articles')).sort(byDateDesc);
}

export async function getPublications(type?: 'book' | 'paper') {
  const all = (await getCollection('publications')).sort(byDateDesc);
  return type ? all.filter((p) => p.data.type === type) : all;
}

export async function getCareer() {
  const all = await getCollection('career');
  // 仕事 → 学歴の順、それぞれ新しい順
  return all.sort((a, b) => {
    if (a.data.type !== b.data.type) return a.data.type === 'work' ? -1 : 1;
    return b.data.start - a.data.start;
  });
}

export type SkillEvidence = {
  skill: CollectionEntry<'skills'>;
  work: { org: CollectionEntry<'career'>; title: CollectionEntry<'career'>['data']['items'][number]['title'] }[];
  publications: CollectionEntry<'publications'>[];
  articles: CollectionEntry<'articles'>[];
};

// 各スキルについて、そのスキルを使った仕事・書籍・論文・記事を逆引きする
export async function getSkillEvidence(): Promise<SkillEvidence[]> {
  const [skills, career, publications, articles] = await Promise.all([
    getCollection('skills'),
    getCareer(),
    getPublications(),
    getArticles(),
  ]);

  const rows = skills.map((skill) => ({
    skill,
    work: career.flatMap((org) =>
      org.data.items
        .filter((item) => item.skills.some((s) => s.id === skill.id))
        .map((item) => ({ org, title: item.title })),
    ),
    publications: publications.filter((p) => p.data.skills.some((s) => s.id === skill.id)),
    articles: articles.filter((a) => a.data.skills.some((s) => s.id === skill.id)),
  }));

  // 根拠（仕事・書籍・論文・記事）の多い順
  const weight = (r: SkillEvidence) => r.work.length + r.publications.length + r.articles.length;
  return rows.sort((a, b) => weight(b) - weight(a) || a.skill.data.label.en.localeCompare(b.skill.data.label.en));
}
