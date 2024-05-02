"use client";

import { useState } from "react";
import { BsFilterLeft } from "react-icons/bs";

import { usePathname, useRouter, useSearchParams } from "next/navigation";

export default function Filter() {
  const [showMenu, setShowMenu] = useState(false);
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const onFiltered = (value) => {
    const params = new URLSearchParams(searchParams);
    if (value) {
      params.set("sort", value);
    } else {
      params.delete("sort");
    }
    replace(`${pathname}?${params.toString()}`);
  };

  return (
    <div>
      <button
        className="rounded-lg bg-black text-white flex items-center justify-items-center p-2"
        onClick={() => setShowMenu((prev) => !prev)}
      >
        <BsFilterLeft size={24} />
      </button>
      {showMenu && (
        <div className="absolute z-50 bg-white mr-10 w-[200px] right-0 shadow-md py-5 px-4 rounded-md mt-2">
          <div className="text-sm flex flex-col gap-1">
            <div className="flex gap-1 items-center">
              <input
                type="radio"
                value="asc"
                name="filter"
                onChange={(e) => onFiltered(e.target.value)}
              />
              <label htmlFor="asc">Filter by newest</label>
            </div>
            <div className="flex gap-1 items-center">
              <input
                type="radio"
                value="desc"
                name="filter"
                onChange={(e) => onFiltered(e.target.value)}
              />
              <label htmlFor="desc">Filter by oldest</label>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
