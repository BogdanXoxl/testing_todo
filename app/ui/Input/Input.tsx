"use client";

import React from "react";
import { BsPlusCircle } from "react-icons/bs";

type Props = {
  value?: string;
  placeholder?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onClick?: () => void;
};

export const Input: React.FC<Props> = ({ value, placeholder, onClick, onChange }) => {
  return (
    <div className="flex min-h-[68px] w-full overflow-hidden rounded-2xl border-2 border-neutral bg-secondary text-white focus-within:border-secondary-light-max">
      <input
        autoFocus
        type="text"
        className="w-full border-none bg-transparent px-5 outline-none"
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        onKeyDown={(e) => e.key === "Enter" && onClick?.()}
      />
      <button
        onClick={onClick}
        className="flex items-center rounded-r-xl bg-primary px-4 outline-inherit focus:ring-0 active:bg-primary-darken"
      >
        <BsPlusCircle className="h-7 w-7" />
      </button>
    </div>
  );
};
