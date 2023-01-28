import { useEffect, useState } from 'react'
import { getCatImage } from '../services/getCatImage'

export function useCatImage ({ fact }) {
  const [catImageURL, setCatImage] = useState('')

  useEffect(() => {
    if (!fact) return

    const firstWord = fact.split(' ')[0]
    getCatImage(firstWord).then(url => setCatImage(url))
  }, [fact])

  return { catImageURL }
}
