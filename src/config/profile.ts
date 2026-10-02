import type { Localized } from '../i18n/ui';

export const PROFILE: {
  focus: Localized[];
  lead: Localized;
  about: Localized[];
  description: Localized;
} = {
  focus: [
    { ja: '生成AI', en: 'Generative AI' },
    { ja: 'AIエージェント', en: 'AI Agents' },
    { ja: 'データ分析', en: 'Data Analysis' },
  ],
  lead: {
    ja: '生成AI・AIエージェント・データ分析を専門とするソフトウェアエンジニア。業務はすべて AI 駆動開発で進めています。',
    en: 'A software engineer specializing in generative AI, AI agents, and data analysis. I carry out all of my work through AI-driven development.',
  },
  about: [
    {
      ja: 'KDDIアジャイル開発センター株式会社のソフトウェアエンジニアです。生成AI・AIエージェント・データ分析を専門としています。業務はすべて、Claude Code を中心とした AI 駆動開発で進めています。',
      en: 'I am a software engineer at KDDI Agile Development Center Corporation, specializing in generative AI, AI agents, and data analysis. I carry out all of my work through AI-driven development, centered on Claude Code.',
    },
    {
      ja: 'これまでに、生成AIで業務資料をレビューする AI エージェントサービスのフロントエンドとインフラを担当してきました。共著書に『MastraによるAIエージェント開発・運用［実践入門］』（技術評論社）があり、Qiita では生成AI・AIエージェント・AI駆動開発についての記事を書いています。',
      en: 'I have worked on the frontend and infrastructure of an AI agent service that reviews business documents with generative AI. I co-authored a Japanese book on AI agent development with Mastra (Gijutsu-Hyoron), and I write articles on generative AI, AI agents, and AI-driven development on Qiita.',
    },
    {
      ja: '武蔵野大学データサイエンス学部では、武藤佳恭教授のもとで COVID-19 に関するデータ分析の研究に取り組みました。在学中に、論文が学術誌 Health and Technology に掲載されています。',
      en: 'At the Faculty of Data Science, Musashino University, I conducted data analysis research on COVID-19 under Prof. Yoshiyasu Takefuji. During my studies, a paper of mine was published in the journal Health and Technology.',
    },
  ],
  description: {
    ja: '伊野瀬 出（Izuru Inose）の公式サイト。生成AI・AIエージェント・データ分析を専門とするソフトウェアエンジニア。',
    en: 'Official website of Izuru Inose, a software engineer specializing in generative AI, AI agents, and data analysis.',
  },
};
