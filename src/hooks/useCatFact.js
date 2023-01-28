import { useEffect, useState } from 'react'
import { getCatFacts } from '../services/getCatFacts'

export function useCatFact () {
  const [fact, setCatFact] = useState('')

  useEffect(() => {
    updateRandomFact()
  }, [])

  const updateRandomFact = () => {
    getCatFacts().then(fact => setCatFact(fact))
  }

  return { fact, updateRandomFact }
}
