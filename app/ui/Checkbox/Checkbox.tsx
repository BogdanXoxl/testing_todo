import clsx from "clsx";
import React from "react";
import { BsCheck } from "react-icons/bs";

type Props = {
  checked?: boolean;
  className?: string;
};

export const Checkbox: React.FC<Props> = ({ checked = false, className }) => {
  return (
    <div
      className={clsx(
        "h-7 w-7 shrink-0 rounded-lg border-2 border-primary",
        checked && "bg-primary",
        className
      )}
    >
      {checked && <BsCheck size={24} className="text-secondary" />}
    </div>
  );
};
