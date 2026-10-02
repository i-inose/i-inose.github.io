export const SITE = {
  url: 'https://i-inose.github.io',
  name: { ja: '伊野瀬 出', en: 'Izuru Inose' },
  role: 'Software Engineer',
  // Google フォームの URL をここに貼る（空のままだと Contact ページは「準備中」表示になる）
  contactFormUrl: '',
};

export type LinkGroup = 'work' | 'writing' | 'personal';

export const LINKS: { label: string; url: string; group: LinkGroup }[] = [
  { label: 'GitHub', url: 'https://github.com/i-inose', group: 'work' },
  { label: 'LinkedIn', url: 'https://www.linkedin.com/in/izuru-inose-93831a246/', group: 'work' },
  { label: 'X', url: 'https://x.com/i_inose0304', group: 'work' },
  { label: 'Qiita', url: 'https://qiita.com/i-inose', group: 'writing' },
  { label: 'note', url: 'https://note.com/izux0304', group: 'writing' },
  { label: 'Facebook', url: 'https://www.facebook.com/i.inose0304/', group: 'personal' },
  { label: 'Instagram', url: 'https://www.instagram.com/izuru.mma/', group: 'personal' },
];
