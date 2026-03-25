import type { StaticImageData } from "next/image";

export interface PortalImageLightboxProps {
  readonly src: StaticImageData;
  readonly alt: string;
  readonly hint: string;
  readonly className?: string;
  readonly thumbnailSizes?: string;
}
