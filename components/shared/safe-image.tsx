"use client";

import Image, { type ImageProps } from "next/image";
import { useState } from "react";

type SafeImageProps = ImageProps & {
  fallbackSrc?: string;
};

export function SafeImage({
  src,
  fallbackSrc = "/images/placeholders/clinic.svg",
  alt,
  ...props
}: SafeImageProps) {
  const [currentSrc, setCurrentSrc] = useState(src);
  const hasFill = "fill" in props && Boolean(props.fill);
  const finalSizes = props.sizes ?? (hasFill ? "100vw" : undefined);

  return (
    <Image
      {...props}
      src={currentSrc}
      alt={alt}
      sizes={finalSizes}
      onError={() => setCurrentSrc(fallbackSrc)}
    />
  );
}
