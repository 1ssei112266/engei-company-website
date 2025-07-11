// ユーティリティ関数を定義する場所
// 今後の開発で共通的に使用される関数を追加予定

export const cn = (...classes: string[]) => {
  return classes.filter(Boolean).join(" ");
};