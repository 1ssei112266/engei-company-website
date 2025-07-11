import Link from "next/link";
import Button from "../atoms/Button";

// ヘッダーコンポーネント
// サイトのメインナビゲーションとロゴを含む
export default function Header() {
  return (
    <header className="navbar bg-base-100 shadow-lg">
      <div className="navbar-start">
        {/* ロゴ部分 */}
        <Link href="/" className="btn btn-ghost normal-case text-xl text-primary">
          企業ロゴ
        </Link>
      </div>
      
      <div className="navbar-center hidden lg:flex">
        {/* デスクトップメニュー */}
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link href="/" className="text-primary hover:text-secondary">
              TOPページ
            </Link>
          </li>
          <li>
            <Link href="/who-we-are" className="text-primary hover:text-secondary">
              WHO WE ARE
            </Link>
          </li>
          <li>
            <Link href="/hr" className="text-primary hover:text-secondary">
              HR
            </Link>
          </li>
          <li>
            <Link href="/blog" className="text-primary hover:text-secondary">
              BLOG
            </Link>
          </li>
          <li>
            <Link href="/company" className="text-primary hover:text-secondary">
              COMPANY
            </Link>
          </li>
          <li>
            <Link href="/contact" className="text-primary hover:text-secondary">
              お問い合わせ
            </Link>
          </li>
        </ul>
      </div>
      
      <div className="navbar-end">
        {/* ハンバーガーメニュー（モバイル） */}
        <div className="dropdown dropdown-end lg:hidden">
          <div tabIndex={0} role="button" className="btn btn-ghost">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <Link href="/" className="text-primary">
                TOPページ
              </Link>
            </li>
            <li>
              <Link href="/who-we-are" className="text-primary">
                WHO WE ARE
              </Link>
            </li>
            <li>
              <Link href="/hr" className="text-primary">
                HR
              </Link>
            </li>
            <li>
              <Link href="/blog" className="text-primary">
                BLOG
              </Link>
            </li>
            <li>
              <Link href="/company" className="text-primary">
                COMPANY
              </Link>
            </li>
            <li>
              <Link href="/contact" className="text-primary">
                お問い合わせ
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}