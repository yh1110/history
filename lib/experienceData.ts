export interface ExperienceData {
  id: number;
  isLatest?: boolean;
  company: string;
  position: string;
  period: string;
  location: string;
  website?: string;
  description: string;
  achievements: string[];
  technologies: string[];
  projects: {
    name: string;
    description: string;
    role: string;
    technologies: string[];
    achievements: string[];
    duration: string;
  }[];
  teamSize: number;
  responsibilities: string[];
  learnings: string[];
  companyInfo: {
    industry: string;
    size: string;
    founded: string;
    description: string;
  };
}

export const experienceData: ExperienceData[] = [
  {
    id: 3,
    isLatest: true,
    company: "有限会社海馬",
    position: "Webエンジニア",
    period: "2024年9月 - 現在",
    location: "日本",
    description:
      "旅行会社向けアプリケーションの開発や鉄道会社向け情報伝達システムの研究開発を担当。React や Next.js、Python などを用いた実装に従事。",
    achievements: [
      "React を用いた改修プロジェクトを完遂",
      "Python・AWS Lambda でのイベント処理を実装",
      "Next.js による新規開発を短納期でリリース",
    ],
    technologies: [
      "React",
      "Next.js",
      "express.js",
      "Python",
      "PostgreSQL",
      "AWS",
      "Azure",
      "VBA",
    ],
    projects: [
      {
        name: "旅行会社向け web アプリ改修",
        description: "既存システムの機能追加とテストを担当。",
        role: "設計・実装・テスト",
        technologies: ["React"],
        achievements: [
          "React の実務経験を獲得",
          "テストフローを構築",
        ],
        duration: "数ヶ月",
      },
      {
        name: "鉄道会社向け情報伝達システム研究開発",
        description:
          "Python と AWS Lambda を用いたイベント処理の研究開発を実施。",
        role: "実装・テスト",
        technologies: ["Python", "AWS Lambda"],
        achievements: [
          "形態素解析ロジックを実装",
          "クラウド環境での処理基盤を構築",
        ],
        duration: "数ヶ月",
      },
      {
        name: "旅行会社向け web アプリ新規開発",
        description:
          "Next.js と express.js を利用した旅行予約システムを構築。",
        role: "設計・実装・テスト",
        technologies: ["Next.js", "express.js", "PostgreSQL"],
        achievements: [
          "フロントとバックエンドの設計を担当",
          "厳しい納期の中でリリース",
        ],
        duration: "数ヶ月",
      },
      {
        name: "メーカー販促システム運用保守",
        description: "Azure 上で稼働する販促システムの運用保守を担当。",
        role: "運用・保守",
        technologies: ["Azure", "SQL Server", "VBA", "Bash"],
        achievements: [
          "自動化スクリプトの不具合を修正",
          "脆弱性診断を実施",
        ],
        duration: "継続",
      },
    ],
    teamSize: 4,
    responsibilities: [
      "Web アプリケーションの設計・実装・テスト",
      "Python を用いた研究開発",
      "Azure 環境の運用保守",
      "自動化スクリプトの作成",
    ],
    learnings: [
      "React を用いたチーム開発",
      "Python によるイベント処理",
      "Next.js と express.js の連携",
      "インフラ運用の基礎",
    ],
    companyInfo: {
      industry: "システム開発",
      size: "従業員数 非公開",
      founded: "-",
      description: "Web アプリケーション開発を行う企業。",
    },
  },
  {
    id: 2,
    company: "大新技研",
    position: "エンジニア",
    period: "2023年9月 - 2024年6月",
    location: "日本",
    description:
      "発電所事業所向けの配管管理システム構築を担当。提案資料や操作マニュアルの作成、VBA による作業効率化を実施。",
    achievements: [
      "顧客向け資料を作成",
      "VBA マクロでデータ登録を自動化",
    ],
    technologies: ["VBA", "Excel"],
    projects: [
      {
        name: "配管管理システム構築",
        description: "データ登録や報告書作成を支援するシステムを開発。",
        role: "実装・資料作成",
        technologies: ["VBA", "Excel"],
        achievements: [
          "登録作業を自動化",
          "マニュアル作成で運用を支援",
        ],
        duration: "9ヶ月",
      },
    ],
    teamSize: 3,
    responsibilities: [
      "配管管理システムの実装",
      "提案資料・報告書の作成",
      "データ登録・管理業務",
    ],
    learnings: [
      "業務効率化のためのマクロ開発",
      "顧客向け資料作成スキル",
    ],
    companyInfo: {
      industry: "プラントエンジニアリング",
      size: "従業員数 非公開",
      founded: "-",
      description: "発電所向けのエンジニアリング事業を展開。",
    },
  },
  {
    id: 1,
    company: "スタッフサービス・エンジニアリング",
    position: "エンジニア",
    period: "2023年4月 - 2023年8月",
    location: "日本",
    description:
      "派遣社員として大新技研で配管管理システム構築を支援。",
    achievements: ["VBA を用いたマクロ作成を担当"],
    technologies: ["VBA", "Excel"],
    projects: [
      {
        name: "配管管理システム構築支援",
        description: "派遣先でのシステム構築業務を担当。",
        role: "実装補助",
        technologies: ["VBA", "Excel"],
        achievements: ["作業効率を向上"],
        duration: "5ヶ月",
      },
    ],
    teamSize: 3,
    responsibilities: ["データ登録補助", "報告書作成補助"],
    learnings: ["業務フローの理解", "VBA の基礎"],
    companyInfo: {
      industry: "技術派遣",
      size: "従業員数 非公開",
      founded: "-",
      description: "エンジニアの派遣を行う企業。",
    },
  },
];

export function getExperienceById(id: number): ExperienceData | undefined {
  return experienceData.find((exp) => exp.id === id);
}
