export const LANGS = ['ja', 'en'] as const;
export type Lang = (typeof LANGS)[number];
export type Localized = Record<Lang, string>;

export const ui = {
  ja: {
    'nav.home': 'ホーム',
    'nav.about': 'プロフィール',
    'nav.writing': '執筆',
    'nav.news': 'ニュース',
    'nav.contact': 'お問い合わせ',
    'lang.switch': 'English',
    'lang.switchLabel': 'Switch to English',
    'home.focus': '専門',
    'home.featured': '書籍',
    'home.news': 'ニュース',
    'home.articles': '主な記事',
    'home.moreNews': 'ニュースをすべて見る',
    'home.moreWriting': '執筆一覧へ',
    'about.title': 'プロフィール',
    'about.career': '経歴',
    'about.skills': 'スキル',
    'about.skillsNote': '各スキルは、実際に使った仕事・書籍・論文・記事と結びつけています。',
    'about.present': '現在',
    'skills.career': '仕事',
    'skills.book': '書籍',
    'skills.paper': '論文',
    'skills.articles': '記事',
    'skills.cat.ai': 'AI',
    'skills.cat.dev': '開発',
    'skills.cat.cloud': 'クラウド・インフラ',
    'skills.cat.data': 'データ',
    'writing.title': '執筆',
    'writing.books': '書籍',
    'writing.papers': '論文',
    'writing.articles': '記事',
    'writing.coAuthor': '共著',
    'writing.japanese': '',
    'writing.articlesNote': '',
    'news.title': 'ニュース',
    'contact.title': 'お問い合わせ',
    'contact.lead': 'お問い合わせは、以下のフォームからお送りください。',
    'contact.button': 'お問い合わせフォームを開く',
    'contact.preparing': 'お問い合わせフォームは準備中です。',
    'contact.external': 'Google フォームが開きます。',
    'links.work': 'アカウント',
    'links.writing': '執筆',
    'links.personal': 'プライベート',
    'footer.contact': 'お問い合わせ',
    'notFound.title': 'ページが見つかりません',
    'notFound.back': 'ホームへ戻る',
  },
  en: {
    'nav.home': 'Home',
    'nav.about': 'About',
    'nav.writing': 'Writing',
    'nav.news': 'News',
    'nav.contact': 'Contact',
    'lang.switch': '日本語',
    'lang.switchLabel': '日本語に切り替え',
    'home.focus': 'Focus',
    'home.featured': 'Book',
    'home.news': 'News',
    'home.articles': 'Selected Articles',
    'home.moreNews': 'All news',
    'home.moreWriting': 'All writing',
    'about.title': 'About',
    'about.career': 'Career',
    'about.skills': 'Skills',
    'about.skillsNote': 'Each skill is linked to the work, book, paper, and articles where I actually used it.',
    'about.present': 'Present',
    'skills.career': 'Work',
    'skills.book': 'Book',
    'skills.paper': 'Paper',
    'skills.articles': 'Articles',
    'skills.cat.ai': 'AI',
    'skills.cat.dev': 'Development',
    'skills.cat.cloud': 'Cloud & Infrastructure',
    'skills.cat.data': 'Data',
    'writing.title': 'Writing',
    'writing.books': 'Books',
    'writing.papers': 'Papers',
    'writing.articles': 'Articles',
    'writing.coAuthor': 'Co-author',
    'writing.japanese': 'In Japanese',
    'writing.articlesNote': 'Articles are written in Japanese. Titles are translated.',
    'news.title': 'News',
    'contact.title': 'Contact',
    'contact.lead': 'Please get in touch using the form below.',
    'contact.button': 'Open the contact form',
    'contact.preparing': 'The contact form is being prepared.',
    'contact.external': 'Opens a Google Form.',
    'links.work': 'Profiles',
    'links.writing': 'Writing',
    'links.personal': 'Personal',
    'footer.contact': 'Contact',
    'notFound.title': 'Page not found',
    'notFound.back': 'Back to home',
  },
} as const;

export type UIKey = keyof (typeof ui)['ja'];

export function t(lang: Lang, key: UIKey): string {
  return ui[lang][key];
}

// [...lang] ルートで ja（プレフィックスなし）と en の2ページを生成する
export function langPaths() {
  return LANGS.map((lang) => ({
    params: { lang: lang === 'ja' ? undefined : lang },
    props: { lang },
  }));
}

export function localePath(lang: Lang, path = '/'): string {
  const clean = path.startsWith('/') ? path : `/${path}`;
  return lang === 'ja' ? clean : `/en${clean === '/' ? '/' : clean}`;
}

export function stripLocale(pathname: string): string {
  return pathname.replace(/^\/en(?=\/|$)/, '') || '/';
}

export function formatDate(date: Date, lang: Lang, precision: 'day' | 'month' | 'year' = 'day'): string {
  const locale = lang === 'ja' ? 'ja-JP' : 'en-US';
  const options: Intl.DateTimeFormatOptions =
    precision === 'year'
      ? { year: 'numeric' }
      : precision === 'month'
        ? { year: 'numeric', month: 'short' }
        : { year: 'numeric', month: 'short', day: 'numeric' };
  return new Intl.DateTimeFormat(locale, { ...options, timeZone: 'Asia/Tokyo' }).format(date);
}
