import { useState, useEffect } from 'react'
import { loadImage } from '@zcool/util'

export function useImageAspect(src: string, aspect?: number) {
  const [naturalAspect, setNaturalAspect] = useState(aspect)

  useEffect(() => {
    if (!aspect) {
      loadImage(src)
        .then((img: HTMLImageElement) => {
          setNaturalAspect(img.naturalWidth / img.naturalHeight)
        })
        .catch(console.error)
    }
  }, [src])

  return {
    aspect: naturalAspect
  }
}
