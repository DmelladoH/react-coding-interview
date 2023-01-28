const CAT_RANDOM_FACT_URL = 'https://catfact.ninja/fact'

export async function getCatFacts () {
  const resoponse = await fetch(CAT_RANDOM_FACT_URL)
  const data = await resoponse.json()
  return data.fact
}
