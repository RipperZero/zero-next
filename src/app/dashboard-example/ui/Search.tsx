"use client";

import { Route } from "next";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

import { FC } from "react";

import { useDebouncedCallback } from "use-debounce";

import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";

type SearchProps = {
  placeholder: string;
};

const Search: FC<SearchProps> = ({ placeholder }) => {
  // #region hooks start
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();
  // #endregion hooks end

  // #region useEffect functions start
  // #endregion useEffect functions end

  // #region logic functions start
  const handleSearch = useDebouncedCallback((term: string) => {
    console.log(`Searching... ${term}`);

    const params = new URLSearchParams(searchParams);

    params.set("page", "1");

    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    term.length > 0 ? params.set("query", term) : params.delete("query");

    replace(`${pathname}?${params.toString()}` as Route);
  }, 300);
  // #endregion logic functions end

  // #region render functions start
  return (
    <div className="relative flex flex-1 flex-shrink-0">
      <label htmlFor="search" className="sr-only">
        Search
      </label>
      <input
        className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
        placeholder={placeholder}
        defaultValue={searchParams.get("query")?.toString()}
        onChange={(e) => {
          handleSearch(e.target.value);
        }}
      />
      <MagnifyingGlassIcon className="absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
    </div>
  );
  // #endregion render functions end
};

export { Search };
