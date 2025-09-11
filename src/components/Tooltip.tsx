"use client";

import * as TooltipPrimitive from "@radix-ui/react-tooltip";
import { cn } from "@/utils";

interface TooltipContentProps extends TooltipPrimitive.TooltipContentProps {
  ref?: React.RefObject<HTMLDivElement>;
}

export const TooltipContent = ({
  ref,
  sideOffset,
  className,
  ...props
}: TooltipContentProps) => {
  return (
    <TooltipPrimitive.Content
      ref={ref}
      sideOffset={sideOffset}
      className={cn(
        "animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 text-background border-divider data-[state=closed]:zoom-out-95 z-50 max-w-[90vw] border bg-zinc-200 px-2 py-1.5 text-sm shadow-md duration-100",
        className,
      )}
      {...props}
    />
  );
};

TooltipContent.displayName = TooltipPrimitive.Content.displayName;
