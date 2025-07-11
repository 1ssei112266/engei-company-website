"use client";

import { ReactNode } from "react";
import Header from "../organisms/Header";
import Card from "../molecules/Card";
import Button from "../atoms/Button";

interface HomeTemplateProps {
  children?: ReactNode;
}

// ホームページのテンプレート
// 画像の構成を参考にしたレイアウトを実装
export default function HomeTemplate({ children }: HomeTemplateProps) {
  return (
    <div className="min-h-screen bg-base-100">
      <Header />

      <main className="container mx-auto px-4 py-8">
        {/* メインビジュアル部分 */}
        <section className="hero bg-base-200 rounded-lg mb-8">
          <div className="hero-content text-center">
            <div className="max-w-md">
              <h1 className="text-5xl font-bold text-primary mb-4">企業ロゴ</h1>
              <div className="text-xl text-secondary mb-6">
                アニメーション→企業ロゴ
              </div>
              <Button variant="primary" size="lg">
                詳しくはこちら
              </Button>
            </div>
          </div>
        </section>

        {/* WHO WE ARE セクション */}
        <section className="mb-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div>
              <h2 className="text-3xl font-bold text-primary mb-4">
                WHO WE ARE
              </h2>
              <p className="text-lg text-neutral-600 mb-6">企業理念</p>

              <div className="bg-base-200 p-6 rounded-lg mb-6">
                <h3 className="text-xl font-semibold text-primary mb-4">
                  画像
                </h3>
                <div className="aspect-video bg-neutral-300 rounded-lg flex items-center justify-center">
                  <span className="text-neutral-600">イメージ画像</span>
                </div>
              </div>

              <Card
                title="キャッチコピー"
                buttonText="ENGEIについて→"
                onButtonClick={() => console.log("詳細ページに遷移")}
              />
            </div>

            <div className="bg-base-200 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-primary mb-4">
                詳しい内容に遷移
              </h3>
              <p className="text-neutral-600">
                企業についての詳細情報がここに表示されます。
              </p>
            </div>
          </div>
        </section>

        {/* Recruit セクション */}
        <section className="mb-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div>
              <h2 className="text-3xl font-bold text-primary mb-4">Recruit</h2>
              <p className="text-lg text-neutral-600 mb-6">採用情報</p>

              <Card title="キャッチコピー" className="mb-6" />

              <div className="bg-base-200 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-primary mb-4">
                  イラスト
                </h3>
                <div className="aspect-video bg-neutral-300 rounded-lg flex items-center justify-center">
                  <span className="text-neutral-600">採用イラスト</span>
                </div>
                <div className="mt-4 text-center">
                  <Button variant="primary">View more</Button>
                </div>
              </div>
            </div>

            <div className="bg-base-200 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-primary mb-4">
                TOPページ
              </h3>
              <p className="text-neutral-600">
                採用情報の詳細やエントリーフォームへのリンクがここに配置されます。
              </p>
            </div>
          </div>
        </section>

        {/* BLOG セクション */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-primary mb-6">BLOG</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            <Card
              title="Wantedly"
              description="最新の投稿内容がここに表示されます"
            />
            <Card
              title="Wantedly"
              description="最新の投稿内容がここに表示されます"
            />
            <Card
              title="Wantedly"
              description="最新の投稿内容がここに表示されます"
            />
          </div>

          <div className="text-center">
            <Button variant="primary" size="lg">
              BLOG 一覧
            </Button>
          </div>
        </section>

        {/* COMPANY セクション */}
        <section className="mb-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div>
              <h2 className="text-3xl font-bold text-primary mb-4">COMPANY</h2>
              <p className="text-lg text-neutral-600 mb-6">会社情報</p>

              <Card title="キャッチコピー" className="mb-6" />

              <div className="space-y-4">
                <Button
                  variant="secondary"
                  size="lg"
                  onClick={() => console.log("プライバシーポリシー")}
                >
                  プライバシーポリシー
                </Button>
                <Button
                  variant="secondary"
                  size="lg"
                  onClick={() => console.log("お問い合わせ")}
                >
                  お問い合わせはこちら
                </Button>
              </div>
            </div>

            {/* <div className="bg-base-200 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-primary mb-4">イラスト</h3>
              <div className="aspect-video bg-neutral-300 rounded-lg flex items-center justify-center mb-4">
                <span className="text-neutral-600">会社イラスト</span>
              </div>
              <div className="text-center">
                <Button variant="primary">view more →</Button>
              </div>
            </div> */}
          </div>
        </section>

        {children}
      </main>
    </div>
  );
}
