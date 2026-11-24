import { useState } from 'react';
import { ImageOff } from 'lucide-react';

interface EditorialImageProps {
  src: string;
  alt: string;
  fallbackTitle: string;
  className?: string;
  imgClassName?: string;
  priority?: boolean;
}

export function EditorialImage({
  src,
  alt,
  fallbackTitle,
  className = '',
  imgClassName = '',
  priority = false,
}: EditorialImageProps) {
  const [loaded, setLoaded] = useState(false);
  const [failed, setFailed] = useState(false);

  return (
    <div
      className={`relative overflow-hidden bg-[#ECE7E5] ${className}`}
    >
      {!loaded && !failed && (
        <div
          aria-hidden="true"
          className="absolute inset-0 animate-pulse bg-gradient-to-br from-[#F3EFEA] via-[#ECE7E5] to-[#E6E2DF]"
        />
      )}

      {failed ? (
        <div className="flex h-full w-full flex-col items-center justify-center bg-gradient-to-br from-[#F3EFEA] via-[#ECE7E5] to-[#E6E2DF] p-6 text-center text-[#57423B]">
          <ImageOff className="mb-3 h-7 w-7 opacity-60" aria-hidden="true" />
          <p className="font-editorial text-lg font-medium text-[#1F1E1D]">
            {fallbackTitle}
          </p>
          <p className="mt-1 text-xs text-[#8A726A]">Visual preview unavailable</p>
        </div>
      ) : (
        <img
          src={src}
          alt={alt}
          referrerPolicy="no-referrer"
          loading={priority ? 'eager' : 'lazy'}
          onLoad={() => setLoaded(true)}
          onError={() => setFailed(true)}
          className={`h-full w-full object-cover transition-opacity duration-300 ${
            loaded ? 'opacity-100' : 'opacity-0'
          } ${imgClassName}`}
        />
      )}
    </div>
  );
}
