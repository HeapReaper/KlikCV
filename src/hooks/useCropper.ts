import { useRef, useEffect, useState } from 'preact/hooks';
// @ts-ignore
import Croppie from 'croppie';
import 'croppie/croppie.css';

export function useCropper(initialImage: string | null = null) {
  const cropContainerRef = useRef<HTMLDivElement>(null);
  const croppieInstance = useRef<Croppie | null>(null);
  const [image, setImage] = useState<string | null>(initialImage);
  const [showCropper, setShowCropper] = useState(false);

  useEffect(() => {
    if (showCropper && cropContainerRef.current && image) {
      croppieInstance.current?.destroy();

      croppieInstance.current = new Croppie(cropContainerRef.current, {
        viewport: { width: 200, height: 200, type: 'circle' },
        boundary: { width: 300, height: 300 },
        showZoomer: true,
      });

      croppieInstance.current.bind({ url: image });
    }

    return () => croppieInstance.current?.destroy();
  }, [showCropper, image]);

  const getCroppedImage = async (): Promise<string | null> => {
    if (!croppieInstance.current) return null;
    const cropped = await croppieInstance.current.result({
      type: 'base64',
      size: 'viewport',
      format: 'png',
    });

    return cropped as string;
  };

  return {
    cropContainerRef,
    image,
    setImage,
    showCropper,
    setShowCropper,
    getCroppedImage,
  };
}
