"use client";
import Link from "next/link";
import clsx from "clsx";
import React from "react";
interface MobileItemProps {
  label: string;
  icon: any;
  href: string;
  onClick?: () => void;
  active?: boolean;
}

export default function MobileItem({
  label,
  href,
  icon:Icon,
  onClick,
  active,
}: MobileItemProps) {
  const handleClick = () => {
    if (onClick) {
      return onClick();
    }
  };
  return <Link href={href}>
    <
  </Link>;
}
