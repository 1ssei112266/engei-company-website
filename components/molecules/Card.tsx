"use client";

import { ReactNode } from "react";
import Button from "../atoms/Button";

interface CardProps {
  title: string;
  description?: string;
  children?: ReactNode;
  buttonText?: string;
  onButtonClick?: () => void;
  className?: string;
}

// カード型レイアウトコンポーネント
// daisyUIのcard classを使用してカスタムテーマを適用
export default function Card({
  title,
  description,
  children,
  buttonText,
  onButtonClick,
  className = "",
}: CardProps) {
  return (
    <div className={`card bg-base-100 shadow-xl ${className}`}>
      <div className="card-body">
        <h2 className="card-title text-primary">{title}</h2>
        {description && (
          <p className="text-neutral-600">{description}</p>
        )}
        {children}
        {buttonText && (
          <div className="card-actions justify-end">
            <Button variant="primary" onClick={onButtonClick}>
              {buttonText}
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}