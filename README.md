# 🌿 園芸会社 コーポレートWebサイト

> **研修生主導によるフルスタック開発プロジェクト**  
> Next.js + Supabase + Resend を使用したモダンな企業サイト

[![Next.js](https://img.shields.io/badge/Next.js-14.0-black?logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?logo=typescript)](https://www.typescriptlang.org/)
[![Supabase](https://img.shields.io/badge/Supabase-2.0-green?logo=supabase)](https://supabase.com/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.0-38B2AC?logo=tailwind-css)](https://tailwindcss.com/)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-11.0-pink?logo=framer)](https://www.framer.com/motion/)

## 📋 プロジェクト概要

このプロジェクトは、SES企業として未経験エンジニアの育成に特化した会社のコーポレートWebサイトです。研修生が主導となってフロントエンド〜バックエンドまでの実務経験を積みながら、企業の魅力を伝える魅力的なサイトを構築しています。

### 🎯 プロジェクトの目的

- **実務経験の提供**: 研修で身につけた技術を実際のプロジェクトで活用
- **企業ブランディング**: 会社の魅力と技術力を効果的にアピール
- **採用強化**: 研修内容や働く環境を透明性高く発信
- **問い合わせ増加**: 信頼性の高いWebサイトによる営業効果向上

### 🌟 特徴

- **🎨 リッチなアニメーション**: サボテンから花が咲くオープニング、ジャングルテーマのスクロールアニメーション
- **📱 完全レスポンシブ**: モバイルファーストなデザイン
- **⚡ 高速表示**: Next.js SSG/SSRによる最適化
- **🔒 セキュア**: Supabase RLSによるデータ保護
- **📝 簡単更新**: 自社開発の簡易CMS機能

## 🏗️ 技術スタック

### フロントエンド
- **Next.js 14**: React フレームワーク（App Router）
- **TypeScript**: 型安全な開発
- **Tailwind CSS**: ユーティリティファーストCSS
- **Framer Motion**: 高度なアニメーション

### バックエンド・インフラ
- **Supabase**: バックエンドサービス（Database + Auth + Storage）
- **Resend**: メール送信サービス
- **Vercel**: ホスティング・デプロイ

### 開発ツール
- **ESLint & Prettier**: コード品質管理
- **Husky**: Gitフック
- **GitHub Actions**: CI/CD
- **GitHub Projects**: プロジェクト管理

## 🚀 開発環境のセットアップ

### 前提条件
- Node.js 18.0以上
- npm または yarn
- Git

### 1. リポジトリのクローン
```bash
git clone https://github.com/1ssei112266/engei-company-website.git
cd engei-company-website
```

### 2. 依存関係のインストール
```bash
npm install
# または
yarn install
```

### 3. 環境変数の設定

**セキュリティのため、実際のAPIキーはSlackやセキュアな方法で共有します。**

| 環境変数 | 説明 | 取得先 |
|---------|------|--------|
| `NEXT_PUBLIC_SUPABASE_URL` | SupabaseプロジェクトURL | [Supabase Dashboard](https://supabase.com/dashboard) > Settings > API |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY` | Supabase公開鍵 | [Supabase Dashboard](https://supabase.com/dashboard) > Settings > API |
| `SUPABASE_SERVICE_ROLE_KEY` | Supabaseサービスロール鍵 ⚠️ | [Supabase Dashboard](https://supabase.com/dashboard) > Settings > API |
| `RESEND_API_KEY` | Resend APIキー ⚠️ | [Resend Dashboard](https://resend.com/api-keys) |
| `RESEND_FROM_EMAIL` | 送信元メールアドレス | 設定したドメインのメールアドレス |
| `NEXT_PUBLIC_SITE_URL` | サイトURL | 開発時: `http://localhost:3000` |

> ⚠️ **セキュリティ注意**: `SERVICE_ROLE_KEY` と `API_KEY` は機密情報です。Gitにコミットせず、チーム内でセキュアに共有してください。

**設定例（`.env.local`）：**
```env
# 開発環境用設定例
NEXT_PUBLIC_SUPABASE_URL=https://xxxxx.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
SUPABASE_SERVICE_ROLE_KEY=[チーム内で共有される実際のキー]
RESEND_API_KEY=[チーム内で共有される実際のキー]
RESEND_FROM_EMAIL=noreply@your-domain.com
NEXT_PUBLIC_SITE_URL=http://localhost:3000

# サイト設定
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

### 4. Supabaseのセットアップ
```bash
# Supabaseテーブル作成
npm run db:migrate

# 初期データの投入
npm run db:seed
```

### 5. 開発サーバーの起動
```bash
npm run dev
```

http://localhost:3000 でサイトを確認できます。

## 📁 プロジェクト構成

```
engei-company-website/
├── src/
│   ├── app/                    # Next.js App Router
│   │   ├── (pages)/           # ページルート
│   │   ├── api/               # API エンドポイント
│   │   └── globals.css        # グローバルスタイル
│   ├── components/            # 再利用可能コンポーネント
│   │   ├── atoms/             # 最小単位コンポーネント
│   │   ├── molecules/         # 中間コンポーネント
│   │   ├── organisms/         # 複合コンポーネント
│   │   └── templates/         # ページテンプレート
│   ├── lib/                   # ユーティリティ関数
│   │   ├── supabase.ts        # Supabase設定
│   │   ├── resend.ts          # メール送信設定
│   │   └── utils.ts           # 汎用関数
│   ├── hooks/                 # カスタムフック
│   ├── types/                 # TypeScript型定義
│   └── styles/                # スタイル関連
├── public/                    # 静的ファイル
│   ├── images/               # 画像ファイル
│   ├── icons/                # アイコン
│   └── animations/           # アニメーション素材
├── docs/                     # ドキュメント
├── supabase/                 # Supabaseスキーマ
└── .github/                  # GitHub設定
    ├── workflows/            # GitHub Actions
    └── ISSUE_TEMPLATE/       # Issueテンプレート
```

## 🎨 主要機能

### 🏠 トップページ
- **オープニングアニメーション**: サボテン → 花 → ロゴの美しい変形アニメーション
- **ヒーローセクション**: 会社の魅力を伝えるメインビジュアル
- **サービス概要**: SES事業と研修事業の紹介
- **実績紹介**: 成功事例とチーム紹介

### 💼 サービス紹介
- **SESの仕組み**: 分かりやすい図解とアニメーション
- **強み・特徴**: 技術力と教育力のアピール
- **対応技術**: 習得可能な技術スタックの紹介

### 👥 採用情報
- **研修プログラム**: 未経験からプロへの成長ロードマップ
- **働く環境**: オフィス紹介とメンバーの声
- **応募フォーム**: Resend連携の問い合わせ機能

### 📝 ブログ・お知らせ
- **記事管理**: Markdownエディタ付きCMS
- **カテゴリ機能**: 技術記事、会社ニュース、採用情報
- **検索・フィルター**: 記事の検索とタグ絞り込み

### 📞 お問い合わせ
- **フォーム機能**: バリデーション付きお問い合わせフォーム
- **自動返信**: Resendによる即座な確認メール
- **管理者通知**: Slack連携による即座の通知

## 🎬 アニメーション詳細

### オープニングアニメーション
```typescript
// サボテンから花が咲くアニメーション例
const OpeningAnimation = () => {
  return (
    <motion.div
      initial={{ scale: 0.1, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 2, ease: "easeOut" }}
    >
      <CactusToFlowerAnimation />
    </motion.div>
  )
}
```

### スクロールアニメーション
- **ジャングルテーマ**: 蔦が上から生えてくるアニメーション
- **キャラクター**: 歩く猫などの可愛い演出
- **パララックス**: スクロール速度に応じた階層的な動き

## 🔧 開発コマンド

```bash
# 開発サーバー起動
npm run dev

# プロダクションビルド
npm run build

# プロダクションサーバー起動
npm run start

# リンター実行
npm run lint

# フォーマッター実行
npm run format

# テスト実行
npm run test

# Supabaseマイグレーション
npm run db:migrate

# 初期データ投入
npm run db:seed
```

## 🚀 デプロイ

### Vercelでのデプロイ
1. Vercelアカウントを作成
2. GitHubリポジトリを連携
3. 環境変数を設定
4. 自動デプロイを有効化

### 環境変数（本番）
```env
NEXT_PUBLIC_SUPABASE_URL=your_production_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_production_supabase_anon_key
SUPABASE_SERVICE_ROLE_KEY=your_production_service_role_key
RESEND_API_KEY=your_production_resend_api_key
RESEND_FROM_EMAIL=noreply@your-domain.com
NEXT_PUBLIC_SITE_URL=https://your-domain.com
```

## 🔄 開発フロー

### 1. Issue作成
- GitHub Projects でタスク管理
- 適切なラベルとアサインを設定
- 完了条件を明確に記載

### 2. ブランチ作成
```bash
git checkout -b feature/issue-{番号}-{機能名}
```

### 3. 開発・テスト
- コンポーネント単位での開発
- レスポンシブ対応の確認
- アニメーションの動作確認

### 4. プルリクエスト
- わかりやすいタイトルと説明
- スクリーンショット・動画の添付
- レビュアーのアサイン

### 5. レビュー・マージ
- コードレビューの実施
- 動作確認
- mainブランチへのマージ

## 👥 チーム体制

### 開発メンバー
- **鈴木**: フロントエンド・アニメーション担当
- **宮原**: フロントエンド・バックエンド担当

### レビュー体制
- 相互レビューによる品質管理
- 講師陣によるメンタリング
- 週2回の進捗共有

## 📈 成果指標

### 技術的成果
- **完了機能数**: 全14機能の実装完了
- **テストカバレッジ**: 80%以上を目標
- **Lighthouse スコア**: Performance 90以上

### ビジネス成果
- **問い合わせ件数**: 月5件以上を目標
- **採用応募数**: 増加率の測定
- **サイト滞在時間**: 平均3分以上

## 🐛 課題・改善点

### 現在の課題
- [ ] アニメーションのパフォーマンス最適化
- [ ] SEO対策の強化
- [ ] A/Bテスト環境の構築

### 今後の改善予定
- [ ] PWA対応
- [ ] 多言語対応
- [ ] ダークモード対応

## 📚 学習リソース

### 技術ドキュメント
- [Next.js 公式ドキュメント](https://nextjs.org/docs)
- [Supabase 公式ドキュメント](https://supabase.com/docs)
- [Framer Motion 公式ドキュメント](https://www.framer.com/motion/)
- [Tailwind CSS 公式ドキュメント](https://tailwindcss.com/docs)

### 社内リソース
- [開発ガイドライン](./docs/DEVELOPMENT_GUIDE.md)
- [デザインシステム](./docs/DESIGN_SYSTEM.md)
- [API仕様書](./docs/API_REFERENCE.md)

## 🤝 貢献方法

### 新機能の追加
1. Issueを作成して議論
2. 設計書の作成
3. プロトタイプの作成
4. 実装・テスト
5. プルリクエスト

### バグ報告
1. Issue作成時にバグ報告テンプレートを使用
2. 再現手順の詳細記載
3. スクリーンショット添付

## 📄 ライセンス

このプロジェクトは [MIT License](LICENSE) の下で公開されています。

## 📞 お問い合わせ

プロジェクトに関するご質問は以下までお願いします：

- **Slack**: #engei-website-dev
- **Email**: dev@engei-company.com
- **GitHub Issues**: バグ報告・機能要望

---

**🌱 このプロジェクトは研修生の成長と会社の発展を両立させる、実践的な学習プロジェクトです。**
