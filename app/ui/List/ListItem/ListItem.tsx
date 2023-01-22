import clsx from "clsx";
import React from "react";
import type { IconType } from "react-icons";

type Props = {
  onClick?: (e: React.MouseEvent<HTMLElement>) => void;
  postIcon?: IconType;
  onIconClick?: (e: any) => void;
  textDecoration?: "line-through" | "underline" | "overline";
  className?: string;
  children: React.ReactNode;
};

export const ListItem: React.FC<Props> = ({
  onClick,
  textDecoration,
  postIcon: PostIcon,
  onIconClick,
  className,
  children,
}) => {
  return (
    <li
      className={clsx(
        "flex min-h-[68px] w-full items-center justify-between gap-x-4 rounded-2xl bg-gray-800 p-5",
        textDecoration,
        className
      )}
      onClick={onClick}
    >
      <span className="flex gap-x-4">{children}</span>
      {PostIcon && (
        <PostIcon
          className="h-6 w-6 shrink-0 text-gray-400 hover:text-gray-300"
          onClick={onIconClick}
        />
      )}
    </li>
  );
};
