"use client";

import Image from "next/image";
import { createPortal } from "react-dom";
import { useEffect, useState } from "react";
import type { PortalImageLightboxProps } from "@/components/portal-image-lightbox/portal-image-lightbox.types";

export const PortalImageLightbox = ({
  src,
  alt,
  hint,
  className = "",
  thumbnailSizes = "(max-width: 1024px) 45vw, 360px",
}: PortalImageLightboxProps) => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) {
      return;
    }

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
      }
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  return (
    <>
      <button
        type="button"
        title={hint}
        aria-label={`${hint} preview`}
        onClick={() => setOpen(true)}
        className="block w-full cursor-zoom-in"
      >
        <Image
          src={src}
          alt={alt}
          width={160}
          height={100}
          sizes={thumbnailSizes}
          quality={90}
          className={`rounded-lg border border-[#E6C36A]/25 shadow-[0_0_20px_rgba(230,195,106,0.22)] transition-shadow duration-200 hover:shadow-[0_0_28px_rgba(230,195,106,0.35)] ${className}`}
        />
      </button>

      {open && typeof document !== "undefined"
        ? createPortal(
            <div
              className="fixed inset-0 z-[250] flex items-center justify-center bg-black/85 px-4 py-4 backdrop-blur-sm"
              onClick={() => setOpen(false)}
            >
              <button
                type="button"
                onClick={() => setOpen(false)}
                aria-label="Close image preview"
                className="absolute right-5 top-5 inline-flex h-8 w-8 cursor-pointer items-center justify-center rounded-full border border-slate-500/60 bg-slate-900/80 text-xs font-semibold text-slate-100 hover:border-slate-300/60"
              >
                X
              </button>
              <div
                className="relative h-[95vh] w-[95vw]"
                onClick={(event) => event.stopPropagation()}
              >
                <Image
                  src={src}
                  alt={alt}
                  fill
                  sizes="95vw"
                  className="rounded-xl object-contain shadow-[0_24px_80px_rgba(0,0,0,0.65)]"
                />
              </div>
            </div>,
            document.body,
          )
        : null}
    </>
  );
};
