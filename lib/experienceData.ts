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
    overview: string; // プロジェクトの概要
    developmentHistory: string; // 開発経緯
    developmentIssue?: string; // 開発課題
    compatibleContentList: string[]; // 対応内容のリスト
    compatibleContent: string[]; // 対応内容の詳細
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
    id: 4,
    isLatest: true,
    company: "株式会社 TreyLink",
    position: "テックリード",
    period: "2025年5月 - 現在",
    location: "日本",
    description:
      "不動産業界のDX化を目的としたhomelogプロジェクトにテックリードとして参画。React(ionic)とDjangoを用いたマルチプラットフォームアプリを開発。",
    achievements: [
      "homelogの設計・実装をリード",
      "CI/CDパイプラインを整備",
      "チームメンバーへの技術支援",
    ],
    technologies: ["React", "ionic", "Django", "Python"],
    projects: [
      {
        name: "homelog",
        description: "不動産業界向けマルチプラットフォームアプリの開発。",
        role: "テックリード・実装",
        technologies: ["React", "ionic", "Django", "Python"],
        overview:
          "プライベートでのチーム開発\nBtoBtoC向けのマルチプラットフォームアプリの開発\n設計、開発、単体テスト、結合テスト、システムテストを担当\nReact(Ionic Framework), Django Rest Flameworkにて新規開発\nメンバー数4名",
        developmentHistory:
          "プライベートにてチーム開発のお誘いがあり、2025年5月よりTreyLink株式会社のメンバーとして参画しました。\n不動産業界のDX化を推進することを目的とし、住宅の管理・活用をより簡便かつ効率的に行える「ホムログ」というアプリケーションの開発に取り組んでいます。ユーザーが住宅の修繕・掃除等の履歴を登録し、それらの情報をもとに住宅資産価値の向上や適切な管理を実現することを目指しています。\nプロジェクトは4名体制のチームで進行し、テックリードとして活動しています。",
        compatibleContentList: [
          "開発基盤整理",
          "テックリードとしての活動",
          "営業スケジュールとの兼ね合い",
          "Figma、Notion導入",
          "codeXの導入",
          "今後の展望",
        ],
        compatibleContent: [
          "gitのルール(git-flow等のブランチルールやコミットメッセージ等)やスタイルガイドを作成、共有を行うことでチーム開発としての開発基盤を固めました。\nまた、prettierの導入や別プロジェクトで導入されていたファイルベースパスルーティングの実装を行うことで、プロジェクト間での開発基盤を整えています。\nその他、APIのリクエスト、レスポンスのフォーマットや、エラー時のフォーマットが整備されていなかったため、フロントエンド、バックエンドともに整備し、ドキュメントの更新を行っています。\n今後の開発環境の整備として、開発環境のDBをコンテナとして分離、CI/CDの整備を中心に行っていく予定です。",
          "週1回のミーティングの他、メンバー間のコミュニケーションや認識のすり合わせ、PR確認、レビューや開発tips共有のミーティングを不定期で行っています。\n特にレビューに関しては動作的な面だけでなく、リーダブルなコードや後々のバグ回避や技術的負債を払拭することを念頭にレビューしています。\n他メンバーが行き詰ってる箇所や不明点に対してペアプロの形で解消することや、タスク管理に関して、営業側のスケジュール等の全体の進捗を見ながら優先度の見直し、振り分けを行っています。\nメンバーの進捗に遅れが出ている際は、私の方で優先度を判断しながら作業の巻き取りを行うことで、メンバーの心理的負担を下げるよう努めています。",
          "マイルストーンを営業側と毎週確認し、都度ガントチャートの見直しを行っています。\nテスト営業のために表示画面(アプリ画面をもとに機能の説明等)が必要なため、機能部分の開発を後ろへ回し、UIから先に着手するスケジュールの見直しを行いました。",
          "UI設計書が存在していなかった(ノーコードアプリでのUI画面を参考に開発している)ため、チームでの認識のすり合わせや、デザイン変更等を円滑に行うためにFigmaの導入、移行を進めています。\nFigmaではビジュアルベースでコミュニケーションが取れるかつ、変更記録やログの扱いやすさ、情報の一元管理といった点から、今後見通しを予測して初期段階より導入しています。\nまた、Notionを導入し、チームwikiとして各種ルールのドキュメントや設計書、環境構築資料の一元管理を行うことでメンバー増員に向けての整備をしています。\nNotionに関しても、現在はreadmeやdocsにて情報が分散しているため、チーム開発のナレッジを貯め、他プロジェクトや今後の活動の拡大を見越した考えのもと移行を進めています。",
          "現在はまだ本格的な実用化には至っていませんが、各ブランチにてcodeXを採用した機能追加や修正を行っています。\n実際にバニラcssをcss modulesへ修正する際や、UIのひな型を作成する際に使用しています。",
          "β版としてアプリをリリース後、実際にユーザーに使用して得られたフィードバックをもとにUIUXの改善\n競合他社のアプリと比較した際の、自分たちの強みを全面的に押し出したアプリ機能の改善や改修\nAIを活用したコード生成からビルドまでの自動化整備\nマルチプラットフォームからネイティブへの移行",
        ],
        duration: "継続",
      },
    ],
    teamSize: 10,
    responsibilities: [
      "アプリケーションの設計・実装",
      "技術選定とレビュー",
      "チームメンバー育成",
    ],
    learnings: ["マルチプラットフォーム開発の知見", "チームマネジメント"],
    companyInfo: {
      industry: "不動産DX",
      size: "10名程度",
      founded: "-",
      description: "不動産業界のデジタル化を推進するスタートアップ。",
    },
  },
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
        overview: "旅行会社向けの既存 web アプリケーションの改修。",
        developmentHistory: "React を用いた改修プロジェクトに参加。",
        developmentIssue: "既存コードの理解とテストフローの構築が課題。",
        compatibleContentList: [
          "React を用いたフロントエンドの改修",
          "テスト自動化の実装",
        ],
        compatibleContent: ["React を用いたフロントエンドの改修"],
        duration: "数ヶ月",
      },
      {
        name: "鉄道会社向け情報伝達システム研究開発",
        description:
          "Python と AWS Lambda を用いたイベント処理の研究開発を実施。",
        role: "実装・テスト",
        technologies: ["Python", "AWS Lambda"],
        overview: "鉄道会社向けの情報伝達システムの研究開発。",
        developmentHistory: "Python を用いたイベント処理の実装を担当。",
        developmentIssue: "形態素解析の精度向上と処理速度の最適化が課題。",
        compatibleContentList: [
          "Python を用いた形態素解析の実装",
          "イベント処理の自動化",
        ],
        compatibleContent: ["形態素解析とイベント処理の実装"],
        duration: "数ヶ月",
      },
      {
        name: "旅行会社向け web アプリ新規開発",
        description: "Next.js と express.js を利用した旅行予約システムを構築。",
        role: "設計・実装・テスト",
        technologies: ["Next.js", "express.js", "PostgreSQL"],
        overview: "旅行会社向けの新規 web アプリケーション開発。",
        developmentHistory:
          "Next.js と express.js を用いた新規開発プロジェクト。",
        developmentIssue: "短納期でのリリースが求められた。",
        compatibleContentList: [
          "Next.js を用いたフロントエンド開発",
          "express.js を用いたバックエンド開発",
          "PostgreSQL を用いたデータベース設計",
        ],
        compatibleContent: [
          "Next.js と express.js を用いたフロントエンド・バックエンドの統合開発",
        ],
        duration: "数ヶ月",
      },
      {
        name: "メーカー販促システム運用保守",
        description: "Azure 上で稼働する販促システムの運用保守を担当。",
        role: "運用・保守",
        technologies: ["Azure", "SQL Server", "VBA", "Bash"],
        overview: "メーカー向けの販促システムの運用保守業務。",
        developmentHistory: "Azure 環境での運用保守を担当。",
        developmentIssue: "自動化スクリプトの不具合修正と脆弱性診断の実施。",
        compatibleContentList: [
          "Azure 環境の運用保守",
          "SQL Server のデータ管理",
          "VBA と Bash を用いた自動化スクリプトの作成",
        ],
        compatibleContent: ["Azure 環境の運用保守と自動化スクリプトの管理"],
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
    achievements: ["顧客向け資料を作成", "VBA マクロでデータ登録を自動化"],
    technologies: ["VBA", "Excel"],
    projects: [
      {
        name: "配管管理システム構築",
        description: "データ登録や報告書作成を支援するシステムを開発。",
        role: "実装・資料作成",
        technologies: ["VBA", "Excel"],
        overview: "発電所向けの配管管理システムの構築。",
        developmentHistory: "発電所事業所向けの配管管理システムを構築。",
        developmentIssue: "データ登録の手間を削減するためのマクロ開発。",
        compatibleContentList: [
          "VBA を用いたデータ登録の自動化",
          "報告書作成の効率化",
        ],
        compatibleContent: ["VBA を用いたデータ登録の自動化"],
        duration: "9ヶ月",
      },
    ],
    teamSize: 3,
    responsibilities: [
      "配管管理システムの実装",
      "提案資料・報告書の作成",
      "データ登録・管理業務",
    ],
    learnings: ["業務効率化のためのマクロ開発", "顧客向け資料作成スキル"],
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
    description: "派遣社員として大新技研で配管管理システム構築を支援。",
    achievements: ["VBA を用いたマクロ作成を担当"],
    technologies: ["VBA", "Excel"],
    projects: [
      {
        name: "配管管理システム構築支援",
        description: "派遣先でのシステム構築業務を担当。",
        role: "実装補助",
        technologies: ["VBA", "Excel"],
        overview: "発電所向けの配管管理システムの構築支援。",
        developmentHistory: "大新技研での配管管理システム構築を支援。",
        developmentIssue: "データ登録の効率化と報告書作成の自動化。",
        compatibleContentList: [
          "VBA を用いたデータ登録の自動化",
          "報告書作成の効率化",
        ],
        compatibleContent: ["VBA を用いたデータ登録の自動化"],
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
