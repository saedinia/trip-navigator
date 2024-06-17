import { cn } from "@/lib/utils";
import React from "react";

interface Props {
  imageOnly?: boolean;
  className?: string;
}

export default function Logo({ imageOnly = false, className }: Props) {
  return (
    <div className={cn("logo flex items-center", className)}>
      <svg
        className="w-12 h-12 fill-current p-2 rounded-full bg-green-brand"
        viewBox="0 0 24 24"
      >
        <path d="m17.27 6.73-4.24 10.13-1.32-3.42-.32-.83-.82-.32-3.43-1.33 10.13-4.23M21 3 3 10.53v.98l6.84 2.65L12.48 21h.98L21 3z" />
      </svg>

      {!imageOnly && (
        <h1 className="ml-2 font-bold text-2xl">TripNavigator.</h1>
      )}
    </div>
  );
}
