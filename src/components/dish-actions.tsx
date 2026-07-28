"use client";

import { useState } from "react";
import { CheckIcon, PlusIcon } from "./icons";

export function AddToOrderButton({ dishName }: { dishName: string }) {
  const [added, setAdded] = useState(false);

  function handleAdd() {
    setAdded(true);
    window.setTimeout(() => setAdded(false), 1600);
  }

  return (
    <button
      type="button"
      onClick={handleAdd}
      aria-label={`Add ${dishName} to your order`}
      className="inline-flex items-center gap-1.5 rounded-full bg-ink px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-ink/90"
    >
      {added ? (
        <>
          <CheckIcon className="h-4 w-4" /> Added
        </>
      ) : (
        <>
          <PlusIcon className="h-4 w-4" /> Add
        </>
      )}
    </button>
  );
}
