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
    company: "株式会社テックイノベーション",
    position: "シニアフルスタックエンジニア",
    period: "2022年4月 - 現在",
    location: "東京都渋谷区",
    website: "https://tech-innovation.example.com",
    description:
      "SaaSプロダクトの開発チームリーダーとして、フロントエンドからバックエンドまで幅広く担当。チームメンバー3名のマネジメントも行い、プロダクトの技術的な意思決定を主導。",
    achievements: [
      "新機能開発により月間アクティブユーザー数を30%向上",
      "パフォーマンス最適化によりページ読み込み速度を50%改善",
      "CI/CDパイプラインの構築によりデプロイ時間を80%短縮",
      "チームの開発効率を40%向上させるコードレビュー体制を確立",
      "セキュリティ監査で脆弱性ゼロを達成",
    ],
    technologies: [
      "React",
      "TypeScript",
      "Next.js",
      "Node.js",
      "PostgreSQL",
      "AWS",
      "Docker",
      "Kubernetes",
      "GraphQL",
      "Redis",
    ],
    projects: [
      {
        name: "顧客管理システムリニューアル",
        description:
          "既存のレガシーシステムをモダンなSPAに完全リニューアル。ユーザビリティの大幅改善とパフォーマンス向上を実現。",
        role: "テックリード・フルスタック開発",
        technologies: ["React", "TypeScript", "Node.js", "PostgreSQL", "AWS"],
        achievements: [
          "ページ読み込み速度を70%改善",
          "ユーザー満足度を85%向上",
          "月間処理件数を3倍に拡張",
        ],
        duration: "6ヶ月",
      },
      {
        name: "リアルタイム分析ダッシュボード",
        description:
          "ビジネスメトリクスをリアルタイムで可視化するダッシュボードを新規開発。経営陣の意思決定を支援。",
        role: "フルスタック開発・アーキテクト",
        technologies: ["React", "D3.js", "WebSocket", "Redis", "PostgreSQL"],
        achievements: [
          "データ更新遅延を10秒から1秒に短縮",
          "経営会議での活用率100%達成",
          "データドリブンな意思決定を促進",
        ],
        duration: "4ヶ月",
      },
    ],
    teamSize: 5,
    responsibilities: [
      "チームメンバーのメンタリングと技術指導",
      "アーキテクチャ設計と技術選定",
      "コードレビューとコーディング規約の策定",
      "プロダクトオーナーとの要件定義",
      "パフォーマンス最適化とセキュリティ対策",
      "CI/CDパイプラインの構築・運用",
    ],
    learnings: [
      "大規模システムのアーキテクチャ設計",
      "チームマネジメントとリーダーシップ",
      "ビジネス要件の技術的実現方法",
      "クラウドインフラの運用・監視",
      "アジャイル開発手法の実践",
    ],
    companyInfo: {
      industry: "SaaS・クラウドサービス",
      size: "従業員数 150名",
      founded: "2018年",
      description:
        "企業向けのクラウド型業務効率化ツールを提供するスタートアップ企業。急成長中で、多くの大手企業に導入実績を持つ。",
    },
  },
  {
    id: 2,
    company: "株式会社ウェブソリューションズ",
    position: "フロントエンドエンジニア",
    period: "2020年4月 - 2022年3月",
    location: "東京都新宿区",
    website: "https://web-solutions.example.com",
    description:
      "Eコマースサイトの開発・運用を担当。レスポンシブデザインの実装やユーザビリティ向上のための機能開発を中心に活動。",
    achievements: [
      "モバイル対応により売上を25%向上",
      "検索機能の改善によりコンバージョン率を15%向上",
      "コンポーネントライブラリの構築により開発効率を40%向上",
      "ページ表示速度を60%改善",
      "アクセシビリティ対応でWCAG 2.1 AA準拠を達成",
    ],
    technologies: [
      "React",
      "JavaScript",
      "Sass",
      "Webpack",
      "PHP",
      "MySQL",
      "jQuery",
      "Bootstrap",
    ],
    projects: [
      {
        name: "ECサイトモバイル最適化",
        description:
          "既存のECサイトをモバイルファーストでリニューアル。UXの大幅改善により売上向上に貢献。",
        role: "フロントエンド開発リード",
        technologies: ["React", "Sass", "Webpack", "PHP"],
        achievements: [
          "モバイル売上を25%向上",
          "離脱率を30%削減",
          "ページ表示速度を50%改善",
        ],
        duration: "8ヶ月",
      },
      {
        name: "商品検索システム改善",
        description:
          "ユーザビリティを重視した検索機能の全面リニューアル。フィルタリング機能やサジェスト機能を実装。",
        role: "フロントエンド開発",
        technologies: ["JavaScript", "jQuery", "MySQL", "PHP"],
        achievements: [
          "検索利用率を40%向上",
          "コンバージョン率を15%向上",
          "検索結果表示速度を70%改善",
        ],
        duration: "3ヶ月",
      },
    ],
    teamSize: 8,
    responsibilities: [
      "フロントエンド開発の設計・実装",
      "レスポンシブデザインの実装",
      "パフォーマンス最適化",
      "ブラウザ互換性の確保",
      "UIコンポーネントの設計・開発",
      "デザイナーとの連携・調整",
    ],
    learnings: [
      "モダンなフロントエンド開発手法",
      "ユーザビリティとアクセシビリティ",
      "パフォーマンス最適化技術",
      "チーム開発でのコミュニケーション",
      "ECサイトのビジネス要件理解",
    ],
    companyInfo: {
      industry: "Webサイト制作・システム開発",
      size: "従業員数 80名",
      founded: "2010年",
      description:
        "中小企業向けのWebサイト制作とシステム開発を手がける制作会社。多様な業界のクライアントを持つ。",
    },
  },
  {
    id: 1,
    company: "株式会社デジタルクリエイト",
    position: "ジュニアエンジニア",
    period: "2019年4月 - 2020年3月",
    location: "東京都品川区",
    website: "https://digital-create.example.com",
    description:
      "新卒として入社し、Webアプリケーションの開発に従事。基礎的な技術スキルを身につけながら、小規模なプロジェクトを担当。",
    achievements: [
      "WordPressテーマを5つ新規開発",
      "既存サイトの表示速度を平均30%改善",
      "クライアント満足度調査で95%の高評価を獲得",
      "社内勉強会で月1回の技術発表を実施",
    ],
    technologies: [
      "HTML",
      "CSS",
      "JavaScript",
      "jQuery",
      "PHP",
      "WordPress",
      "MySQL",
      "Git",
    ],
    projects: [
      {
        name: "コーポレートサイト制作",
        description:
          "中小企業向けのコーポレートサイトを複数制作。WordPressをベースとしたCMS構築。",
        role: "フロントエンド開発・WordPress開発",
        technologies: ["HTML", "CSS", "JavaScript", "WordPress", "PHP"],
        achievements: [
          "5社のコーポレートサイトを制作",
          "全案件でクライアント満足度90%以上を達成",
          "保守性の高いテーマ設計を実現",
        ],
        duration: "10ヶ月",
      },
      {
        name: "既存サイトリニューアル",
        description:
          "レガシーなHTMLサイトをWordPressベースにリニューアル。SEO対策とパフォーマンス改善を実施。",
        role: "フロントエンド開発",
        technologies: ["HTML", "CSS", "JavaScript", "WordPress"],
        achievements: [
          "ページ表示速度を30%改善",
          "SEOスコアを40%向上",
          "管理画面の使いやすさを大幅改善",
        ],
        duration: "2ヶ月",
      },
    ],
    teamSize: 12,
    responsibilities: [
      "Webサイトのコーディング",
      "WordPressテーマの開発・カスタマイズ",
      "既存サイトの保守・更新",
      "バグ修正と機能追加",
      "クライアントとの打ち合わせ参加",
      "技術調査とドキュメント作成",
    ],
    learnings: [
      "Web開発の基礎技術",
      "WordPressの仕組みと開発手法",
      "クライアントワークの進め方",
      "チーム開発でのGit運用",
      "Web標準とアクセシビリティ",
    ],
    companyInfo: {
      industry: "Webサイト制作・デジタルマーケティング",
      size: "従業員数 45名",
      founded: "2005年",
      description:
        "地域密着型のWeb制作会社。中小企業のデジタル化支援を中心に、幅広いWebソリューションを提供。",
    },
  },
];

export function getExperienceById(id: number): ExperienceData | undefined {
  return experienceData.find((exp) => exp.id === id);
}
