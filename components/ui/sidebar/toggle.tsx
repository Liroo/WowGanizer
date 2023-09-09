'use client';

import ChevronSvg from 'icons/chevron.svg';
import { useState } from 'react';

export type UISideBarToggleProps = {
  // Title for the link
  title: string;
  // Icon for the link, can be an emoji using UIIconEmoji or directly any React node such as svg
  icon: React.ReactNode;
  // Children of the category
  children?: React.ReactNode;
};

export default function UISideBarToggle({
  title,
  icon,
  children,
}: UISideBarToggleProps) {
  const [open, setOpen] = useState<boolean>(false);

  const toggleOpen = () => {
    setOpen(!open);
  };

  return (
    <>
      <div className="w-ful group px-[4px]">
        <div
          onClick={toggleOpen}
          className="group-hover:bg-primary flex cursor-pointer select-none rounded px-[8px] py-[4px] group-hover:bg-opacity-10"
        >
          <ChevronSvg
            className="w-[12px] shrink-0 fill-current transition-transform duration-150"
            style={{
              transform: open ? 'rotate(0deg)' : 'rotate(-90deg)',
            }}
          />
          <div className="mx-[8px]">{icon}</div>
          <p className="whitespace-nowrap">{title}</p>
        </div>
      </div>
      {open && children}
    </>
  );
}
