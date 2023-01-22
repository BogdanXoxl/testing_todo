import clsx from "clsx";
import React from "react";

type Props = {
  className?: string;
  children: React.ReactNode;
};

export const List: React.FC<Props> = ({ className, children }) => {
  return <ul className={clsx("flex flex-col gap-y-4", className)}>{children}</ul>;
};
